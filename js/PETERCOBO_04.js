window.onload = function () {
    var s = new Snap("#petercobo_04");
    Snap.load("img/PETERCOBO_04.svg", function (f) {
	    var rayoAmarillo = f.select("polygon[id='rayoAmarillo']"),
	    	rayoRojo = f.select("polygon[id='rayoRojo']"),
	    	linea = s.path({d: "M139.067,2.979 L41.308,187.683 L133.456,187.683 L27.47,368", fill: "none", stroke: "#000000", strokeWidth: "5", strokeLinecap: "round", strokeLinejoin: "round", strokeMiterlimit: "10"}),
	    	panelOculto = s.path({d: "M0,0 139.067,0 41.308,187.683 133.456,187.683 24,378 0,378 0,0", fill: "#FFFFFF", stroke: "none"});

	    var lengthLinea = linea.getTotalLength();
	    linea.attr({strokeDasharray: lengthLinea + " " + lengthLinea, strokeDashoffset: lengthLinea});

	    rayoAmarillo.attr({transform: "t-222,0"});
	    rayoRojo.attr({transform: "t-222,0"});

	    linea.before(panelOculto);
	    panelOculto.before(rayoAmarillo);
	    panelOculto.before(rayoRojo);

        setTimeout(animacionLinea, 1);

        setTimeout(animacionRayoAmarillo, 1900);

        setTimeout(animacionRayoRojo, 3250);

        function animacionLinea() {
	    	linea.animate({strokeDashoffset: "0"}, 2000);
	    }

        function animacionRayoAmarillo() {
	    	rayoAmarillo.animate({transform: "t0,0"}, 2000);
	    }

        function animacionRayoRojo() {
	    	rayoRojo.animate({transform: "t0,0"}, 1500);	    	
	    }
    });
};

