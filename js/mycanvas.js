$(function () {
    "use strict";
    var resizeTracker;
    // Counteracts all transforms applied above an element.
    // Apply a translation to the element to have it remain at a local position
    var unscale = function (el) {
        var svg = el.ownerSVGElement.ownerSVGElement;
        var xf = el.scaleIndependentXForm;
        if (!xf) {
            // Keep a single transform matrix in the stack for fighting transformations
            xf = el.scaleIndependentXForm = svg.createSVGTransform();
            // Be sure to apply this transform after existing transforms (translate)
            el.transform.baseVal.appendItem(xf);
        }
        var m = svg.getTransformToElement(el.parentNode);
        m.e = m.f = 0; // Ignore (preserve) any translations done up to this point
        xf.setMatrix(m);
    };
    [].forEach.call($("text, .tick"), unscale);
    $(window).resize(function () {
        if (resizeTracker) clearTimeout(resizeTracker);
        resizeTracker = setTimeout(function () { [].forEach.call($("text, .tick"), unscale); }, 100);
    });
});

window.onload = function(){
    var s;
    
    var dispositivo = navigator.userAgent.toLowerCase();
    if( dispositivo.search(/iphone|ipad|iemobile|blackberry|opera mini|android|webos|windowsphone/) > -1 ){
        cargaMobile();
    }else{
        //cargaWeb();
        cargaMobile();
    }

    function cargaWeb(){
        s = Snap("#mycanvas");
        s.attr({viewBox:"0 0 1280 780", preserveAspectRatio:"none"});
        //("M{x},{y}h{dim.width}v{dim.height}",{x:0,y:0,dim:{width:1280,height:780}});
        // Cargamos el SVG
        Snap.load("img/LANDING_LT_WEB.svg", function (f) {
            // Seleccionamos los grupos de las pantallas
            var PANTALLA_1 = f.select("g[id='PANTALLA_1']"),
                PANTALLA_2 = f.select("g[id='PANTALLA_2']");
            
            // Movemos el grupo de la pantalla 1 al sitio visible        
            PANTALLA_1.animate({transform:"t0 780"},1);       
            PANTALLA_2.animate({transform:"t0 780"},1);

            // Seleccionamos la flecha
            var flecha = PANTALLA_1.select("path[id='FLECHA']");
            var flecha2 = PANTALLA_2.select("path[id='FLECHA_1']");

            // Si se pone el raton encima agrandamos y si se pone el raton fuera, se vuelve a su sitio
            flecha.hover(
                // Agrandamos
                function(){
                    flecha.animate({transform:"t0 0 s2"},100,
                        // Al finalizar el evento de agrandar registramos el click
                        function(){
                            flecha.click(
                                // Mostramos el segundo grupo
                                function(){
                                    PANTALLA_1.animate({transform:"t0 0"},2000);
                                    PANTALLA_2.animate({transform:"t0 0"},950);
                            });
                    });
            }, 
                // Empequeñecemos
                function(){
                    flecha.animate({transform:"t0 0 s1"},100);
            });

            // Si se pone el raton encima agrandamos y si se pone el raton fuera, se vuelve a su sitio
            flecha2.hover(
                // Agrandamos
                function(){
                    flecha2.animate({transform:"t0 0 s2"},100,
                        // Al finalizar el evento de agrandar registramos el click
                        function(){
                            flecha2.click(
                                // Mostramos el segundo grupo
                                function(){
                                    PANTALLA_2.animate({transform:"t0 780"},950);
                                    PANTALLA_1.animate({transform:"t0 780"},950);
                            });
                    });
            }, 
                // Empequeñecemos
                function(){
                    flecha2.animate({transform:"t0 0 s1"},100);
            });


            s.append(PANTALLA_1);
            s.append(PANTALLA_2);
        });
    }


    function cargaMobile(){
        s = Snap("#mycanvas");
        s.attr({viewBox:"0 0 320 440", preserveAspectRatio:"none"});
        // Cargamos el SVG
        Snap.load("img/LANDING_LT_MOBILE.svg", function (f) {
            // Seleccionamos los grupos de las pantallas
            var PANTALLA_1 = f.select("g[id='PANTALLA_1']"),
                PANTALLA_2 = f.select("g[id='PANTALLA_2']");
            
            // Movemos el grupo de la pantalla 1 al sitio visible        
            //PANTALLA_1.animate({transform:"t0 768"},10);       
            //PANTALLA_2.animate({transform:"t0 780"},10);

            // Seleccionamos la flecha
            var flecha = PANTALLA_1.select("path[id='FLECHA']");
            var flecha2 = PANTALLA_2.select("path[id='FLECHA_1_']");

            flecha.click(
                // Mostramos el segundo grupo
                function(){
                    PANTALLA_1.animate({transform:"t0 -440"},950);
                    PANTALLA_2.animate({transform:"t0 -440"},950);
            });

            flecha2.click(
                // Mostramos el segundo grupo
                function(){
                    PANTALLA_1.animate({transform:"t0 0"},950);
                    PANTALLA_2.animate({transform:"t0 0"},950);
            });

            
            s.append(PANTALLA_1);
            s.append(PANTALLA_2);
        });
    }
    
}