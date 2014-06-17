var animation = (function () {
	var anim = {};

	var manoDerGota1 = null, manoDerGota2 = null, manoDerGota3 = null, manoDerGota4 = null, manoIzqGota1 = null, manoIzqGota2 = null, manoIzqGota3 = null, manoIzqGota4 = null,
		grupoManoDer = null, grupoManoIzq = null, grupoGotas = null,
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

            grupoManoIzq.select("path[id='RELLENO_104_']").attr({transform:"t0,-300"});
            grupoManoIzq.select("path[id='TRAZO_104_']").attr({transform:"t0,-300"});
            grupoManoIzq.select("ellipse[id='RELLENO_2_208_']").attr({transform:"t0,-300"});
            grupoManoIzq.select("ellipse[id='RELLENO_2_207_']").attr({transform:"t0,-300"});
            grupoManoIzq.select("path[id='bordeRellenoMano104']").attr({transform:"t0,-300"});

            grupoManoDer.select("path[id='RELLENO_103_']").attr({transform:"t0,-300"});
            grupoManoDer.select("path[id='TRAZO_103_']").attr({transform:"t0,-300"});
            grupoManoDer.select("ellipse[id='RELLENO_2_206_']").attr({transform:"t0,-300"});
            grupoManoDer.select("ellipse[id='RELLENO_2_205_']").attr({transform:"t0,-300"});
            grupoManoDer.select("path[id='bordeRellenoMano103']").attr({transform:"t0,-300"});

		});
	}

    // Play animation
	anim.play = function() {
        // Deshabilitamos el play y habilitamos el pause
		document.getElementById('play').disabled = true;
		document.getElementById('pause').disabled = false;
		
		this.timestapInit = new Date().getTime();
		this.timeConsumed = 0;

        animBajaManos(1000);
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
	}

    // Resume animation
	anim.resume = function () {
        // Deshabilitamos el resume y habilitamos el pause
		document.getElementById('pause').disabled = false;
		document.getElementById('resume').disabled = true;

        this.timestapInit = new Date().getTime();
	}

    function animBajaManos (ms){
        anim.element.append(grupoManoDer);
        anim.element.append(grupoManoIzq);

        grupoManoIzq.animate({transform:"t0,300"},ms);
        grupoManoDer.animate({transform:"t0,300"},ms, function(){
        	animGotas(2000);
        });
    }

    function animGotas (ms){
        grupoGotas = anim.element.group(manoDerGota1,manoDerGota2,manoDerGota3,manoDerGota4,manoIzqGota1,manoIzqGota2,manoIzqGota3,manoIzqGota4);
        //anim.element.append(grupoGotas);

        grupoGotas.animate({transform:"t0,300"},ms);
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
