window.onload = function(){
    var s = Snap("#mycanvas");
    Snap.load("doc/MAST/MAST_1.svg", function (f) {
        // Cargamos los elementos del SVG
        var bolaAmarilla = f.select("circle[id='bolaAmarilla']"),
            circuloAzul = f.select("path[id='circuloAzul']"),
            rellenoCirculoBlanco = f.select("path[id='rellenoCirculoBlanco']"),
            bordeCirculoBlanco = f.select("path[id='bordeCirculoBlanco']"),
            rellenoBrilloBolaAmarilla = f.select("path[id='rellenoBrilloBolaAmarilla']"),
            bordeBrilloBolaAmarilla = f.select("path[id='bordeBrilloBolaAmarilla']"),
            bolaVerde = f.select("circle[id='bolaVerde']"),
            rellenoBrilloBolaVerde = f.select("path[id='rellenoBrilloBolaVerde']"),
            bordeBrilloBolaVerde = f.select("path[id='bordeBrilloBolaVerde']");

        // Agrupamos los elementos de la bola amarilla y los inicializamos al centro
        var groupBolaAmarrilla = s.group(bolaAmarilla,rellenoBrilloBolaAmarilla,bordeBrilloBolaAmarilla);
        groupBolaAmarrilla.select("circle[id='bolaAmarilla']").attr({r:0});
        groupBolaAmarrilla.select("path[id='rellenoBrilloBolaAmarilla']").attr({d:"M198.047,220.616"});
        groupBolaAmarrilla.select("path[id='bordeBrilloBolaAmarilla']").attr({d:"M198.047,220.616"});

        // Animamos la bola amarilla para que crezca
        groupBolaAmarrilla.select("circle[id='bolaAmarilla']").animate({r:61.666},2000,mina.bounce, function(){
            // Agrupamos los elementos de la bola amarilla y los inicializamos al centro
            var groupBolaVerde =s.group(bolaVerde,rellenoBrilloBolaVerde,bordeBrilloBolaVerde);
            groupBolaVerde.select("circle[id='bolaVerde']").attr({cx:198.047, cy:220.616, r:0});
            groupBolaVerde.select("path[id='rellenoBrilloBolaVerde']").attr({d:"M198.047,220.616"});
            groupBolaVerde.select("path[id='bordeBrilloBolaVerde']").attr({d:"M198.047,220.616"});

            // Ponemos el grupo Verde por detras del grupo amarillo
            groupBolaVerde.after(groupBolaAmarrilla);

            // Animamos la bola verde para que crezca
            groupBolaVerde.select("circle[id='bolaVerde']").animate({cx:197.713, cy:75.616, r:41.667},2000,mina.bounce, function(){
                // Creamos el contorno
                var contornoCirculoAzul = s.path({d:"m 198.5048,76.676163 c 78.31366,0 142.03886,64.132917 142.05046,142.961117 0.0124,78.82374 -63.69474,142.95579 -142.0084,142.95579 -78.31544,0 -142.03974,-64.13294 -142.051337,-142.95937"});
                contornoCirculoAzul.attr({fill:"none",strokeWidth:"38", strokeMiterlimit:"10", stroke:"#000000", strokeDasharray:"1414.460693359375 1414.460693359375" , strokeDashoffset: "1414.460693359375"});

                //Modificamos el circulo para que sea una linea
                circuloAzul.attr({d:"m 198.5048,76.676163 c 78.31366,0 142.03886,64.132917 142.05046,142.961117 0.0124,78.82374 -63.69474,142.95579 -142.0084,142.95579 -78.31544,0 -142.03974,-64.13294 -142.051337,-138"});
                circuloAzul.attr({fill:"none",strokeWidth:"27", stroke:"#00AAC6", strokeDasharray:"1414.460693359375 1414.460693359375" , strokeDashoffset: "1414.460693359375"});

                // Montamos en el svg
                s.append(contornoCirculoAzul);
                s.append(circuloAzul);
                s.append(groupBolaVerde);
                s.append(groupBolaAmarrilla);

                // Animamos la linea
                circuloAzul.animate({strokeDashoffset:"0"},2030, function(){
                     // Creamos el contorno
                    bordeCirculoBlanco.attr({strokeDasharray:"665.4508056640625 665.4508056640625", strokeDashoffset:"665.4508056640625"});
                    rellenoCirculoBlanco.attr({strokeDasharray:"662.66015625 662.66015625", strokeDashoffset:"662.66015625"});

                    // Montamos en el svg
                    s.append(contornoCirculoAzul);
                    s.append(circuloAzul);
                    s.append(bordeCirculoBlanco);
                    s.append(rellenoCirculoBlanco);
                    s.append(groupBolaVerde);
                    s.append(groupBolaAmarrilla);

                    // Animamos la linea
                    bordeCirculoBlanco.animate({strokeDashoffset:"0"},2000);
                    rellenoCirculoBlanco.animate({strokeDashoffset:"0"},2030);
                });
                // Animamos el contorno
                contornoCirculoAzul.animate({strokeDashoffset:"0"},2000);
            });
            // Animamos los demás elementos del grupo de la bola verde
            groupBolaVerde.select("path[id='rellenoBrilloBolaVerde']").animate({d:"M169.744,79.858c-2.264,0-4.105-1.841-4.105-4.104c0-17.72,14.416-32.137,32.135-32.137 c2.264,0,4.104,1.842,4.104,4.105c0,2.263-1.841,4.104-4.104,4.104c-13.193,0-23.926,10.733-23.926,23.928 C173.848,78.018,172.007,79.858,169.744,79.858z"},2000,mina.bounce);
            groupBolaVerde.select("path[id='bordeBrilloBolaVerde']").animate({d:"M197.773,46.118c0.887,0,1.604,0.719,1.604,1.605c0,0.886-0.718,1.604-1.604,1.604 c-14.57,0-26.426,11.855-26.426,26.428c0,0.886-0.718,1.604-1.604,1.604c-0.887,0-1.605-0.718-1.605-1.604 C168.139,59.413,181.434,46.118,197.773,46.118 M197.773,41.118c-19.098,0-34.635,15.538-34.635,34.637 c0,3.642,2.963,6.604,6.605,6.604c3.641,0,6.604-2.962,6.604-6.604c0-11.815,9.611-21.428,21.426-21.428 c3.642,0,6.604-2.962,6.604-6.604S201.415,41.118,197.773,41.118L197.773,41.118z"},2000,mina.bounce);


        });
        // Animamos los demás elementos del grupo de la bola amarilla
        groupBolaAmarrilla.select("path[id='rellenoBrilloBolaAmarilla']").animate({d:"M154.708,225.283c-2.757,0-5-2.242-5-4.999c0-26.838,21.833-48.672,48.671-48.672c2.757,0,5,2.243,5,5 s-2.243,5-5,5c-21.323,0-38.671,17.349-38.671,38.672C159.708,223.041,157.465,225.283,154.708,225.283z"},2000,mina.bounce);
        groupBolaAmarrilla.select("path[id='bordeBrilloBolaAmarilla']").animate({d:"M198.379,174.112c1.381,0,2.5,1.119,2.5,2.5s-1.119,2.5-2.5,2.5c-22.701,0-41.171,18.469-41.171,41.172 c0,1.38-1.119,2.499-2.5,2.499s-2.5-1.119-2.5-2.499C152.208,194.825,172.92,174.112,198.379,174.112 M198.379,169.112 c-28.216,0-51.171,22.956-51.171,51.172c0,4.135,3.364,7.499,7.5,7.499s7.5-3.364,7.5-7.499 c0-19.945,16.226-36.172,36.171-36.172c4.136,0,7.5-3.364,7.5-7.5S202.515,169.112,198.379,169.112L198.379,169.112z"},2000,mina.bounce);

    });
}
