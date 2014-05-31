var animation = {};

window.onload = function(){
    var s = Snap("#petercobo_04");

    Snap.load("img/PETERCOBO_04.svg", function (f) {
	    var rayoAmarillo = f.select("polygon[id='rayoAmarillo']"),
	    	rayoRojo = f.select("polygon[id='rayoRojo']"),
	    	linea = f.select("path[id='linea']"),
	    	panelOculto = f.select("path[id='panelOculto']"),
            lengthLinea = linea.getTotalLength(),
            intervalo = null;
        
        linea.attr({strokeDasharray:lengthLinea+" "+lengthLinea, strokeDashoffset:lengthLinea});
        
        animation.play = function() {
            linea.attr({display:"inline"});
            rayoAmarillo.attr({display:"inline", fill:"#FFCF48"});
            rayoRojo.attr({display:"inline", fill:"#C83759"});
            
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
	        this.animacionRayoAmarillo(2100);
	        this.animacionRayoRojo(2350);
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
            if(this.timeConsumed > 1250){
                clearInterval(intervalo);
            }
        }

        animation.resume = function() {
        	this.timestapInit = new Date().getTime();
			this.animacionLinea(animation.timeConsumed > 800?1: 800 - animation.timeConsumed);
	        this.animacionRayoAmarillo(animation.timeConsumed > 2100?1: 2100 - animation.timeConsumed);
	        this.animacionRayoRojo(2350 - animation.timeConsumed);
            if(animation.timeConsumed > 2350){
                var tiempoInitCambioColores = new Date().getTime();
                intervalo = setInterval(function(){funcCambioColores(tiempoInitCambioColores)}, 200);
            }
        }

        animation.animacionLinea = function(ms){
	    	linea.animate({strokeDashoffset:"0"},ms);
	    }

        animation.animacionRayoAmarillo = function(ms){
	    	rayoAmarillo.animate({transform:"t0,0"},ms, mina.bounce);
	    }

        animation.animacionRayoRojo = function(ms){
	    	rayoRojo.animate({transform:"t0,0"},ms, mina.bounce, function(){
                linea.attr({display:"none"});
                panelOculto.attr({display:"none"});
                var tiempoInitCambioColores = new Date().getTime();
                intervalo = setInterval(function(){funcCambioColores(tiempoInitCambioColores)}, 200);
            });	    	
	    }
        
        function funcCambioColores(tiempo){
            //alert(((new Date().getTime() - tiempo) + animation.timeConsumed));
            if((new Date().getTime() - tiempo) < 3000){
                if($("#rayoAmarillo").css('fill') == "rgb(255, 207, 72)"){
                    rayoAmarillo.attr({fill:"#C83759"});
                }else{
                    rayoAmarillo.attr({fill:"#FFCF48"});
                }
                if($("#rayoRojo").css('fill') == "rgb(200, 55, 89)"){
                    rayoRojo.attr({fill:"#FFCF48"});
                }else{
                    rayoRojo.attr({fill:"#C83759"});
                }
            }else{
                clearInterval(intervalo);
                rayoAmarillo.attr({display:"none"});
                rayoRojo.attr({display:"none"});
            }
        }

	    //animation.play();
	    document.getElementById('play').onclick=function(){animation.play();};
	    document.getElementById('pause').onclick=function(){animation.pause();};
	    document.getElementById('resume').onclick=function(){animation.resume();};
        
        s.append(panelOculto);
        s.append(linea);
    } );
}
