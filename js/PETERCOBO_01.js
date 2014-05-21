window.onload = function(){
    var s = Snap("#petercobo_01");
    Snap.load("img/PETERCOBO_01.svg", function (f) {
	    var romboAmarillo1 = f.select("rect[id='romboAmarillo1']"),
		    romboAmarillo2 = f.select("rect[id='romboAmarillo2']"),
		    romboRojo1 = f.select("rect[id='romboRojo1']"),
		    romboRojo2 = f.select("rect[id='romboRojo2']"),
		    lineaAzul = f.select("path[id='lineaAzul']"),
		    lineaNegra = f.select("path[id='lineaNegra']")
		    bordeNegro = s.path({id:"bordeNegro", d:"M32.922,33.305 c0,0,7.768,118.845,127.078,154.691c110.641,31.385,127.078,121.694,127.078,152.232", stroke:"#000000", fill:"none", strokeWidth:"65", strokeLinecap:"none", strokeLinejoin:"none", strokeMiterlimit:"10"});
	    
		lineaAzul.attr({id:"lineaAzul", d:"M32.922,33.305 c0,0,7.768,118.845,127.078,154.691c110.641,31.385,127.078,121.694,127.078,152.232", stroke:"#1CA9C9", fill:"none", strokeWidth:"55", strokeLinecap:"none", strokeLinejoin:"none", strokeMiterlimit:"10"});

	    var lengthLineaAzul = lineaAzul.getTotalLength();
	    var lengthLineaNegra = lineaNegra.getTotalLength();

		lineaAzul.attr({strokeDasharray:lengthLineaAzul+" "+lengthLineaAzul, strokeDashoffset:lengthLineaAzul});
		bordeNegro.attr({strokeDasharray:"425.6034240722656 425.6034240722656", strokeDashoffset:"425.6034240722656"});
		lineaNegra.attr({strokeDasharray:lengthLineaNegra+" "+lengthLineaNegra, strokeDashoffset:lengthLineaNegra});

		var groupRomboRojo = s.group(romboRojo1,romboRojo2);
		//var groupRomboAmarillo = s.group(romboAmarillo1,romboAmarillo2);
		//groupRomboRojo.select("rect[id='romboRojo1']").attr({x:"265.485", y:"316.636"});
		//groupRomboRojo.select("rect[id='romboRojo2']").attr({x:"265.485", y:"316.636"});
		groupRomboRojo.attr({transform:"t265.485,316.636 s0"});

		s.append(groupRomboRojo);

		groupRomboRojo.animate({transform:"t265.485,316.636 s1"},1500);

	    //lineaAzul.animate({strokeDashoffset:"0"},2000);

/*		s.append(bordeNegro);
		s.append(lineaAzul);
		s.append(romboAmarillo1);
		s.append(romboAmarillo2);
		s.append(romboRojo1);
		s.append(romboRojo2);
		s.append(lineaNegra);


	    var lengthLinea = linea.getTotalLength();
	    linea.attr({strokeDasharray:lengthLinea+" "+lengthLinea, strokeDashoffset:lengthLinea});

	    rayoAmarillo.attr({transform:"t-222,0"});
	    rayoRojo.attr({transform:"t-222,0"});

	    linea.before(panelOculto);
	    panelOculto.before(rayoAmarillo);
	    panelOculto.before(rayoRojo);

        setTimeout(animacionLinea,1);

        setTimeout(animacionRayoAmarillo,1900);

        setTimeout(animacionRayoRojo,3250);

        function animacionLinea(){
	    	linea.animate({strokeDashoffset:"0"},2000);
	    }

        function animacionRayoAmarillo(){
	    	rayoAmarillo.animate({transform:"t0,0"},2000);
	    }

        function animacionRayoRojo(){
	    	rayoRojo.animate({transform:"t0,0"},1500);	    	
	    }

*/
	    //alert(lengthLinea);
    });
}

