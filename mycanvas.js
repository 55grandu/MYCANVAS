window.onload = function(){
	var s = Snap("#demo");
    //Snap.load("img/prueba_1_app.svg", function (f) {
    Snap.load("prueba_2_app.svg", function (f) {
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
        var rectSup, rectInf;

            // Punto de inicio
        circuloSuperiorSup.attr({d:"M245,355.02"});
        lineaAzulInf.attr({transform:"t-35 0"});
        separadorInf.attr({transform:"t-35 0"});
        lineaAzulInf.after(lineaAmarillaInf);
        bola.attr({cy:"353.064", cx:"245"});

        circuloSuperiorSup.animate({d:"M245,341.797 c-13.531,0-24.5,6.566-24.5,14.666s10.969,14.665,24.5,14.665s24.5-6.565,24.5-14.665S258.531,341.797,245,341.797z M245,364.462c-8.469,0-15.334-3.581-15.334-7.999c0-4.419,6.865-8,15.334-8s15.334,3.581,15.334,8 C260.334,360.881,253.469,364.462,245,364.462z"},350, function(){
            rectInf = s.rect(216,160,56,210);
            rectInf.attr({fill:"#5DA6C3"});
            rectInf.after(circuloSuperiorSup);

            circuloSuperiorSup.animate({transform:"t0 -127"},600);
            rectInf.animate({transform:"t0 -135"},600);
            lineaAzulInf.animate({transform:"t0 0"},600);
            separadorInf.animate({transform:"t0 0"},600);

            bola.animate({cy:"-15"},950, function(){
                bola.attr({cy:"510"});   
                bola.animate({cy:"203.967"},1200,mina.elastic, cilindros());
            });
            s.append(lineaAmarillaInf);
            s.append(lineaAzulInf);
            s.append(separadorInf);
            s.append(bordeExteriorInf);
            s.append(rectInf);
            s.append(circuloSuperiorSup);
            s.append(bola);
        });

        function cilindros(){
            rectInf.attr({display:"none"});
            //Cilindro Inferior
            groupInf = s.group(lineaAmarillaInf,lineaAzulInf,bordeExteriorInf,separadorInf,circuloSuperiorInf);
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
            rectSup = s.rect(218,185,54,52);
            rectSup.attr({fill:"#5DA6C3"});
            groupSup.append(rectSup);
            groupSup.select("path[id='circuloSuperiorSup']").before(rectSup);
            groupSup.select("rect[id='separadorSup']").animate({transform:"t-37 -28"},700);
            groupSup.select("polygon[id='lineaAzulSup']").animate({transform:"t-55 -24"},1000);
            groupSup.select("path[id='bordeExteriorSup']").animate({transform:"t0 -24"},700);
            groupSup.select("path[id='lineaAmarillaSup']").animate({transform:"t0 -24"},700);

            rectInf = s.rect(216,24,56,210);
            rectInf.attr({fill:"#5DA6C3"});
            rectInf.after(groupSup);
            groupInf.after(groupSup);
            groupInf.after(bola);
            groupInf.append(rectInf);
            groupInf.select("path[id='circuloSuperiorInf']").before(rectInf);
            groupInf.select("rect[id='separadorInf']").animate({transform:"t-37 -135"},700);
            groupInf.select("polygon[id='lineaAzulInf']").animate({transform:"t-55 -135"},1000);
            groupInf.select("path[id='bordeExteriorInf']").animate({transform:"t0 -135"},700);
            groupInf.select("path[id='lineaAmarillaInf']").animate({transform:"t0 -135"},700);

            groupSup.animate({transform:"t0 -85"},1000, mina.easein, function(){
                groupSup.animate({transform:"t0 -85 s0"},250);
            });

            groupInf.animate({transform:"t0 -85"},1000, mina.easein, function(){
                groupInf.animate({transform:"t0 0 s0"},250);
            });

            bola.animate({transform:"t-10 -85 s0"},1250, mina.easein);
        }

        function cerrar(){
        }

        s.append(fondo);
        s.append(circuloSuperiorSup);
    });
}