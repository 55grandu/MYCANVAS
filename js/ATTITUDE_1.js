var animation = (function () {
	var anim = {};

	var grupoManoDer = null, grupoManoIzq = null,
        loaded = false;

	// Animation public methods
    // Load animation
	anim.load = function() {
		anim.element = Snap("#attitude_1"); //Almacenara el identificador de SVG con el que se debe trabajar

		Snap.load("img/ATTITUDE_1-4.svg", function (f) {
			// Cargamos los elementos del SVG
            grupoManoDer = f.select("g[id='MANO_103_']").attr({display:"none"});
            grupoManoIzq = f.select("g[id='MANO_104_']").attr({display:"none"});

            anim.element.append(grupoManoDer);
            anim.element.append(grupoManoIzq);
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
        grupoManoDer.attr({transform:"t0,-300"});
        grupoManoIzq.attr({transform:"t0,-300"});

        grupoManoDer.animate({transform:"t0,0"},ms);
        grupoManoIzq.animate({transform:"t0,0"},ms);
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
