window.onload = function(){
	var s = Snap("#demo");
    Snap.load("img/prueba_1_app.svg", function (f) {
        var fondo = f.select("rect[id='fondo']"),
        	circuloSuperiorSup = f.select("path[id='circuloSuperiorSup']"),
        	lineaAmarillaInf = f.select("path[id='lineaAmarillaInf']"),
        	lineaAzulInf = f.select("polygon[id='lineaAzulInf']"),
        	bordeExteriorInf = f.select("path[id='bordeExteriorInf']"),
        	circuloSuperiorInf = f.select("path[id='circuloSuperiorInf']"),
        	separadorInf = f.select("rect[id='separadorInf']"),
        	bola = f.select("circle[id='bola']"),
        	lineaAzulSup = f.select("polygon[id='lineaAzulSup']"),
        	lineaAmarillaSup = f.select("path[id='lineaAmarillaSup']"),
        	bordeExteriorSup = f.select("path[id='bordeExteriorSup']"),
        	separadorSup = f.select("rect[id='separadorSup']");
        var groupInf, groupSup;

            // Punto de inicio
        circuloSuperiorSup.attr({d:"M245,355.02"});
        bola.attr({cy:"353.064", cx:"245"});

        circuloSuperiorSup.animate({d:"M245,341.797 c-13.531,0-24.5,6.566-24.5,14.666s10.969,14.665,24.5,14.665s24.5-6.565,24.5-14.665S258.531,341.797,245,341.797z M245,364.462c-8.469,0-15.334-3.581-15.334-7.999c0-4.419,6.865-8,15.334-8s15.334,3.581,15.334,8 C260.334,360.881,253.469,364.462,245,364.462z"},350, function(){
            circuloSuperiorSup.animate({transform:"t0 -127"},600);

            bola.animate({cy:"-15"},950, function(){
                bola.attr({cy:"510"});   
                bola.animate({cy:"203.967"},1200,mina.elastic, cilindros());
            });
            s.append(bola);
        });

        function cilindros(){
            //Cilindro Inferior
            groupInf = s.group(lineaAzulInf,lineaAmarillaInf,bordeExteriorInf,separadorInf,circuloSuperiorInf);
            groupInf.animate({transform:"t0 10"},1000,mina.elastic);
            
            //Cilindro superior
            lineaAmarillaSup.attr({d:"M246.557,237.368 c-17.048,0.388-26.057-6.778-26.057-6.778v23.138c0,8.096,10.969,14.659,24.5,14.659s24.5-6.563,24.5-14.659v-23.805 C269.5,237.924,261.224,237.034,246.557,237.368z"});
            bordeExteriorSup.attr({d:"M246.557,242.368 c-17.048,0.388-26.057-8-26.057-8v17.993c0,8.1,10.969,14.667,24.5,14.667s24.5-6.566,24.5-14.667v-9.993 C269.5,219.673,261.224,242.368 246.557,242.368z"});
            lineaAzulSup.attr({points:"257.98,231.451 258.293,272.354 266.491,268.553 270.425,263.977 270.425,260.397 271.5,214.301 266.581,227.228"});
            separadorSup.attr({x:"257.453",y:"243.076"});

            groupSup = s.group(lineaAmarillaSup,lineaAzulSup,bordeExteriorSup,separadorSup,circuloSuperiorSup);
            groupSup.animate({transform:"t0 -85"},1000,mina.elastic,cierre);

            s.append(bola);
            s.append(groupSup);
            s.append(groupInf);
        }

        function cierre(){
            //lineaAzulSup.attr({points:"257.98,156.451 258.293,177.354 266.491,173.553 270.425,168.977 270.425,165.397 271.5,149.301 266.581,152.228"});
            //lineaAmarillaSup.attr({d:"M246.557,160.368 c-17.048,0.388-26.057-6.778-26.057-6.778v23.138c0,8.096,10.969,14.659,24.5,14.659s24.5-6.563,24.5-14.659v-23.805 C269.5,160.924,261.224,160.034,246.557,160.368z"});
            
            //lineaAmarillaSup.animate({transform:"s-0"},1000);

            //s.append(lineaAmarillaSup);
            //s.append(lineaAzulSup);
        }

        s.append(fondo);
        s.append(circuloSuperiorSup);
    });
}