var animation = {};

window.onload = function(){
    var s = Snap("#attitude_3");
    Snap.load("img/ATTITUDE_3.svg", function (f) {
        // Cargamos los elementos del SVG
        var grupoPiramide = f.select("g[id='grupoPiramide']"),
        	bloqueOcultaPiramide = s.path({d:"M300,350 L0,350 L0,100 L300,100 L300,350", fill:"#FFFFFF"}),
        	bordeOjo = f.select("path[id='bordeOjo']"),
            rellonoOjo = f.select("path[id='rellonoOjo']"),
            grupoOjoInt = f.select("g[id='grupoOjoInt']"),
            grupoPestanas = f.select("g[id='grupoPestanas']");

        bordeOjo.attr({d:"M 183.369,196.739 Q 154.669,196.739 125.437,196.739 Q 154.669,196.739 183.369,196.739", fill:"none"});
        rellonoOjo.attr({d:"M 183.369,196.739 Q 154.669,196.739 125.437,196.739 Q 154.669,196.739 183.369,196.739", fill:"none"});
        grupoPestanas.attr({display:"none"});

        bloqueOcultaPiramide.animate({transform:"t0,-250"}, 2000, function(){
            s.append(rellonoOjo);
            s.append(grupoOjoInt);
            s.append(bordeOjo);

            grupoOjoInt.attr({transform:"t0,0 s0"});
            rellonoOjo.attr({fill:"#FFFFFF", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
            bordeOjo.attr({fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
            
            grupoOjoInt.animate({transform:"t0,0 s1"},500);
            rellonoOjo.animate({d:"M 183.369,196.739 Q 154.669,170.548 125.437,196.739 Q 154.669,222.93 183.369,196.739"},1000);
            bordeOjo.animate({d:"M 183.369,196.739 Q 154.669,170.548 125.437,196.739 Q 154.669,222.93 183.369,196.739"},1000, function(){
                grupoPestanas.attr({display:"inline"});
                setTimeout(function(){
                    grupoOjoInt.animate({transform:"t0,0 s0"},1200);
                    rellonoOjo.animate({d:"M 183.369,196.739 Q 154.669,196.739 125.437,196.739 Q 154.669,196.739 183.369,196.739"},1000, function(){
                        rellonoOjo.attr({fill:"none", stroke:"none"});
                    });
                    bordeOjo.animate({d:"M 183.369,196.739 Q 154.669,196.739 125.437,196.739 Q 154.669,196.739 183.369,196.739"},1000, function(){
                        bordeOjo.attr({fill:"none", stroke:"none"});
                    });
                    grupoPestanas.attr({display:"none"});
                },500);
            });
        });


        s.append(grupoPiramide);
        s.append(bloqueOcultaPiramide);
        s.append(grupoPestanas);
    });
}