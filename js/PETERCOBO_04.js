var animation = {};

window.onload = function(){
    var s = Snap("#petercobo_04");

    Snap.load("img/PETERCOBO_04.svg", function (f) {
	    var rayoAmarillo = f.select("polygon[id='rayoAmarillo']"),
	    	rayoRojo = f.select("polygon[id='rayoRojo']"),
	    	linea = f.select("path[id='linea']"),
	    	panelOculto = f.select("path[id='panelOculto']"),
            lengthLinea = linea.getTotalLength();
        
        linea.attr({strokeDasharray:lengthLinea+" "+lengthLinea, strokeDashoffset:lengthLinea});
        
        animation.play = function() {        	
            linea.attr({display:"inline"});
            rayoAmarillo.attr({class:"none"});
            rayoRojo.attr({class:"none"});
            
            linea.attr({strokeDasharray:lengthLinea+" "+lengthLinea, strokeDashoffset:lengthLinea});
            panelOculto.attr({display:"inline"});
            
            rayoAmarillo.attr({transform:"t-433,0"});
            rayoRojo.attr({transform:"t-703,0"});

            linea.before(panelOculto);
            panelOculto.before(rayoAmarillo);
            panelOculto.before(rayoRojo);
            
		    this.timestapInit = new Date().getTime();
		    this.timeConsumed = 0;

        	this.animacionLinea(800);
	        this.animacionRayoAmarillo(1000);
	        this.animacionRayoRojo(1250);
        }

        animation.pause = function() {
        	animation.pause.linea = linea.stop();
        	animation.pause.rayoAmarillo = rayoAmarillo.stop();
        	animation.pause.rayoRojo = rayoRojo.stop();
        	this.timestapPause = new Date().getTime();
        	var diff = this.timestapPause - this.timestapInit;
        	console.log(diff);
        	console.log(this.timeConsumed);
        	this.timeConsumed = this.timeConsumed + diff;
        	console.log(this.timeConsumed);
        }

        animation.resume = function() {
        	this.timestapInit = new Date().getTime();
			this.animacionLinea(animation.timeConsumed > 800?1: 800 - animation.timeConsumed);
	        this.animacionRayoAmarillo(animation.timeConsumed > 1000?1: 1000 - animation.timeConsumed);
	        this.animacionRayoRojo(1250 -animation.timeConsumed);

        }

        animation.animacionLinea = function(ms){
	    	linea.animate({strokeDashoffset:"0"},ms);
	    }

        animation.animacionRayoAmarillo = function(ms){
	    	rayoAmarillo.animate({transform:"t0,0"},ms);
	    }

        animation.animacionRayoRojo = function(ms){
	    	rayoRojo.animate({transform:"t0,0"},ms, function(){
                linea.attr({display:"none"});
                panelOculto.attr({display:"none"});
                rayoAmarillo.attr({class:"animated rayoAmarillo"});
                rayoRojo.attr({class:"animated rayoRojo"});
            });	    	
	    }

	    //animation.play();
	    document.getElementById('play').onclick=function(){animation.play();};
	    document.getElementById('pause').onclick=function(){animation.pause();};
	    document.getElementById('resume').onclick=function(){animation.resume();};
        
        s.append(panelOculto);
        s.append(linea);
    } );
}
