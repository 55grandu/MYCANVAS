var animation = (function () {
	var anim = {};

	var manoDerGota1 = null, manoDerGota2 = null, manoDerGota3 = null, manoDerGota4 = null, manoIzqGota1 = null, manoIzqGota2 = null, manoIzqGota3 = null, manoIzqGota4 = null, bordeOjoIzq = null, bordeOjoDer = null, rellenoOjoIzq = null, rellenoOjoDer = null, parpadoInfOjoIzq = null, parpadoSupOjoIzq = null, parpadoInfOjoDer = null, parpadoSupOjoDer = null, lineaIzqOjoIzq = null, lineaDerOjoIzq = null, lineaIzqOjoDer = null, lineaDerOjoDer = null,
		grupoManoDer = null, grupoManoIzq = null, grupoGotas = null, interiorOjoIzq = null, interiorOjoDer = null,
        lenLineaIzqOjoIzq = null, lenLineaDerOjoIzq = null, lenLineaIzqOjoDer = null, lenLineaDerOjoDer = null,
        intervalCierreParpado = null,
        loaded = false;

	// Animation public methods
    // Load animation
	anim.load = function() {
		anim.element = Snap("#attitude_1"); //Almacenara el identificador de SVG con el que se debe trabajar

		Snap.load("img/ATTITUDE_1-4.svg", function (f) {
			// Cargamos los elementos del SVG
            grupoManoDer = f.select("g[id='MANO_103_']");
            grupoManoIzq = f.select("g[id='MANO_104_']");
            manoDerGota1 = f.select("path[id='manoDerGota1']").attr({transform:"t0,-70"});
            manoDerGota2 = f.select("path[id='manoDerGota2']").attr({transform:"t0,-70"});
            manoDerGota3 = f.select("path[id='manoDerGota3']").attr({transform:"t0,-70"});
            manoDerGota4 = f.select("path[id='manoDerGota4']").attr({transform:"t0,-70"});
            manoIzqGota1 = f.select("path[id='manoIzqGota1']").attr({transform:"t0,-70"});
            manoIzqGota2 = f.select("path[id='manoIzqGota2']").attr({transform:"t0,-70"});
            manoIzqGota3 = f.select("path[id='manoIzqGota3']").attr({transform:"t0,-70"});
            manoIzqGota4 = f.select("path[id='manoIzqGota4']").attr({transform:"t0,-70"});
            bordeOjoIzq = f.select("path[id='bordeOjoIzq']").attr({d:"M 153.714,179.194 Q 127.178,179.194 101,179.194 Q 127.178,179.194 153.714,179.194", fill:"#FFFFFF", stroke:"#FFFFFF", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
            bordeOjoDer = f.select("path[id='bordeOjoDer']").attr({d:"M 219.5,179.194 Q 193,179.194 167,179.194 Q 193,179.194 219.5,179.194", fill:"#FFFFFF", stroke:"#FFFFFF", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
            parpadoInfOjoDer = f.select("path[id='parpadoInfOjoDer']");
            parpadoSupOjoDer = f.select("path[id='parpadoSupOjoDer']");
            parpadoInfOjoIzq = f.select("path[id='parpadoInfOjoIzq']");
            parpadoSupOjoIzq = f.select("path[id='parpadoSupOjoIzq']");
            interiorOjoIzq = f.select("g[id='interiorOjoIzq']");
            interiorOjoDer = f.select("g[id='interiorOjoDer']");
		});
	}

    // Play animation
	anim.play = function() {
        // Deshabilitamos el play y habilitamos el pause
		document.getElementById('play').disabled = true;
		document.getElementById('pause').disabled = false;

        rellenoOjoIzq = anim.element.path({display:"none", d:"M 153.714,179.194 Q 127.178,179.194 101,179.194 Q 127.178,179.194 153.714,179.194", fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
        rellenoOjoDer = anim.element.path({display:"none", d:"M 219.5,179.194 Q 193,179.194 167,179.194 Q 193,179.194 219.5,179.194", fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});

        lineaIzqOjoIzq = anim.element.path({display:"none", d:"M127.178,179.194 h26.536,0", fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
        lineaDerOjoIzq = anim.element.path({display:"none", d:"M127.178,179.194 h-26,0", fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
        lineaIzqOjoDer = anim.element.path({display:"none", d:"M193,179.194 h26.321,0", fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
        lineaDerOjoDer = anim.element.path({display:"none", d:"M193,179.194 h-26,0", fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});

        lenLineaIzqOjoIzq = lineaIzqOjoIzq.getTotalLength();
        lenLineaDerOjoIzq = lineaDerOjoIzq.getTotalLength();
        lenLineaIzqOjoDer = lineaIzqOjoDer.getTotalLength();
        lenLineaDerOjoDer = lineaDerOjoDer.getTotalLength();

        lineaIzqOjoIzq.attr({strokeDasharray: lenLineaIzqOjoIzq + " " + lenLineaIzqOjoIzq, strokeDashoffset: lenLineaIzqOjoIzq});
        lineaDerOjoIzq.attr({strokeDasharray: lenLineaDerOjoIzq + " " + lenLineaDerOjoIzq, strokeDashoffset: lenLineaDerOjoIzq});
        lineaIzqOjoDer.attr({strokeDasharray: lenLineaIzqOjoDer + " " + lenLineaIzqOjoDer, strokeDashoffset: lenLineaIzqOjoDer});
        lineaDerOjoDer.attr({strokeDasharray: lenLineaDerOjoDer + " " + lenLineaDerOjoDer, strokeDashoffset: lenLineaDerOjoDer});

        grupoManoIzq.select("path[id='RELLENO_104_']").attr({transform:"t0,-300", d:"m 152.869,165.033 0,-164.909 c 0,-2.374 -1.924,-4.298 -4.299,-4.298 -2.373,0 -4.299,1.924 -4.299,4.298 l 0,167.909 -3.197,0 0,-192.413 c 0,-2.376 -1.924,-4.3 -4.299,-4.3 -2.373,0 -4.299,1.925 -4.299,4.3 l 0,180.609 -3.198,0 0,-188.546 c 0,-2.375 -1.923,-4.299 -4.298,-4.299 -2.375,0 -4.301,1.924 -4.301,4.299 l 0,188.546 -3.195,0 0,-183.915 c 0,-2.375 -1.926,-4.299 -4.299,-4.299 -2.376,0 -4.302,1.924 -4.302,4.299 l 0,185.222 -3.195,0 0,-170.285 c 0,-2.374 -1.925,-4.3 -4.299,-4.3 -2.376,0 -4.302,1.926 -4.302,4.3 l 0,170.283 -0.002,0 0,7.499 0,14.296 0,1.436 0.002,0 c 0,18.752 12.301,24.215 12.301,24.215 l 1.09,2.699 -6.641,32.259 42.283,0 -6.141,-31.259 1.031,-3.091 c 6.601,-4.646 11.094,-14.087 11.766,-22.604 0.061,-0.289 0.092,-0.588 0.092,-0.896 l 0,-1.297 c 0,-0.01 0.004,-0.018 0.004,-0.025 l 0,-15.731 -0.003,0 z"});
        grupoManoIzq.select("path[id='TRAZO_104_']").attr({transform:"t0,-300",d:"m 150.571,-7.579 c -1.502,0 -2.904,0.432 -4.09,1.18 l 0,-17.98 c 0,-4.248 -3.457,-7.703 -7.706,-7.703 -1.502,0 -2.902,0.433 -4.092,1.179 l 0,-1.412 c 0.002,-4.248 -3.454,-7.703 -7.702,-7.703 -3.644,0 -6.704,2.539 -7.501,5.941 -1.229,-0.828 -2.707,-1.312 -4.295,-1.312 -4.249,0 -7.705,3.456 -7.705,7.704 l 0,8.41 c -1.187,-0.746 -2.588,-1.178 -4.09,-1.178 -4.25,0 -7.705,3.455 -7.705,7.704 l 0,170.285 -0.002,7.497 0,14.296 0,1.438 c 0.002,11.117 5.834,20.89 14.596,26.442 l -7.793,36.229 0.066,0 c -0.025,0.193 -0.041,0.388 -0.041,0.584 0,5.748 10.957,10.407 24.469,10.407 13.514,0 24.468,-4.659 24.468,-10.407 0,-0.196 -0.016,-0.391 -0.041,-0.584 l 0.067,0 -7.711,-36.318 c 7.966,-5.104 13.545,-13.711 14.393,-23.675 0.078,-0.449 0.121,-0.906 0.121,-1.357 l 0,-1.191 0,-0.01 0,-0.119 0,-15.733 0,-164.909 c 0,-4.248 -3.457,-7.705 -7.706,-7.705 z m 4.304,188.344 c 0,0.008 -0.004,0.016 -0.004,0.025 l 0,1.297 c 0,0.309 -0.031,0.607 -0.092,0.896 -0.674,8.518 -5.166,15.957 -11.768,20.604 -1.934,1.362 -4.051,2.479 -6.305,3.317 l 3.438,0.033 0.42,1.975 6.151,28.959 c -4.454,-2.581 -11.632,-4.257 -19.735,-4.257 -8.098,0 -15.273,1.674 -19.728,4.252 l 6.229,-28.872 0.498,-2.307 2.779,0.026 c -2.033,-0.801 -3.948,-1.832 -5.715,-3.064 -7.224,-5.039 -11.955,-13.406 -11.955,-22.885 l -0.004,0 0,-1.436 0,-14.296 0,-7.499 0.004,0 0,-170.283 c 0,-2.374 1.926,-4.3 4.301,-4.3 2.374,0 4.299,1.926 4.299,4.3 l 0,170.285 3.195,0 0,-185.222 c 0,-2.375 1.926,-4.299 4.301,-4.299 2.375,0 4.299,1.924 4.299,4.299 l 0,183.915 3.197,0 0,-188.546 c 0,-2.375 1.925,-4.299 4.3,-4.299 2.375,0 4.298,1.924 4.298,4.299 l 0,188.546 3.197,0 0,-180.608 c 0,-2.375 1.926,-4.3 4.299,-4.3 2.375,0 4.3,1.924 4.3,4.3 l 0,192.413 3.197,0 0,-167.909 c 0,-2.374 1.926,-4.298 4.299,-4.298 2.374,0 4.3,1.924 4.3,4.298 l 0,164.909 0.004,0 0,15.732 z"});
        grupoManoIzq.select("ellipse[id='RELLENO_2_208_']").attr({transform:"t0,-300"});
        grupoManoIzq.select("ellipse[id='RELLENO_2_207_']").attr({transform:"t0,-300"});
        grupoManoIzq.select("path[id='bordeRellenoMano104']").attr({transform:"t0,-300"});

        grupoManoDer.select("path[id='RELLENO_103_']").attr({transform:"t0,-300",d:"m 163.129,165.033 0,-164.909 c 0,-2.374 1.926,-4.298 4.301,-4.298 2.373,0 4.299,1.924 4.299,4.298 l 0,167.909 3.197,0 0,-192.413 c 0,-2.376 1.924,-4.3 4.299,-4.3 2.373,0 4.299,1.925 4.299,4.3 l 0,180.609 3.197,0 0,-188.546 c 0,-2.375 1.922,-4.299 4.297,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,188.546 3.195,0 0,-183.915 c 0,-2.375 1.926,-4.299 4.299,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,185.222 3.195,0 0,-170.285 c 0,-2.374 1.926,-4.3 4.299,-4.3 2.375,0 4.301,1.926 4.301,4.3 l 0,170.283 0.004,0 0,7.499 0,14.296 0,1.436 -0.004,0 c 0,18.752 -12.299,24.215 -12.299,24.215 l -1.09,2.699 6.641,32.259 -42.281,0 6.141,-31.259 -1.031,-3.091 c -6.602,-4.646 -11.094,-14.087 -11.768,-22.604 -0.061,-0.289 -0.092,-0.588 -0.092,-0.896 l 0,-1.297 c 0,-0.01 -0.004,-0.018 -0.004,-0.025 l 0,-15.731 0.003,0 z"});
        grupoManoDer.select("path[id='TRAZO_103_']").attr({transform:"t0,-300",d:"m 161.725,0.124 0,164.909 0,15.733 0,0.119 0,0.01 0,1.191 c 0,0.451 0.043,0.908 0.121,1.357 0.848,9.964 6.428,18.571 14.393,23.675 l -7.711,36.318 0.068,0 c -0.025,0.193 -0.041,0.388 -0.041,0.584 0,5.748 10.953,10.407 24.467,10.407 13.512,0 24.467,-4.659 24.467,-10.407 0,-0.196 -0.016,-0.391 -0.041,-0.584 l 0.066,0 -7.793,-36.229 c 8.762,-5.553 14.594,-15.325 14.596,-26.442 l 0,-1.438 0,-14.296 -0.002,-7.497 0,-170.285 c 0,-4.249 -3.455,-7.704 -7.705,-7.704 -1.502,0 -2.902,0.432 -4.09,1.178 l 0,-8.41 c 0,-4.248 -3.455,-7.704 -7.705,-7.704 -1.586,0 -3.064,0.483 -4.293,1.312 -0.799,-3.402 -3.857,-5.941 -7.502,-5.941 -4.248,0 -7.703,3.455 -7.701,7.703 l 0,1.412 c -1.189,-0.746 -2.59,-1.179 -4.092,-1.179 -4.248,0 -7.705,3.455 -7.705,7.703 l 0,17.98 c -1.186,-0.748 -2.588,-1.18 -4.09,-1.18 -4.25,0.002 -7.707,3.459 -7.707,7.705 z m 3.402,164.909 0.004,0 0,-164.909 c 0,-2.374 1.926,-4.298 4.301,-4.298 2.373,0 4.299,1.924 4.299,4.298 l 0,167.909 3.197,0 0,-192.413 c 0,-2.376 1.924,-4.3 4.299,-4.3 2.373,0 4.299,1.925 4.299,4.3 l 0,180.609 3.197,0 0,-188.546 c 0,-2.375 1.922,-4.299 4.297,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,188.546 3.195,0 0,-183.915 c 0,-2.375 1.926,-4.299 4.299,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,185.222 3.195,0 0,-170.285 c 0,-2.374 1.926,-4.3 4.299,-4.3 2.375,0 4.301,1.926 4.301,4.3 l 0,170.283 0.004,0 0,7.499 0,14.296 0,1.436 -0.004,0 c 0,9.479 -4.73,17.846 -11.955,22.885 -1.766,1.232 -3.682,2.264 -5.713,3.064 l 2.779,-0.026 0.498,2.307 6.229,28.872 c -4.455,-2.578 -11.631,-4.252 -19.727,-4.252 -8.104,0 -15.281,1.676 -19.734,4.257 l 6.15,-28.959 0.42,-1.975 3.438,-0.033 c -2.254,-0.839 -4.371,-1.955 -6.305,-3.317 -6.602,-4.646 -11.094,-12.086 -11.768,-20.604 -0.061,-0.289 -0.092,-0.588 -0.092,-0.896 l 0,-1.297 c 0,-0.01 -0.004,-0.018 -0.004,-0.025 z"});
        grupoManoDer.select("ellipse[id='RELLENO_2_206_']").attr({transform:"t0,-300"});
        grupoManoDer.select("ellipse[id='RELLENO_2_205_']").attr({transform:"t0,-300"});
        grupoManoDer.select("path[id='bordeRellenoMano103']").attr({transform:"t0,-300"});

        anim.element.append(interiorOjoIzq);
        anim.element.append(interiorOjoDer);
        
        interiorOjoIzq.attr({transform:"t0,0 s0"});
        interiorOjoDer.attr({transform:"t0,0 s0"});
		this.timestapInit = new Date().getTime();
		this.timeConsumed = 0;

        animBajaManos(500);
	}

    // Pause animation
	anim.pause = function() {
        // Deshabilitamos el pause y habilitamos el resume
		document.getElementById('pause').disabled = true;
		document.getElementById('resume').disabled = false;

		this.timestapPause = new Date().getTime();
    	var diff = this.timestapPause - this.timestapInit;
    	console.log(diff);
    	console.log(this.timeConsumed);
    	this.timeConsumed = this.timeConsumed + diff;
    	console.log(this.timeConsumed);

        anim.element.grupoManoIzq = grupoManoIzq.stop();
        anim.element.grupoManoDer = grupoManoDer.stop();
        anim.element.grupoGotas = grupoGotas.stop();
        anim.element.rellenoOjoIzq = rellenoOjoIzq.stop();
        anim.element.rellenoOjoDer = rellenoOjoDer.stop();
        anim.element.bordeOjoIzq = bordeOjoIzq.stop();
        anim.element.bordeOjoDer = bordeOjoDer.stop();
        anim.element.interiorOjoIzq = interiorOjoIzq.stop();
        anim.element.interiorOjoDer = interiorOjoDer.stop();
        anim.element.lineaIzqOjoIzq = lineaIzqOjoIzq.stop();
        anim.element.lineaIzqOjoDer = lineaIzqOjoDer.stop();
        anim.element.lineaDerOjoIzq = lineaDerOjoIzq.stop();
        anim.element.lineaDerOjoDer = lineaDerOjoDer.stop();

        clearInterval(intervalCierreParpado);
	}

    // Resume animation
	anim.resume = function () {
        // Deshabilitamos el resume y habilitamos el pause
		document.getElementById('pause').disabled = false;
		document.getElementById('resume').disabled = true;

        if(anim.timeConsumed > 1 && anim.timeConsumed < 500){
            animBajaManos(500 - anim.timeConsumed);
        }else if(anim.timeConsumed > 500 && anim.timeConsumed < 1000){
            animBajaDedos(1000 - anim.timeConsumed);
        }else if(anim.timeConsumed > 1000 && anim.timeConsumed < 1250){
            animGotas(2000 - anim.timeConsumed);
            animAbreLineaOjos((1250 - anim.timeConsumed),true);
        }else if(anim.timeConsumed > 1250 && anim.timeConsumed < 1400){
            animGotas(2000 - anim.timeConsumed);
            animAbreOjos((1400 - anim.timeConsumed),true);
        }else if(anim.timeConsumed > 1400 && anim.timeConsumed < 1700){
            intervalCierreParpado = setInterval(function(){
                cierreParpados();
                animCierraOjos(150,true);
            },(1700 - anim.timeConsumed));
        }else if(anim.timeConsumed > 1700 && anim.timeConsumed < 1850){
            animGotas(2000 - anim.timeConsumed);
            animAbreOjos((1850 - anim.timeConsumed),false);
        }else if(anim.timeConsumed > 1850 && anim.timeConsumed < 2150){
            animGotas(2000 - anim.timeConsumed);
            intervalCierreParpado = setInterval(function(){
                cierreParpados();
                animCierraOjos(150,flase);
            },(2150 - anim.timeConsumed));
        }else if(anim.timeConsumed > 2150 && anim.timeConsumed < 2500){
            animCierreLineaOjos(2500 - anim.timeConsumed);
        }else if(anim.timeConsumed > 2500 && anim.timeConsumed < 3000){
            animCierreMano(3000 - anim.timeConsumed);
        }else{
            animCierreDedos(3500 - anim.timeConsumed);
        }


        this.timestapInit = new Date().getTime();
	}

    function animBajaManos (ms){
        anim.element.append(grupoManoDer);
        anim.element.append(grupoManoIzq);

        grupoManoIzq.select("path[id='RELLENO_104_']").animate({transform:"t0,0"},ms);
        grupoManoIzq.select("path[id='TRAZO_104_']").animate({transform:"t0,0"},ms);
        grupoManoIzq.select("ellipse[id='RELLENO_2_208_']").animate({transform:"t0,0"},ms);
        grupoManoIzq.select("ellipse[id='RELLENO_2_207_']").animate({transform:"t0,0"},ms);
        grupoManoIzq.select("path[id='bordeRellenoMano104']").animate({transform:"t0,0"},ms);

        grupoManoDer.select("path[id='RELLENO_103_']").animate({transform:"t0,0"},ms);
        grupoManoDer.select("path[id='TRAZO_103_']").animate({transform:"t0,0"},ms);
        grupoManoDer.select("ellipse[id='RELLENO_2_206_']").animate({transform:"t0,0"},ms);
        grupoManoDer.select("ellipse[id='RELLENO_2_205_']").animate({transform:"t0,0"},ms);
        grupoManoDer.select("path[id='bordeRellenoMano103']").animate({transform:"t0,0"},ms, function(){
            animBajaDedos(500);
        });
    }

    function animBajaDedos (ms){
        grupoManoIzq.select("path[id='RELLENO_104_']").animate({d:"M152.869,165.033v-20.909c0-2.374-1.924-4.298-4.299-4.298 c-2.373,0-4.299,1.924-4.299,4.298v23.909h-3.197V119.62c0-2.376-1.924-4.3-4.299-4.3c-2.373,0-4.299,1.925-4.299,4.3v36.609    h-3.198v-44.546c0-2.375-1.923-4.299-4.298-4.299s-4.301,1.924-4.301,4.299v44.546h-3.195v-39.915 c0-2.375-1.926-4.299-4.299-4.299c-2.376,0-4.302,1.924-4.302,4.299v41.222h-3.195v-26.285c0-2.374-1.925-4.3-4.299-4.3 c-2.376,0-4.302,1.926-4.302,4.3v26.283h-0.002v7.499v14.296v1.436h0.002c0,18.752,12.301,24.215,12.301,24.215l1.09,2.699 l-6.641,32.259h42.283l-6.141-31.259l1.031-3.091c6.601-4.646,11.094-14.087,11.766-22.604c0.061-0.289,0.092-0.588,0.092-0.896 v-1.297c0-0.01,0.004-0.018,0.004-0.025v-15.731H152.869z"},ms);
        grupoManoIzq.select("path[id='TRAZO_104_']").animate({d:"M150.571,136.421c-1.502,0-2.904,0.432-4.09,1.18v-17.98c0-4.248-3.457-7.703-7.706-7.703 c-1.502,0-2.902,0.433-4.092,1.179v-1.412c0.002-4.248-3.454-7.703-7.702-7.703c-3.644,0-6.704,2.539-7.501,5.941 c-1.229-0.828-2.707-1.312-4.295-1.312c-4.249,0-7.705,3.456-7.705,7.704v8.41c-1.187-0.746-2.588-1.178-4.09-1.178 c-4.25,0-7.705,3.455-7.705,7.704v26.285l-0.002,7.497v14.296v1.438c0.002,11.117,5.834,20.89,14.596,26.442l-7.793,36.229h0.066 c-0.025,0.193-0.041,0.388-0.041,0.584c0,5.748,10.957,10.407,24.469,10.407c13.514,0,24.468-4.659,24.468-10.407 c0-0.196-0.016-0.391-0.041-0.584h0.067l-7.711-36.318c7.966-5.104,13.545-13.711,14.393-23.675 c0.078-0.449,0.121-0.906,0.121-1.357v-1.191v-0.01v-0.119v-15.733v-20.909C158.277,139.878,154.82,136.421,150.571,136.421z M154.875,180.765c0,0.008-0.004,0.016-0.004,0.025v1.297c0,0.309-0.031,0.607-0.092,0.896 c-0.674,8.518-5.166,15.957-11.768,20.604c-1.934,1.362-4.051,2.479-6.305,3.317l3.438,0.033l0.42,1.975l6.151,28.959 c-4.454-2.581-11.632-4.257-19.735-4.257c-8.098,0-15.273,1.674-19.728,4.252l6.229-28.872l0.498-2.307l2.779,0.026 c-2.033-0.801-3.948-1.832-5.715-3.064c-7.224-5.039-11.955-13.406-11.955-22.885h-0.004v-1.436v-14.296v-7.499h0.004v-26.283 c0-2.374,1.926-4.3,4.301-4.3c2.374,0,4.299,1.926,4.299,4.3v26.285h3.195v-41.222c0-2.375,1.926-4.299,4.301-4.299 s4.299,1.924,4.299,4.299v39.915h3.197v-44.546c0-2.375,1.925-4.299,4.3-4.299s4.298,1.924,4.298,4.299v44.546h3.197V119.62 c0-2.375,1.926-4.3,4.299-4.3c2.375,0,4.3,1.924,4.3,4.3v48.413h3.197v-23.909c0-2.374,1.926-4.298,4.299-4.298 c2.374,0,4.3,1.924,4.3,4.298v20.909h0.004V180.765z"},ms);

        grupoManoDer.select("path[id='RELLENO_103_']").animate({d:"M163.129,165.033v-20.909c0-2.374,1.926-4.298,4.301-4.298 c2.373,0,4.299,1.924,4.299,4.298v23.909h3.197V119.62c0-2.376,1.924-4.3,4.299-4.3c2.373,0,4.299,1.925,4.299,4.3v36.609h3.197 v-44.546c0-2.375,1.922-4.299,4.297-4.299s4.301,1.924,4.301,4.299v44.546h3.195v-39.915c0-2.375,1.926-4.299,4.299-4.299 c2.375,0,4.301,1.924,4.301,4.299v41.222h3.195v-26.285c0-2.374,1.926-4.3,4.299-4.3c2.375,0,4.301,1.926,4.301,4.3v26.283h0.004 v7.499v14.296v1.436h-0.004c0,18.752-12.299,24.215-12.299,24.215l-1.09,2.699l6.641,32.259h-42.281l6.141-31.259l-1.031-3.091 c-6.602-4.646-11.094-14.087-11.768-22.604c-0.061-0.289-0.092-0.588-0.092-0.896v-1.297c0-0.01-0.004-0.018-0.004-0.025v-15.731 H163.129z"},ms);
        grupoManoDer.select("path[id='TRAZO_103_']").animate({d:"M161.725,144.124v20.909v15.733v0.119v0.01v1.191c0,0.451,0.043,0.908,0.121,1.357 c0.848,9.964,6.428,18.571,14.393,23.675l-7.711,36.318h0.068c-0.025,0.193-0.041,0.388-0.041,0.584 c0,5.748,10.953,10.407,24.467,10.407c13.512,0,24.467-4.659,24.467-10.407c0-0.196-0.016-0.391-0.041-0.584h0.066l-7.793-36.229 c8.762-5.553,14.594-15.325,14.596-26.442v-1.438v-14.296l-0.002-7.497v-26.285c0-4.249-3.455-7.704-7.705-7.704 c-1.502,0-2.902,0.432-4.09,1.178v-8.41c0-4.248-3.455-7.704-7.705-7.704c-1.586,0-3.064,0.483-4.293,1.312 c-0.799-3.402-3.857-5.941-7.502-5.941c-4.248,0-7.703,3.455-7.701,7.703v1.412c-1.189-0.746-2.59-1.179-4.092-1.179 c-4.248,0-7.705,3.455-7.705,7.703v17.98c-1.186-0.748-2.588-1.18-4.09-1.18C165.182,136.421,161.725,139.878,161.725,144.124z M165.127,165.033h0.004v-20.909c0-2.374,1.926-4.298,4.301-4.298c2.373,0,4.299,1.924,4.299,4.298v23.909h3.197V119.62 c0-2.376,1.924-4.3,4.299-4.3c2.373,0,4.299,1.925,4.299,4.3v36.609h3.197v-44.546c0-2.375,1.922-4.299,4.297-4.299 s4.301,1.924,4.301,4.299v44.546h3.195v-39.915c0-2.375,1.926-4.299,4.299-4.299c2.375,0,4.301,1.924,4.301,4.299v41.222h3.195 v-26.285c0-2.374,1.926-4.3,4.299-4.3c2.375,0,4.301,1.926,4.301,4.3v26.283h0.004v7.499v14.296v1.436h-0.004 c0,9.479-4.73,17.846-11.955,22.885c-1.766,1.232-3.682,2.264-5.713,3.064l2.779-0.026l0.498,2.307l6.229,28.872 c-4.455-2.578-11.631-4.252-19.727-4.252c-8.104,0-15.281,1.676-19.734,4.257l6.15-28.959l0.42-1.975l3.438-0.033 c-2.254-0.839-4.371-1.955-6.305-3.317c-6.602-4.646-11.094-12.086-11.768-20.604c-0.061-0.289-0.092-0.588-0.092-0.896v-1.297 c0-0.01-0.004-0.018-0.004-0.025V165.033z"},ms, function(){
            animGotas(1000);
            animAbreLineaOjos(250,true);
        });
    }

    function animGotas (ms){
        grupoGotas = anim.element.group(manoDerGota1,manoDerGota2,manoDerGota3,manoDerGota4,manoIzqGota1,manoIzqGota2,manoIzqGota3,manoIzqGota4);

        grupoGotas.animate({transform:"t0,180"},ms);
    }

    function animAbreLineaOjos (ms,primeraApertura){
        lineaIzqOjoIzq.before(grupoManoIzq).attr({display:"inline"});
        lineaDerOjoIzq.before(lineaIzqOjoIzq).attr({display:"inline"});
        lineaIzqOjoDer.before(grupoManoDer).attr({display:"inline"});
        lineaDerOjoDer.before(lineaIzqOjoDer).attr({display:"inline"});

        lineaIzqOjoIzq.animate({strokeDashoffset: "0"},ms);
        lineaDerOjoIzq.animate({strokeDashoffset: "0"},ms);
        lineaIzqOjoDer.animate({strokeDashoffset: "0"},ms);
        lineaDerOjoDer.animate({strokeDashoffset: "0"},ms, function(){
            animAbreOjos(150,primeraApertura);
        });
    }

    function animAbreOjos (ms,primeraApertura){
        anim.element.append(rellenoOjoIzq);
        anim.element.append(bordeOjoIzq);
        anim.element.append(rellenoOjoDer);
        anim.element.append(bordeOjoDer);

        rellenoOjoIzq.attr({display:"inline"});
        bordeOjoIzq.after(rellenoOjoIzq).attr({display:"inline"});
        rellenoOjoDer.attr({display:"inline"});
        bordeOjoDer.after(rellenoOjoDer).attr({display:"inline"});

        interiorOjoIzq.before(bordeOjoIzq).animate({transform:"t0,0 s1"},ms);
        interiorOjoDer.before(bordeOjoDer).animate({transform:"t0,0 s1"},ms);

        bordeOjoDer.animate({d:"M 219.5,179.194 Q 193,202.5 167,179.194 Q 193,156.5 219.5,179.194"},ms);
        bordeOjoIzq.animate({d:"M 153.714,179.194 Q 127.178,202.5 101,179.194 Q 127.178,156.5 153.714,179.194"},ms);
        rellenoOjoDer.animate({d:"M 219.5,179.194 Q 193,202.5 167,179.194 Q 193,156.5 219.5,179.194"},ms);
        rellenoOjoIzq.animate({d:"M 153.714,179.194 Q 127.178,202.5 101,179.194 Q 127.178,156.5 153.714,179.194"},ms, function(){
            abreParpados();
            if(primeraApertura){
                intervalCierreParpado = setInterval(function(){
                    cierreParpados();
                    animCierraOjos(150,primeraApertura);
                },300);    
            }else{
                intervalCierreParpado = setInterval(function(){
                    cierreParpados();
                    animCierraOjos(150,primeraApertura);
                },300);
            }
        });
    }

    function animCierraOjos (ms,primeraApertura){
        clearInterval(intervalCierreParpado);

        interiorOjoIzq.animate({transform:"t0,0 s0"},ms);
        interiorOjoDer.animate({transform:"t0,0 s0"},ms);

        bordeOjoDer.animate({d:"M 219.5,179.194 Q 193,179.194 167,179.194 Q 193,179.194 219.5,179.194"},ms);
        bordeOjoIzq.animate({d:"M 153.714,179.194 Q 127.178,179.194 101,179.194 Q 127.178,179.194 153.714,179.194"},ms);
        rellenoOjoDer.animate({d:"M 219.5,179.194 Q 193,179.194 167,179.194 Q 193,179.194 219.5,179.194"},ms);
        rellenoOjoIzq.animate({d:"M 153.714,179.194 Q 127.178,179.194 101,179.194 Q 127.178,179.194 153.714,179.194"},ms, function(){
            if(primeraApertura){
                animAbreOjos(150,false);
            }else{
                bordeOjoDer.attr({display:"none"});
                bordeOjoIzq.attr({display:"none"});
                rellenoOjoDer.attr({display:"none"});
                rellenoOjoIzq.attr({display:"none"});
                animCierreLineaOjos(250);
            }
        });
    }

    function abreParpados (){
        anim.element.append(parpadoInfOjoIzq);
        anim.element.append(parpadoInfOjoDer);
        anim.element.append(parpadoSupOjoIzq);
        anim.element.append(parpadoSupOjoDer);

        parpadoInfOjoIzq.attr({display:"inline"});
        parpadoInfOjoDer.attr({display:"inline"});
        parpadoSupOjoIzq.attr({display:"inline"});
        parpadoSupOjoDer.attr({display:"inline"});
    }

    function cierreParpados (){
        parpadoInfOjoIzq.attr({display:"none"});
        parpadoInfOjoDer.attr({display:"none"});
        parpadoSupOjoIzq.attr({display:"none"});
        parpadoSupOjoDer.attr({display:"none"});
    }

    function animCierreLineaOjos (ms){
        lineaIzqOjoIzq.animate({strokeDashoffset: lenLineaIzqOjoIzq},ms);
        lineaDerOjoIzq.animate({strokeDashoffset: lenLineaDerOjoIzq},ms);
        lineaIzqOjoDer.animate({strokeDashoffset: lenLineaIzqOjoDer},ms);
        lineaDerOjoDer.animate({strokeDashoffset: lenLineaDerOjoDer},ms, function(){
            lineaIzqOjoIzq.attr({display:"none"});
            lineaDerOjoIzq.attr({display:"none"});
            lineaIzqOjoDer.attr({display:"none"});
            lineaDerOjoDer.attr({display:"none"});
            animCierreMano(500);
        });
    }

    function animCierreMano (ms){
        grupoManoIzq.select("path[id='RELLENO_104_']").animate({d:"m 152.869,437.033 0,-292.909 c 0,-2.374 -1.924,-4.298 -4.299,-4.298 -2.373,0 -4.299,1.924 -4.299,4.298 l 0,295.909 -3.197,0 0,-320.413 c 0,-2.376 -1.924,-4.3 -4.299,-4.3 -2.373,0 -4.299,1.925 -4.299,4.3 l 0,308.609 -3.198,0 0,-316.546 c 0,-2.375 -1.923,-4.299 -4.298,-4.299 -2.375,0 -4.301,1.924 -4.301,4.299 l 0,316.546 -3.195,0 0,-311.915 c 0,-2.375 -1.926,-4.299 -4.299,-4.299 -2.376,0 -4.302,1.924 -4.302,4.299 l 0,313.222 -3.195,0 0,-298.285 c 0,-2.374 -1.925,-4.3 -4.299,-4.3 -2.376,0 -4.302,1.926 -4.302,4.3 l 0,298.283 -0.002,0 0,7.499 0,14.296 0,1.436 0.002,0 c 0,18.752 12.301,24.215 12.301,24.215 l 1.09,2.699 -6.641,32.259 42.283,0 -6.141,-31.259 1.031,-3.091 c 6.601,-4.646 11.094,-14.087 11.766,-22.604 0.061,-0.289 0.092,-0.588 0.092,-0.896 l 0,-1.297 c 0,-0.01 0.004,-0.018 0.004,-0.025 l 0,-15.731 -0.003,0 z"},ms);
        grupoManoIzq.select("path[id='TRAZO_104_']").animate({d:"m 150.571,136.421 c -1.502,0 -2.904,0.432 -4.09,1.18 l 0,-17.98 c 0,-4.248 -3.457,-7.703 -7.706,-7.703 -1.502,0 -2.902,0.433 -4.092,1.179 l 0,-1.412 c 0.002,-4.248 -3.454,-7.703 -7.702,-7.703 -3.644,0 -6.704,2.539 -7.501,5.941 -1.229,-0.828 -2.707,-1.312 -4.295,-1.312 -4.249,0 -7.705,3.456 -7.705,7.704 l 0,8.41 c -1.187,-0.746 -2.588,-1.178 -4.09,-1.178 -4.25,0 -7.705,3.455 -7.705,7.704 l 0,298.285 -0.002,7.497 0,14.296 0,1.438 c 0.002,11.117 5.834,20.89 14.596,26.442 l -7.793,36.229 0.066,0 c -0.025,0.193 -0.041,0.388 -0.041,0.584 0,5.748 10.957,10.407 24.469,10.407 13.514,0 24.468,-4.659 24.468,-10.407 0,-0.196 -0.016,-0.391 -0.041,-0.584 l 0.067,0 -7.711,-36.318 c 7.966,-5.104 13.545,-13.711 14.393,-23.675 0.078,-0.449 0.121,-0.906 0.121,-1.357 l 0,-1.191 0,-0.01 0,-0.119 0,-15.733 0,-292.909 c 0,-4.248 -3.457,-7.705 -7.706,-7.705 z m 4.304,316.344 c 0,0.008 -0.004,0.016 -0.004,0.025 l 0,1.297 c 0,0.309 -0.031,0.607 -0.092,0.896 -0.674,8.518 -5.166,15.957 -11.768,20.604 -1.934,1.362 -4.051,2.479 -6.305,3.317 l 3.438,0.033 0.42,1.975 6.151,28.959 c -4.454,-2.581 -11.632,-4.257 -19.735,-4.257 -8.098,0 -15.273,1.674 -19.728,4.252 l 6.229,-28.872 0.498,-2.307 2.779,0.026 c -2.033,-0.801 -3.948,-1.832 -5.715,-3.064 -7.224,-5.039 -11.955,-13.406 -11.955,-22.885 l -0.004,0 0,-1.436 0,-14.296 0,-7.499 0.004,0 0,-298.283 c 0,-2.374 1.926,-4.3 4.301,-4.3 2.374,0 4.299,1.926 4.299,4.3 l 0,298.285 3.195,0 0,-313.222 c 0,-2.375 1.926,-4.299 4.301,-4.299 2.375,0 4.299,1.924 4.299,4.299 l 0,311.915 3.197,0 0,-316.546 c 0,-2.375 1.925,-4.299 4.3,-4.299 2.375,0 4.298,1.924 4.298,4.299 l 0,316.546 3.197,0 0,-308.608 c 0,-2.375 1.926,-4.3 4.299,-4.3 2.375,0 4.3,1.924 4.3,4.3 l 0,320.413 3.197,0 0,-295.909 c 0,-2.374 1.926,-4.298 4.299,-4.298 2.374,0 4.3,1.924 4.3,4.298 l 0,292.909 0.004,0 0,15.732 z"},ms);
        grupoManoIzq.select("ellipse[id='RELLENO_2_208_']").animate({transform:"t0, 300"},ms);
        grupoManoIzq.select("ellipse[id='RELLENO_2_207_']").animate({transform:"t0, 300"},ms);
        grupoManoIzq.select("path[id='bordeRellenoMano104']").animate({transform:"t0, 300"},ms);

        grupoManoDer.select("path[id='RELLENO_103_']").animate({d:"m 163.129,437.033 0,-292.909 c 0,-2.374 1.926,-4.298 4.301,-4.298 2.373,0 4.299,1.924 4.299,4.298 l 0,295.909 3.197,0 0,-320.413 c 0,-2.376 1.924,-4.3 4.299,-4.3 2.373,0 4.299,1.925 4.299,4.3 l 0,308.609 3.197,0 0,-316.546 c 0,-2.375 1.922,-4.299 4.297,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,316.546 3.195,0 0,-311.915 c 0,-2.375 1.926,-4.299 4.299,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,313.222 3.195,0 0,-298.285 c 0,-2.374 1.926,-4.3 4.299,-4.3 2.375,0 4.301,1.926 4.301,4.3 l 0,298.283 0.004,0 0,7.499 0,14.296 0,1.436 -0.004,0 c 0,18.752 -12.299,24.215 -12.299,24.215 l -1.09,2.699 6.641,32.259 -42.281,0 6.141,-31.259 -1.031,-3.091 c -6.602,-4.646 -11.094,-14.087 -11.768,-22.604 -0.061,-0.289 -0.092,-0.588 -0.092,-0.896 l 0,-1.297 c 0,-0.01 -0.004,-0.018 -0.004,-0.025 l 0,-15.731 0.003,0 z"},ms);
        grupoManoDer.select("path[id='TRAZO_103_']").animate({d:"m 161.725,144.124 0,292.909 0,15.733 0,0.119 0,0.01 0,1.191 c 0,0.451 0.043,0.908 0.121,1.357 0.848,9.964 6.428,18.571 14.393,23.675 l -7.711,36.318 0.068,0 c -0.025,0.193 -0.041,0.388 -0.041,0.584 0,5.748 10.953,10.407 24.467,10.407 13.512,0 24.467,-4.659 24.467,-10.407 0,-0.196 -0.016,-0.391 -0.041,-0.584 l 0.066,0 -7.793,-36.229 c 8.762,-5.553 14.594,-15.325 14.596,-26.442 l 0,-1.438 0,-14.296 -0.002,-7.497 0,-298.285 c 0,-4.249 -3.455,-7.704 -7.705,-7.704 -1.502,0 -2.902,0.432 -4.09,1.178 l 0,-8.41 c 0,-4.248 -3.455,-7.704 -7.705,-7.704 -1.586,0 -3.064,0.483 -4.293,1.312 -0.799,-3.402 -3.857,-5.941 -7.502,-5.941 -4.248,0 -7.703,3.455 -7.701,7.703 l 0,1.412 c -1.189,-0.746 -2.59,-1.179 -4.092,-1.179 -4.248,0 -7.705,3.455 -7.705,7.703 l 0,17.98 c -1.186,-0.748 -2.588,-1.18 -4.09,-1.18 -4.25,0.002 -7.707,3.459 -7.707,7.705 z m 3.402,292.909 0.004,0 0,-292.909 c 0,-2.374 1.926,-4.298 4.301,-4.298 2.373,0 4.299,1.924 4.299,4.298 l 0,295.909 3.197,0 0,-320.413 c 0,-2.376 1.924,-4.3 4.299,-4.3 2.373,0 4.299,1.925 4.299,4.3 l 0,308.609 3.197,0 0,-316.546 c 0,-2.375 1.922,-4.299 4.297,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,316.546 3.195,0 0,-311.915 c 0,-2.375 1.926,-4.299 4.299,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,313.222 3.195,0 0,-298.285 c 0,-2.374 1.926,-4.3 4.299,-4.3 2.375,0 4.301,1.926 4.301,4.3 l 0,298.283 0.004,0 0,7.499 0,14.296 0,1.436 -0.004,0 c 0,9.479 -4.73,17.846 -11.955,22.885 -1.766,1.232 -3.682,2.264 -5.713,3.064 l 2.779,-0.026 0.498,2.307 6.229,28.872 c -4.455,-2.578 -11.631,-4.252 -19.727,-4.252 -8.104,0 -15.281,1.676 -19.734,4.257 l 6.15,-28.959 0.42,-1.975 3.438,-0.033 c -2.254,-0.839 -4.371,-1.955 -6.305,-3.317 -6.602,-4.646 -11.094,-12.086 -11.768,-20.604 -0.061,-0.289 -0.092,-0.588 -0.092,-0.896 l 0,-1.297 c 0,-0.01 -0.004,-0.018 -0.004,-0.025 z"},ms);
        grupoManoDer.select("ellipse[id='RELLENO_2_206_']").animate({transform:"t0, 300"},ms);
        grupoManoDer.select("ellipse[id='RELLENO_2_205_']").animate({transform:"t0, 300"},ms);
        grupoManoDer.select("path[id='bordeRellenoMano103']").animate({transform:"t0, 300"},ms, function(){
            animCierreDedos(500);
        });
    }

    function animCierreDedos (ms){
        grupoManoIzq.select("path[id='RELLENO_104_']").animate({d:"m 152.869,437.033 0,-22.909 c 0,-2.374 -1.924,-4.298 -4.299,-4.298 -2.373,0 -4.299,1.924 -4.299,4.298 l 0,25.909 -3.197,0 0,-50.413 c 0,-2.376 -1.924,-4.3 -4.299,-4.3 -2.373,0 -4.299,1.925 -4.299,4.3 l 0,38.609 -3.198,0 0,-46.546 c 0,-2.375 -1.923,-4.299 -4.298,-4.299 -2.375,0 -4.301,1.924 -4.301,4.299 l 0,46.546 -3.195,0 0,-41.915 c 0,-2.375 -1.926,-4.299 -4.299,-4.299 -2.376,0 -4.302,1.924 -4.302,4.299 l 0,43.222 -3.195,0 0,-28.285 c 0,-2.374 -1.925,-4.3 -4.299,-4.3 -2.376,0 -4.302,1.926 -4.302,4.3 l 0,28.283 -0.002,0 0,7.499 0,14.296 0,1.436 0.002,0 c 0,18.752 12.301,24.215 12.301,24.215 l 1.09,2.699 -6.641,32.259 42.283,0 -6.141,-31.259 1.031,-3.091 c 6.601,-4.646 11.094,-14.087 11.766,-22.604 0.061,-0.289 0.092,-0.588 0.092,-0.896 l 0,-1.297 c 0,-0.01 0.004,-0.018 0.004,-0.025 l 0,-15.731 -0.003,0 z"},ms);
        grupoManoIzq.select("path[id='TRAZO_104_']").animate({d:"m 150.571,406.421 c -1.502,0 -2.904,0.432 -4.09,1.18 l 0,-17.98 c 0,-4.248 -3.457,-7.703 -7.706,-7.703 -1.502,0 -2.902,0.433 -4.092,1.179 l 0,-1.412 c 0.002,-4.248 -3.454,-7.703 -7.702,-7.703 -3.644,0 -6.704,2.539 -7.501,5.941 -1.229,-0.828 -2.707,-1.312 -4.295,-1.312 -4.249,0 -7.705,3.456 -7.705,7.704 l 0,8.41 c -1.187,-0.746 -2.588,-1.178 -4.09,-1.178 -4.25,0 -7.705,3.455 -7.705,7.704 l 0,28.285 -0.002,7.497 0,14.296 0,1.438 c 0.002,11.117 5.834,20.89 14.596,26.442 l -7.793,36.229 0.066,0 c -0.025,0.193 -0.041,0.388 -0.041,0.584 0,5.748 10.957,10.407 24.469,10.407 13.514,0 24.468,-4.659 24.468,-10.407 0,-0.196 -0.016,-0.391 -0.041,-0.584 l 0.067,0 -7.711,-36.318 c 7.966,-5.104 13.545,-13.711 14.393,-23.675 0.078,-0.449 0.121,-0.906 0.121,-1.357 l 0,-1.191 0,-0.01 0,-0.119 0,-15.733 0,-22.909 c 0,-4.248 -3.457,-7.705 -7.706,-7.705 z m 4.304,46.344 c 0,0.008 -0.004,0.016 -0.004,0.025 l 0,1.297 c 0,0.309 -0.031,0.607 -0.092,0.896 -0.674,8.518 -5.166,15.957 -11.768,20.604 -1.934,1.362 -4.051,2.479 -6.305,3.317 l 3.438,0.033 0.42,1.975 6.151,28.959 c -4.454,-2.581 -11.632,-4.257 -19.735,-4.257 -8.098,0 -15.273,1.674 -19.728,4.252 l 6.229,-28.872 0.498,-2.307 2.779,0.026 c -2.033,-0.801 -3.948,-1.832 -5.715,-3.064 -7.224,-5.039 -11.955,-13.406 -11.955,-22.885 l -0.004,0 0,-1.436 0,-14.296 0,-7.499 0.004,0 0,-28.283 c 0,-2.374 1.926,-4.3 4.301,-4.3 2.374,0 4.299,1.926 4.299,4.3 l 0,28.285 3.195,0 0,-43.222 c 0,-2.375 1.926,-4.299 4.301,-4.299 2.375,0 4.299,1.924 4.299,4.299 l 0,41.915 3.197,0 0,-46.546 c 0,-2.375 1.925,-4.299 4.3,-4.299 2.375,0 4.298,1.924 4.298,4.299 l 0,46.546 3.197,0 0,-38.608 c 0,-2.375 1.926,-4.3 4.299,-4.3 2.375,0 4.3,1.924 4.3,4.3 l 0,50.413 3.197,0 0,-25.909 c 0,-2.374 1.926,-4.298 4.299,-4.298 2.374,0 4.3,1.924 4.3,4.298 l 0,22.909 0.004,0 0,15.732 z"},ms);

        grupoManoDer.select("path[id='RELLENO_103_']").animate({d:"m 163.129,437.033 0,-22.909 c 0,-2.374 1.926,-4.298 4.301,-4.298 2.373,0 4.299,1.924 4.299,4.298 l 0,25.909 3.197,0 0,-50.413 c 0,-2.376 1.924,-4.3 4.299,-4.3 2.373,0 4.299,1.925 4.299,4.3 l 0,38.609 3.197,0 0,-46.546 c 0,-2.375 1.922,-4.299 4.297,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,46.546 3.195,0 0,-41.915 c 0,-2.375 1.926,-4.299 4.299,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,43.222 3.195,0 0,-28.285 c 0,-2.374 1.926,-4.3 4.299,-4.3 2.375,0 4.301,1.926 4.301,4.3 l 0,28.283 0.004,0 0,7.499 0,14.296 0,1.436 -0.004,0 c 0,18.752 -12.299,24.215 -12.299,24.215 l -1.09,2.699 6.641,32.259 -42.281,0 6.141,-31.259 -1.031,-3.091 c -6.602,-4.646 -11.094,-14.087 -11.768,-22.604 -0.061,-0.289 -0.092,-0.588 -0.092,-0.896 l 0,-1.297 c 0,-0.01 -0.004,-0.018 -0.004,-0.025 l 0,-15.731 0.003,0 z"},ms);
        grupoManoDer.select("path[id='TRAZO_103_']").animate({d:"m 161.725,414.124 0,22.909 0,15.733 0,0.119 0,0.01 0,1.191 c 0,0.451 0.043,0.908 0.121,1.357 0.848,9.964 6.428,18.571 14.393,23.675 l -7.711,36.318 0.068,0 c -0.025,0.193 -0.041,0.388 -0.041,0.584 0,5.748 10.953,10.407 24.467,10.407 13.512,0 24.467,-4.659 24.467,-10.407 0,-0.196 -0.016,-0.391 -0.041,-0.584 l 0.066,0 -7.793,-36.229 c 8.762,-5.553 14.594,-15.325 14.596,-26.442 l 0,-1.438 0,-14.296 -0.002,-7.497 0,-28.285 c 0,-4.249 -3.455,-7.704 -7.705,-7.704 -1.502,0 -2.902,0.432 -4.09,1.178 l 0,-8.41 c 0,-4.248 -3.455,-7.704 -7.705,-7.704 -1.586,0 -3.064,0.483 -4.293,1.312 -0.799,-3.402 -3.857,-5.941 -7.502,-5.941 -4.248,0 -7.703,3.455 -7.701,7.703 l 0,1.412 c -1.189,-0.746 -2.59,-1.179 -4.092,-1.179 -4.248,0 -7.705,3.455 -7.705,7.703 l 0,17.98 c -1.186,-0.748 -2.588,-1.18 -4.09,-1.18 -4.25,0.002 -7.707,3.459 -7.707,7.705 z m 3.402,22.909 0.004,0 0,-22.909 c 0,-2.374 1.926,-4.298 4.301,-4.298 2.373,0 4.299,1.924 4.299,4.298 l 0,25.909 3.197,0 0,-50.413 c 0,-2.376 1.924,-4.3 4.299,-4.3 2.373,0 4.299,1.925 4.299,4.3 l 0,38.609 3.197,0 0,-46.546 c 0,-2.375 1.922,-4.299 4.297,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,46.546 3.195,0 0,-41.915 c 0,-2.375 1.926,-4.299 4.299,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,43.222 3.195,0 0,-28.285 c 0,-2.374 1.926,-4.3 4.299,-4.3 2.375,0 4.301,1.926 4.301,4.3 l 0,28.283 0.004,0 0,7.499 0,14.296 0,1.436 -0.004,0 c 0,9.479 -4.73,17.846 -11.955,22.885 -1.766,1.232 -3.682,2.264 -5.713,3.064 l 2.779,-0.026 0.498,2.307 6.229,28.872 c -4.455,-2.578 -11.631,-4.252 -19.727,-4.252 -8.104,0 -15.281,1.676 -19.734,4.257 l 6.15,-28.959 0.42,-1.975 3.438,-0.033 c -2.254,-0.839 -4.371,-1.955 -6.305,-3.317 -6.602,-4.646 -11.094,-12.086 -11.768,-20.604 -0.061,-0.289 -0.092,-0.588 -0.092,-0.896 l 0,-1.297 c 0,-0.01 -0.004,-0.018 -0.004,-0.025 z"},ms, function(){
            document.getElementById('play').disabled = false;
            document.getElementById('pause').disabled = true;
            document.getElementById('resume').disabled = true;
        });
    }

	return anim;

}());


window.onload = function(){
    // Habilitamos el botón del play y deshabilitamos los demás
	document.getElementById('play').disabled = false;
	document.getElementById('pause').disabled = true;
	document.getElementById('resume').disabled = true;

    // Realizamos la carga de los elementos
	animation.load();

    // Cuando se pulsa sobre el botón play, se anima la animación
	document.getElementById('play').onclick=function(){
		animation.play();
	};
    // Cuando se pulsa sobre el botón pause, se pausa la animación
	document.getElementById('pause').onclick=function(){
		animation.pause();
	};
    // Cuando se pulsa sobre el botón resume, se reanuda la animación
	document.getElementById('resume').onclick=function(){
		animation.resume();
	};
}
