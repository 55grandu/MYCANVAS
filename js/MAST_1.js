window.onload = function(){
    var s = Snap("#mast_01");
    Snap.load("img/MAST_1.svg", function (f) {
        // Cargamos los elementos del SVG
        var bolaAmarilla = f.select("circle[id='bolaAmarilla']"),
            circuloAzul = f.select("path[id='circuloAzul']"),
            contornoCirculoAzul = f.select("path[id='contornoCirculoAzul']"),
            rellenoCirculoBlanco = f.select("path[id='rellenoCirculoBlanco']"),
            bordeCirculoBlanco = f.select("path[id='bordeCirculoBlanco']"),
            rellenoBrilloBolaAmarilla = f.select("path[id='rellenoBrilloBolaAmarilla']"),
            bordeBrilloBolaAmarilla = f.select("path[id='bordeBrilloBolaAmarilla']"),
            bolaVerde = f.select("circle[id='bolaVerde']"),
            rellenoBrilloBolaVerde = f.select("path[id='rellenoBrilloBolaVerde']"),
            bordeBrilloBolaVerde = f.select("path[id='bordeBrilloBolaVerde']"),
            groupBolaAmarrilla = s.group(bolaAmarilla,rellenoBrilloBolaAmarilla,bordeBrilloBolaAmarilla),
            groupBolaVerde = s.group(bolaVerde,rellenoBrilloBolaVerde,bordeBrilloBolaVerde),
            lengthCirculoAzul,lengthContornoCirculoAzul,lengthBordeCirculoBlanco,lengthRellenoCirculoBlanco;

        // Agrupamos los elementos de la bola amarilla y los inicializamos al centro
        groupBolaAmarrilla.select("circle[id='bolaAmarilla']").attr({r:0});
        groupBolaAmarrilla.select("path[id='rellenoBrilloBolaAmarilla']").attr({d:"M198.047,220.616"});
        groupBolaAmarrilla.select("path[id='bordeBrilloBolaAmarilla']").attr({d:"M198.047,220.616"});

        // Agrupamos los elementos de la bola verde y los inicializamos al centro
        groupBolaVerde.select("circle[id='bolaVerde']").attr({cx:198.047, cy:220.616, r:0});
        groupBolaVerde.select("path[id='rellenoBrilloBolaVerde']").attr({d:"M198.047,220.616"});
        groupBolaVerde.select("path[id='bordeBrilloBolaVerde']").attr({d:"M198.047,220.616"});

        groupBolaVerde.after(groupBolaAmarrilla);

        // Grupo Bola Amarilla, empieza en el instante 0
        setTimeout(animacionGrupoBolaAmarilla,1);

        // Grupo Bola Verde, empieza en el instante 1,5s
        setTimeout(animacionGrupoBolaVerde,1300);

        // Circulo Azul, empieza en el instante 3,5s
        setTimeout(animacionCirculoAzul,3300);

        // Circulo Blanco, empieza en el instante 4s
        setTimeout(animacionCirculoBlanco,3300);

        // Cierre Circulo Azul, empieza en el instante 8s
        setTimeout(cierreCirculoBlanco,5300);

        // Cierre Circulo Azul, empieza en el instante 8s
        setTimeout(cierreCirculoAzul,5300);

        // Cierre Circulo Azul, empieza en el instante 8s
        setTimeout(cierreGrupoBolaVerde,7600);

        // Cierre Circulo Azul, empieza en el instante 8s
        setTimeout(cierreGrupoBolaAmarilla,8600);


        function animacionGrupoBolaAmarilla(){            
            // Animamos la bola amarilla para que crezca
            groupBolaAmarrilla.select("circle[id='bolaAmarilla']").animate({r:61.666},2000,mina.bounce);            
            // Animamos los demás elementos del grupo de la bola amarilla
            groupBolaAmarrilla.select("path[id='rellenoBrilloBolaAmarilla']").animate({d:"M154.708,225.283c-2.757,0-5-2.242-5-4.999c0-26.838,21.833-48.672,48.671-48.672c2.757,0,5,2.243,5,5 s-2.243,5-5,5c-21.323,0-38.671,17.349-38.671,38.672C159.708,223.041,157.465,225.283,154.708,225.283z"},2000,mina.bounce);
            groupBolaAmarrilla.select("path[id='bordeBrilloBolaAmarilla']").animate({d:"M198.379,174.112c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5c-22.701,0-41.171,18.469-41.171,41.172 c0,1.38-1.119,2.499-2.5,2.499s-2.5-1.119-2.5-2.499C152.208,194.825,172.92,174.112,198.379,174.112 M198.379,169.112 c-28.216,0-51.171,22.956-51.171,51.172c0,4.135,3.364,7.499,7.5,7.499s7.5-3.364,7.5-7.499 c0-19.945,16.226-36.172,36.171-36.172c4.136,0,7.5-3.364,7.5-7.5S202.515,169.112,198.379,169.112L198.379,169.112z"},2000,mina.bounce);
        }

        function animacionGrupoBolaVerde(){
            // Animamos la bola amarilla para que crezca
            groupBolaVerde.select("circle[id='bolaVerde']").animate({cx:197.713, cy:75.616, r:41.667},2000,mina.bounce); 
            // Animamos los demás elementos del grupo de la bola verde
            groupBolaVerde.select("path[id='rellenoBrilloBolaVerde']").animate({d:"M169.744,79.858c-2.264,0-4.105-1.841-4.105-4.104c0-17.72,14.416-32.137,32.135-32.137 c2.264,0,4.104,1.842,4.104,4.105c0,2.263-1.841,4.104-4.104,4.104c-13.193,0-23.926,10.733-23.926,23.928 C173.848,78.018,172.007,79.858,169.744,79.858z"},2000,mina.bounce);
            groupBolaVerde.select("path[id='bordeBrilloBolaVerde']").animate({d:"M197.773,46.118c0.887,0,1.604,0.719,1.604,1.605c0,0.886-0.718,1.604-1.604,1.604 c-14.57,0-26.426,11.855-26.426,26.428c0,0.886-0.718,1.604-1.604,1.604c-0.887,0-1.605-0.718-1.605-1.604 C168.139,59.413,181.434,46.118,197.773,46.118 M197.773,41.118c-19.098,0-34.635,15.538-34.635,34.637 c0,3.642,2.963,6.604,6.605,6.604c3.641,0,6.604-2.962,6.604-6.604c0-11.815,9.611-21.428,21.426-21.428 c3.642,0,6.604-2.962,6.604-6.604S201.415,41.118,197.773,41.118L197.773,41.118z"},2000,mina.bounce);
        }

        function animacionCirculoAzul(){
            lengthCirculoAzul = circuloAzul.getTotalLength();
            lengthContornoCirculoAzul = contornoCirculoAzul.getTotalLength();
            // Añadimos los atributos strokeDasharray y strokeDashoffset a los componentes del circulo azul
            contornoCirculoAzul.attr({strokeDasharray:"671.430419921875 671.430419921875", strokeDashoffset: "671.430419921875"});
            circuloAzul.attr({strokeDasharray:"670.62744140625 670.62744140625", strokeDashoffset: "670.62744140625"});

            s.append(contornoCirculoAzul);
            s.append(circuloAzul);
            s.append(bordeCirculoBlanco);
            s.append(rellenoCirculoBlanco);
            s.append(groupBolaVerde);
            s.append(groupBolaAmarrilla);

            circuloAzul.animate({strokeDashoffset:"0"},2010);
            contornoCirculoAzul.animate({strokeDashoffset:"0"},2000);
        }

        function animacionCirculoBlanco(){
            lengthRellenoCirculoBlanco = rellenoCirculoBlanco.getTotalLength();
            lengthBordeCirculoBlanco = bordeCirculoBlanco.getTotalLength();
            // Añadimos los atributos strokeDasharray y strokeDashoffset a los componentes del circulo azul
            bordeCirculoBlanco.attr({strokeDasharray:"671.430419921875 671.430419921875", strokeDashoffset:"671.430419921875"});
            rellenoCirculoBlanco.attr({strokeDasharray:"665.4508056640625 665.4508056640625", strokeDashoffset:"665.4508056640625"});

            s.append(bordeCirculoBlanco);
            s.append(rellenoCirculoBlanco);
            s.append(groupBolaVerde);
            s.append(groupBolaAmarrilla);

            rellenoCirculoBlanco.animate({strokeDashoffset:"0"},2010, mina.linear);
            bordeCirculoBlanco.animate({strokeDashoffset:"0"},2000, mina.linear);
        }

        function cierreCirculoBlanco(){
            bordeCirculoBlanco.animate({transform:"t0,0 r-90"},1000, function(){
                bordeCirculoBlanco.animate({strokeDashoffset:"-671.430419921875"},1000);
            });
            rellenoCirculoBlanco.animate({transform:"t0,0 r-90"},990, function(){
                rellenoCirculoBlanco.animate({strokeDashoffset:"-665.4508056640625"},990);
            }); 
        }

        function cierreCirculoAzul(){
            //alert(circuloAzul.getTotalLength());
            //alert(contornoCirculoAzul.getTotalLength());
            contornoCirculoAzul.animate({transform:"t0,0 r90"},1000, function(){
                contornoCirculoAzul.animate({strokeDashoffset:"-671.430419921875"},1000);
            });
            circuloAzul.animate({transform:"t0,0 r90"},990, function(){
                circuloAzul.animate({strokeDashoffset:"-670.62744140625"},990);
            });
        }

        function cierreGrupoBolaVerde(){
            groupBolaVerde.select("circle[id='bolaVerde']").attr({class:"animated bounceOut"});
            groupBolaVerde.select("path[id='rellenoBrilloBolaVerde']").attr({class:"animated bounceOut"});
            groupBolaVerde.select("path[id='bordeBrilloBolaVerde']").attr({class:"animated bounceOut"});
        }
        function cierreGrupoBolaAmarilla(){
            //groupBolaAmarrilla.select("circle[id='bolaAmarilla']").animate({r:0},2000,mina.bounce);
            groupBolaAmarrilla.select("circle[id='bolaAmarilla']").attr({class:"animated bounceOut "});
            groupBolaAmarrilla.select("path[id='rellenoBrilloBolaAmarilla']").attr({class:"animated bounceOut"});
            groupBolaAmarrilla.select("path[id='bordeBrilloBolaAmarilla']").attr({class:"animated bounceOut"});
        }
    });
}

