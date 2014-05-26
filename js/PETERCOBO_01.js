var animation = {};

window.onload = function () {
    var s = new Snap("#petercobo_01"), romboAmarillo1, romboAmarillo2, romboRojo1, romboRojo2, lineaAzul, lineaNegra, bordeNegro, groupRomboRojo, groupRomboAmarillo, len_Dasharray=425.87506103515625;
    
    // Carga del SVG PETERCOBO
    Snap.load("img/PETERCOBO_01.svg", function (f) {
        // Inicializamos las variables de los componentes
        romboAmarillo1 = f.select("rect[id='romboAmarillo1']");
        romboAmarillo2 = f.select("rect[id='romboAmarillo2']");
        romboRojo1 = f.select("rect[id='romboRojo1']");
        romboRojo2 = f.select("rect[id='romboRojo2']");
        lineaAzul = f.select("path[id='lineaAzul']");
        lineaNegra = f.select("path[id='lineaNegra']");

        // Modificamos los componentes para que sean una sola linea
        bordeNegro = s.path({id: "bordeNegro", d: "m 287.078,339 c 0,0 -7.768,-118.845 -127.078,-154.692 C 49.359,154.152 32,33 32,33", stroke: "#000000", fill: "none", strokeWidth: "65", strokeLinecap: "none", strokeLinejoin: "none", strokeMiterlimit: "10"});
        lineaAzul.attr({d: "m 287.078,339 c 0,0 -7.768,-118.845 -127.078,-154.692 C 49.359,154.152 32,33 32,33", stroke: "#1CA9C9", fill: "none", strokeWidth: "55", strokeLinecap: "none", strokeLinejoin: "none", strokeMiterlimit: "10"});
        lineaNegra.attr({d: "m 287.078,307.691 c 0,0 -7.768,-88.307 -127.078,-122.154 C 49.359,154.152 32.922,63.843 32.922,63.843", display: "none"});

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
            this.animacionTranslateRomboRojo(800);
            // Animación del deplazamiento del rombo amarillo y desaparición de la linea azul, duración 0,8
            this.animacionTranslateRomboAmarillo(800);
            // Animación del minimizar el rombo amarillo, duración 0,8
            this.animacionRomboAmarillo(800);
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
        }
        
        // Continuar con la animación
        animation.resume = function() {
        	this.timestapInit = new Date().getTime();               
            this.animacionRomboRojo(animation.timeConsumed > 1?1: 500 - animation.timeConsumed);
            this.animacionTranslateRomboRojo(animation.timeConsumed > 500?1: 1300 - animation.timeConsumed);
            this.animacionTranslateRomboAmarillo(animation.timeConsumed > 1300?1: 2100 - animation.timeConsumed);
            this.animacionRomboAmarillo(2100 - animation.timeConsumed);
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
            groupRomboRojo.animate({transform: "t253,305 s1"}, ms, mina.bounce);
        }
        
        // Animación del deplazamiento del rombo rojo y aparición de la linea azul
        animation.animacionTranslateRomboRojo = function (ms) {
            // Esperamos 0,5 seg hasta que termine la animación del bounce
            setTimeout(function(){
                lineaNegra.attr({display: "inline"});
                groupRomboAmarillo.attr({transform: "t0,0 s1"});
                groupRomboAmarillo.after(groupRomboRojo);

                groupRomboAmarillo.before(bordeNegro);
                groupRomboAmarillo.before(lineaAzul);
                groupRomboAmarillo.before(lineaNegra);

                //groupRomboRojo.attr({class:"animated translateRomboRojo"});

                bordeNegro.animate({strokeDashoffset: "0"}, ms);
                lineaAzul.animate({strokeDashoffset: "0"}, ms);
                lineaNegra.animate({strokeDashoffset: "0"}, ms + 100);

                Snap.animate(0, len_Dasharray, function (value) {
                    //alert(value);
                    var movePoint = lineaAzul.getPointAtLength(value),
                        movePointPrevious = lineaAzul.getPointAtLength(value - 1),
                        x1 = movePoint.y - movePointPrevious.y,
                        x2 = movePoint.x - movePointPrevious.x,
                        angle = Math.atan(x1 / x2) * (180 / Math.PI);

                    groupRomboRojo.transform('t' + parseInt(movePoint.x - 33) + ',' + parseInt(movePoint.y - 34) + 'r' + parseInt(angle));

                }, ms);
            },500);
        }
        
        animation.animacionTranslateRomboAmarillo = function(ms) {
            // Esperamos 1,3 seg hasta que terminen las animaciones anteriores
            setTimeout(function(){
                groupRomboAmarillo.before(groupRomboRojo);
                bordeNegro.animate({strokeDashoffset: -len_Dasharray}, ms);
                lineaAzul.animate({strokeDashoffset: -len_Dasharray}, ms);
                lineaNegra.animate({strokeDashoffset: -len_Dasharray}, ms);

                Snap.animate(0,len_Dasharray, function(value) {
                    //alert(value);
                    var movePoint = lineaAzul.getPointAtLength(value),
                    movePointPrevious = lineaAzul.getPointAtLength(value - 1),
                    x1 = movePoint.y - movePointPrevious.y,
                    x2 = movePoint.x - movePointPrevious.x,
                    angle = Math.atan(x1 / x2) * (180 / Math.PI);

                    groupRomboAmarillo.transform('t' +  -(parseInt(287.078) - parseInt(movePoint.x)) + ',' + -(parseInt(336) - parseInt( movePoint.y)) + 'r' + parseInt(angle));

                }, ms, function(){
                    groupRomboRojo.attr({transform: "t0,0 s0"});
                    lineaAzul.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
                    bordeNegro.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
                    lineaNegra.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});

                    groupRomboRojo.attr({transform: "t253,305 s0"});
                });
            },1300);
        }
        
        animation.animacionRomboAmarillo = function(ms) {
            // Esperamos 2,1 seg hasta que terminen las animaciones anteriores
            setTimeout(function(){
                lineaNegra.attr({display: "none"});
                groupRomboAmarillo.attr({transform: "t-253,-305 "});
                groupRomboAmarillo.animate({transform: "t-253,-305 s0"}, ms);
            },2100);
       }
        
        
 /*               
        function animacionRomboRojo() {
            groupRomboRojo.animate({transform: "t253,305 s1"}, 500, mina.bounce);
            groupRomboRojo.before(bordeNegro);
            groupRomboRojo.before(lineaAzul);
            groupRomboRojo.before(lineaNegra);
        }

        function animacionTranslateRomboRojo() {
            lineaNegra.attr({display: "inline"});
            groupRomboAmarillo.attr({transform: "t0,0 s1"});
            groupRomboAmarillo.after(groupRomboRojo);

            groupRomboAmarillo.before(bordeNegro);
            groupRomboAmarillo.before(lineaAzul);
            groupRomboAmarillo.before(lineaNegra);

            //groupRomboRojo.attr({class:"animated translateRomboRojo"});

            bordeNegro.animate({strokeDashoffset: "0"}, 800);
            lineaAzul.animate({strokeDashoffset: "0"}, 800);
            lineaNegra.animate({strokeDashoffset: "0"}, 900);

            Snap.animate(0, len_Dasharray, function (value) {
                //alert(value);
                var movePoint = lineaAzul.getPointAtLength(value),
                    movePointPrevious = lineaAzul.getPointAtLength(value - 1),
                    x1 = movePoint.y - movePointPrevious.y,
                    x2 = movePoint.x - movePointPrevious.x,
                    angle = Math.atan(x1 / x2) * (180 / Math.PI);

                groupRomboRojo.transform('t' + parseInt(movePoint.x - 33) + ',' + parseInt(movePoint.y - 34) + 'r' + parseInt(angle));

            }, 800);
        }

        function animacionTranslateRomboAmarillo() {
            groupRomboAmarillo.before(groupRomboRojo);
            bordeNegro.animate({strokeDashoffset: -len_Dasharray}, 800);
            lineaAzul.animate({strokeDashoffset: -len_Dasharray}, 800);
            lineaNegra.animate({strokeDashoffset: -len_Dasharray}, 800);

            Snap.animate(0,len_Dasharray, function(value) {
                //alert(value);
                var movePoint = lineaAzul.getPointAtLength(value),
                movePointPrevious = lineaAzul.getPointAtLength(value - 1),
                x1 = movePoint.y - movePointPrevious.y,
                x2 = movePoint.x - movePointPrevious.x,
                angle = Math.atan(x1 / x2) * (180 / Math.PI);

                groupRomboAmarillo.transform('t' +  -(parseInt(287.078) - parseInt(movePoint.x)) + ',' + -(parseInt(336) - parseInt( movePoint.y)) + 'r' + parseInt(angle));

            }, 800, function(){
                groupRomboRojo.attr({transform: "t0,0 s0"});
                lineaAzul.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
                bordeNegro.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
                lineaNegra.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});

                groupRomboRojo.attr({transform: "t253,305 s0"});
            });
        }

        function animacionRomboAmarillo() {
            lineaNegra.attr({display: "none"});
            groupRomboAmarillo.attr({transform: "t-253,-305 "});
            groupRomboAmarillo.animate({transform: "t-253,-305 s0"}, 800);
       }
        
        function startAnimation(){
            var aux = 1;
            if(timerFunction == null) {
                //for(var i = 1; i <= 5; i++){
                    timerFunction = setInterval(animacionRomboRojo, 2900);
                    setTimeout(animacionRomboRojo, aux);
                    aux = aux + 500;
                    setTimeout(animacionTranslateRomboRojo, aux);
                    aux = aux + 900;
                    setTimeout(animacionTranslateRomboAmarillo, aux);
                    aux = aux + 800;
                    setTimeout(animacionRomboAmarillo, aux);
                    aux = aux + 400;
                //}
            }
        }
        
        function stopAnimation() {
            if(timerFunction != null){
                clearInterval(timerFunction);
                timerFunction = null;
            }
        }
        
        function animacionRomboRojo() {
            groupRomboRojo.before(bordeNegro);
            groupRomboRojo.before(lineaAzul);
            groupRomboRojo.before(lineaNegra);
            
            groupRomboRojo.animate({transform: "t253,305 s1"}, 500, mina.bounce, function(){
                lineaNegra.attr({display: "inline"});
                groupRomboAmarillo.attr({transform: "t0,0 s1"});
                groupRomboAmarillo.after(groupRomboRojo);

                groupRomboAmarillo.before(bordeNegro);
                groupRomboAmarillo.before(lineaAzul);
                groupRomboAmarillo.before(lineaNegra);

                Snap.animate(0, len_Dasharray, function (value) {
                    //alert(value);
                    var movePoint = lineaAzul.getPointAtLength(value),
                        movePointPrevious = lineaAzul.getPointAtLength(value - 1),
                        x1 = movePoint.y - movePointPrevious.y,
                        x2 = movePoint.x - movePointPrevious.x,
                        angle = Math.atan(x1 / x2) * (180 / Math.PI);

                    groupRomboRojo.transform('t' + parseInt(movePoint.x - 33) + ',' + parseInt(movePoint.y - 34) + 'r' + parseInt(angle));

                }, 800);
                
                bordeNegro.animate({strokeDashoffset: "0"}, 800);
                lineaAzul.animate({strokeDashoffset: "0"}, 800);
                lineaNegra.animate({strokeDashoffset: "0"}, 900, function(){
                    groupRomboAmarillo.before(groupRomboRojo);
                        bordeNegro.animate({strokeDashoffset: -len_Dasharray}, 800);
                        lineaAzul.animate({strokeDashoffset: -len_Dasharray}, 800);
                        lineaNegra.animate({strokeDashoffset: -len_Dasharray}, 800);

                        Snap.animate(0,len_Dasharray, function(value) {
                            //alert(value);
                            var movePoint = lineaAzul.getPointAtLength(value),
                            movePointPrevious = lineaAzul.getPointAtLength(value - 1),
                            x1 = movePoint.y - movePointPrevious.y,
                            x2 = movePoint.x - movePointPrevious.x,
                            angle = Math.atan(x1 / x2) * (180 / Math.PI);

                            groupRomboAmarillo.transform('t' +  -(parseInt(287.078) - parseInt(movePoint.x)) + ',' + -(parseInt(336) - parseInt( movePoint.y)) + 'r' + parseInt(angle));

                        }, 800, function(){
                            groupRomboRojo.attr({transform: "t0,0 s0"});
                            lineaAzul.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
                            bordeNegro.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
                            lineaNegra.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});

                            groupRomboRojo.attr({transform: "t253,305 s0"});
                            
                            
                            lineaNegra.attr({display: "none"});
                            groupRomboAmarillo.attr({transform: "t-253,-305 "});
                            groupRomboAmarillo.animate({transform: "t-253,-305 s0"}, 800);
                        });
                });
            });
        }
       */
        
	    // Funciones de las animaciones
	    document.getElementById('play').onclick=function(){animation.play();};
	    //document.getElementById('pause').onclick=function(){animation.pause();};
	    //document.getElementById('resume').onclick=function(){animation.resume();};
    });
};