window.onload = function(){
	var s = Snap("#mycanvas");
    // Cargamos el SVG
    Snap.load("img/LANDING_LT_WEB.svg", function (f) {
        // Seleccionamos los grupos de las pantallas
        var PANTALLA_1 = f.select("g[id='PANTALLA_1']"),
            PANTALLA_2 = f.select("g[id='PANTALLA_2']");
        
        // Movemos el grupo de la pantalla 1 al sitio visible        
        PANTALLA_1.animate({transform:"t0 768"},10);       
        PANTALLA_2.animate({transform:"t0 780"},10);

        // Seleccionamos la flecha
        var flecha = PANTALLA_1.select("path[id='FLECHA']");

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
                                PANTALLA_1.animate({transform:"t0 -768"},2000);
                                PANTALLA_2.animate({transform:"t0 0"},950);
                        })
                });
        }, 
            // Empequeñecemos
            function(){
                flecha.animate({transform:"t0 0 s1"},100);
        });

        s.append(PANTALLA_1);
        s.append(PANTALLA_2);
    });
}