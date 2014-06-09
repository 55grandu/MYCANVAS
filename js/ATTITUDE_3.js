var animation = {};

window.onload = function(){
    var s = Snap("#attitude_3");
    Snap.load("img/ATTITUDE_3.svg", function (f) {
        // Cargamos los elementos del SVG
        var grupoPiramide = f.select("g[id='grupoPiramide']"),
        	bloqueOcultaPiramide = s.path({d:"M300,350 L0,350 L0,100 L300,100 L300,350", fill:"#FFFFFF"}),
        	grupoOjoExt = f.select("g[id='grupoOjoExt']"),
        	grupoOjoInt = f.select("g[id='grupoOjoInt']");

        bloqueOcultaPiramide.animate({transform:"t0,-250"}, 2000, function(){
        	
        });

        s.append(grupoPiramide);
        s.append(bloqueOcultaPiramide);
    });
}