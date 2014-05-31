var animation = {};

window.onload = function () {
    var s = new Snap("#petercobo_01"), romboAmarillo1, romboAmarillo2, romboRojo1, romboRojo2, lineaAzul, lineaNegra, bordeNegro, groupRomboRojo, groupRomboAmarillo, len_Dasharray=425.875;
    
    // Carga del SVG PETERCOBO
    Snap.load("img/PETERCOBO_01.svg", function (f) {
        // Inicializamos las variables de los componentes
        romboAmarillo1 = f.select("rect[id='romboAmarillo1']");
        romboAmarillo2 = f.select("rect[id='romboAmarillo2']");
        romboRojo1 = f.select("rect[id='romboRojo1']");
        romboRojo2 = f.select("rect[id='romboRojo2']");
        lineaAzul = f.select("path[id='lineaAzul']");
        bordeNegro = f.select("path[id='bordeNegro']");
        lineaNegra = f.select("path[id='lineaNegra']");
        
        // Ocultamos la linea negra
        lineaNegra.attr({display: "none"});
        
        // Creamos los grupos de los rombos rojo y amarillo
        groupRomboRojo = s.group(romboRojo1,romboRojo2);
        groupRomboAmarillo = s.group(romboAmarillo1,romboAmarillo2);

        // Inicializamos el strokeDasharray y strokeDashoffset para ocultarlo
        lineaAzul.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
        bordeNegro.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
        lineaNegra.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});

        // Ponemos los rombos en la posición inicial
        groupRomboRojo.attr({transform: "t253,305 s0"});
        groupRomboAmarillo.attr({transform: "t0,0 s0"});
        
        // Play de la animación
        animation.play = function() {
            // Inicializamos el strokeDasharray y strokeDashoffset para ocultarlo
            lineaAzul.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
            bordeNegro.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
            lineaNegra.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});

            // Ponemos los rombos en la posición inicial
            groupRomboRojo.attr({transform: "t253,305 s0"});
            groupRomboAmarillo.attr({transform: "t0,0 s0"});
            
            // Inicializamos fecha y el tiempo consumido
		    this.timestapInit = new Date().getTime();
		    this.timeConsumed = 0;

            // Animación de bounce del rombo rojo, duración 0,5 seg
            this.animacionRomboRojo(500);
            // Animación del deplazamiento del rombo rojo y aparición de la linea azul, duración 0,8 seg
            this.animacionTranslateRomboRojo(1);
            // Animación del deplazamiento del rombo amarillo y desaparición de la linea azul, duración 0,8
            this.animacionTranslateRomboAmarillo(1);
            // Animación del minimizar el rombo amarillo, duración 0,8
            this.animacionRomboAmarillo(1);
        }
        
        // Pause de la animación
        animation.pause = function() {
            animation.pause.groupRomboRojo = groupRomboRojo.stop();
            animation.pause.groupRomboAmarillo = groupRomboAmarillo.stop();
            animation.pause.bordeNegro = bordeNegro.stop();
            animation.pause.lineaAzul = lineaAzul.stop();
            animation.pause.lineaNegra = lineaNegra.stop();
            this.timestapPause = new Date().getTime();
        	var diff = this.timestapPause - this.timestapInit;
        	console.log(diff);
        	console.log(this.timeConsumed);
        	this.timeConsumed = this.timeConsumed + diff;
        	console.log(this.timeConsumed);
            if(this.timeConsumed > 500){
                animation.pause.animRomboRojo = animRomboRojo.stop();
            }
            if(this.timeConsumed > 1100){
                animation.pause.animRomboAmarillo = animRomboAmarillo.stop();
            }
        }
        
        // Continuar con la animación
        animation.resume = function() {
            //this.animacionRomboRojo(animation.timeConsumed > 2100?1: 2100 - animation.timeConsumed);
            if(animation.timeConsumed > 1 && animation.timeConsumed < 500){
                this.animacionRomboRojo(500 - animation.timeConsumed);
            }else if(animation.timeConsumed > 500 && animation.timeConsumed < 1100){
                this.animacionTranslateRomboRojo(1100 - animation.timeConsumed);
            }else if(animation.timeConsumed > 1100 && animation.timeConsumed < 1600){
                this.animacionTranslateRomboAmarillo(1600 - animation.timeConsumed);
            }else{
                this.animacionRomboAmarillo(2100 - animation.timeConsumed);
            }
        }
        
        // Función de la animación del rombo rojo
        animation.animacionRomboRojo = function (ms){
            // Ponemos el rombo rojo por delante del borde de la linea azul
            groupRomboRojo.before(bordeNegro);
            // Ponemos el rombo rojo por delante de la linea azul
            groupRomboRojo.before(lineaAzul);
            // Ponemos el rombo rojo por delante de la linea negra
            groupRomboRojo.before(lineaNegra);
            // Animación del bounce del rombo rojo, desde la posición 253,305
            groupRomboRojo.animate({transform: "t253,305 s1"}, ms, mina.bounce, function(){
                animation.animacionTranslateRomboRojo(500);
            });
        }
        
        // Animación del deplazamiento del rombo rojo y aparición de la linea azul
        animation.animacionTranslateRomboRojo = function (ms) {
            // Esperamos 0,5 seg hasta que termine la animación del bounce
            //setTimeout(function(){
            if(ms > 1){
                // Mostramos la linea negra
                lineaNegra.attr({display: "inline"});
                
                // Ponemos visible (detras del romo rojo) el rombo amarillo 
                groupRomboAmarillo.attr({transform: "t0,0 s1"});
                
                // Situamos al rombo amarillo detrás del rombo rojo
                groupRomboAmarillo.after(groupRomboRojo);
                
                // Situamos al rombo amarillo delante de los componentes de la linea azul (el borde y la linea negra)
                groupRomboAmarillo.before(bordeNegro);
                groupRomboAmarillo.before(lineaAzul);
                groupRomboAmarillo.before(lineaNegra);

                // Animamos el rombo rojo para que se mueva x el mismo camino que la linea azul
                var strokeDashoffset = 0;
                if(lineaAzul.attr('stroke-dashoffset') != len_Dasharray){
                    strokeDashoffset = lineaAzul.attr('stroke-dashoffset');
                }
                animRomboRojo = Snap.animate(strokeDashoffset, len_Dasharray, function (value) {
                    //alert(value);
                    var movePoint = lineaAzul.getPointAtLength(value),
                        movePointPrevious = lineaAzul.getPointAtLength(value - 1),
                        x1 = movePoint.y - movePointPrevious.y,
                        x2 = movePoint.x - movePointPrevious.x,
                        angle = Math.atan(x1 / x2) * (180 / Math.PI);

                    groupRomboRojo.transform('t' + parseInt(movePoint.x - 34) + ',' + parseInt(movePoint.y - 34) + 'r' + parseInt(angle));

                }, ms);
            
                // Animamos los componentes de la linea azul, para que se desplacen a su posición final
                bordeNegro.animate({strokeDashoffset: "0"}, ms);
                lineaAzul.animate({strokeDashoffset: "0"}, ms);
                lineaNegra.animate({strokeDashoffset: "0"}, ms + 100
                                  , function(){
                                      animation.animacionTranslateRomboAmarillo(500);
                                  }
                );
            }//,500);
        }
        
        animation.animacionTranslateRomboAmarillo = function(ms) {
            // Esperamos 1,3 seg hasta que terminen las animaciones anteriores
            //setTimeout(function(){
            if(ms > 1){
                // Situamos al rombo amarillo delante del rombo rojo
                groupRomboAmarillo.before(groupRomboRojo);
                
                // Animamos los componentes de la linea azul, para que se cierre sobre la posición del rombo rojo
                bordeNegro.animate({strokeDashoffset: -len_Dasharray}, ms);
                lineaAzul.animate({strokeDashoffset: -len_Dasharray}, ms);
                lineaNegra.animate({strokeDashoffset: -len_Dasharray}, ms);

                // Animamos el rombo amarillo para que se mueva x el mismo camino que la linea azul
                var strokeDashoffset = 0;
                if(lineaAzul.attr('stroke-dashoffset') != len_Dasharray){
                    strokeDashoffset = lineaAzul.attr('stroke-dashoffset');
                }
                animRomboAmarillo = Snap.animate(strokeDashoffset,len_Dasharray, function(value) {
                    //alert(value);
                    var movePoint = lineaAzul.getPointAtLength(value),
                    movePointPrevious = lineaAzul.getPointAtLength(value - 1),
                    x1 = movePoint.y - movePointPrevious.y,
                    x2 = movePoint.x - movePointPrevious.x,
                    angle = Math.atan(x1 / x2) * (180 / Math.PI);

                    groupRomboAmarillo.transform('t' +  -(parseInt(287.078) - parseInt(movePoint.x)) + ',' + -(parseInt(336) - parseInt( movePoint.y)) + 'r' + parseInt(angle));

                }, ms, function(){
                    // Ocultamos el rombo rojo
                    groupRomboRojo.attr({transform: "t0,0 s0"});
                    
                    // Inicializamos el strokeDasharray y strokeDashoffset para ocultarlo
                    lineaAzul.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
                    bordeNegro.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
                    lineaNegra.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
                    
                    animation.animacionRomboAmarillo(500);
                });
            }//,1300);
        }
        
        animation.animacionRomboAmarillo = function(ms) {
            // Esperamos 2,1 seg hasta que terminen las animaciones anteriores
            //setTimeout(function(){
            if(ms > 1){
                // Ocultamos la linea negra
                lineaNegra.attr({display: "none"});
                
                // Fijamos la posición final del rombo amarillo
                groupRomboAmarillo.attr({transform: "t-253,-305 "});
                // Ocultamos el rombo amarillo con una animación de escalado a 0
                groupRomboAmarillo.animate({transform: "t-253,-305 s0"}, ms);
            }//,2100);
       }
        
	    // Funciones de las animaciones
	    document.getElementById('play').onclick=function(){animation.play();};
	    document.getElementById('pause').onclick=function(){animation.pause();};
	    document.getElementById('resume').onclick=function(){animation.resume();};
    });
};