var peterCobo = function() {

    /**
     * This function execute the animation num with the loaded svg f in cancas svg
     * @param  {int}               num number of animation to load
     * @param  {Fragment}(SnapSVG) f   link to loaded SVG
     * @param  {element}           svg canvas
     */
    var animation = function(num, f, svg) {
        switch(num.toString()) {
            case "1":
                return new animation_1(f, svg);
                break;
            case "2":
                return new animation_2(f, svg);
                break;
            case "3":
                return new animation_3(f, svg);
                break;
            case "4":
                return new animation_4(f, svg);
                break;
            case "5":
                return new animation_5(f, svg);
                break;
        }
    }

    var animation_model = function(f, svg) {
        var animation = {};
        s = new Snap(svg);

        animation.play = function() {

        }

        animation.pause = function() {

        }

        animation.resume = function() {

        }

        return {
            play: animation.play,
            pause: animation.pause,
            resume: animation.resume
        };
    }

    var animation_1 = function(f, svg) {
        var animation = {};
        var s = new Snap(svg), romboAmarillo1, romboAmarillo2, romboRojo1, romboRojo2, lineaAzul, lineaNegra, bordeNegro, groupRomboRojo, groupRomboAmarillo, len_Dasharray=425.875;
        // Inicializamos las variables de los componentes
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

        // Ponemos los rombos en la posición inicial
        groupRomboRojo.attr({transform: "t253,305 s0"});
        groupRomboAmarillo.attr({transform: "t0,0 s0"});

        // Modificamos los componentes para que sean una sola linea
        bordeNegro = s.path({id: "bordeNegro", d: "m 287.078,339 c 0,0 -7.768,-118.845 -127.078,-154.692 C 49.359,154.152 32,33 32,33", stroke: "#000000", fill: "none", strokeWidth: "65", strokeLinecap: "none", strokeLinejoin: "none", strokeMiterlimit: "10"});
        lineaAzul.attr({d: "m 287.078,339 c 0,0 -7.768,-118.845 -127.078,-154.692 C 49.359,154.152 32,33 32,33", stroke: "#1CA9C9", fill: "none", strokeWidth: "55", strokeLinecap: "none", strokeLinejoin: "none", strokeMiterlimit: "10"});
        lineaNegra.attr({d: "m 287.078,307.691 c 0,0 -7.768,-88.307 -127.078,-122.154 C 49.359,154.152 32.922,63.843 32.922,63.843", display: "none"});

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
            animacionRomboRojo(500);
            // Animación del deplazamiento del rombo rojo y aparición de la linea azul, duración 0,8 seg
            //animacionTranslateRomboRojo(1);
            // Animación del deplazamiento del rombo amarillo y desaparición de la linea azul, duración 0,8
            //animacionTranslateRomboAmarillo(1);
            // Animación del minimizar el rombo amarillo, duración 0,8
            //animacionRomboAmarillo(1);
        }

        // Pause de la Animación
        animation.pause = function() { 
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
            animation.pause.groupRomboRojo = groupRomboRojo.stop();
            animation.pause.groupRomboAmarillo = groupRomboAmarillo.stop();
            animation.pause.bordeNegro = bordeNegro.stop();
            animation.pause.lineaAzul = lineaAzul.stop();
            animation.pause.lineaNegra = lineaNegra.stop();
        }

        // Continuar con la animación
        animation.resume = function() {
            //this.animacionRomboRojo(this.timeConsumed > 2100?1: 2100 - this.timeConsumed);
            if(this.timeConsumed > 1 && this.timeConsumed < 500){
                animacionRomboRojo(500 - this.timeConsumed);
            }else if(this.timeConsumed > 500 && this.timeConsumed < 1000){
                animacionTranslateRomboRojo(1000 - this.timeConsumed);
            }else if(this.timeConsumed > 1000 && this.timeConsumed < 1600){
                animacionTranslateRomboAmarillo(1600 - this.timeConsumed);
            }else{
                animacionRomboAmarillo(2100 - this.timeConsumed);
            }
            this.timestapInit = new Date().getTime();
        }

        // Función de la animación del rombo rojo
        function animacionRomboRojo (ms){
            // Ponemos el rombo rojo por delante del borde de la linea azul
            groupRomboRojo.before(bordeNegro);
            // Ponemos el rombo rojo por delante de la linea azul
            groupRomboRojo.before(lineaAzul);
            // Ponemos el rombo rojo por delante de la linea negra
            groupRomboRojo.before(lineaNegra);
            // Animación del bounce del rombo rojo, desde la posición 253,305
            groupRomboRojo.animate({transform: "t253,305 s1"}, ms, mina.bounce, function(){
                animacionTranslateRomboRojo(500);
            });
        }

        // Animación del deplazamiento del rombo rojo y aparición de la linea azul
        function animacionTranslateRomboRojo (ms) {
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
                var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
                if(is_chrome){
                    var lenStrokeDashoffset_LineaAzul = lineaAzul.attr('stroke-dashoffset').length;
                    if(lineaAzul.attr('stroke-dashoffset').substring(0, (lenStrokeDashoffset_LineaAzul - 2)) != len_Dasharray){
                        strokeDashoffset = len_Dasharray - lineaAzul.attr('stroke-dashoffset').substring(0, (lenStrokeDashoffset_LineaAzul - 2));
                    }
                }else{
                    if(lineaAzul.attr('stroke-dashoffset') != len_Dasharray){
                        strokeDashoffset = len_Dasharray - lineaAzul.attr('stroke-dashoffset');
                    }
                }
                animRomboRojo = Snap.animate(strokeDashoffset, len_Dasharray, function (value) {
                    //alert(value);
                    var movePoint = lineaAzul.getPointAtLength(value),
                        movePointPrevious = lineaAzul.getPointAtLength(value - 1),
                        x1 = movePoint.y - movePointPrevious.y,
                        x2 = movePoint.x - movePointPrevious.x,
                        angle = Math.atan(x1 / x2) * (180 / Math.PI);

                    groupRomboRojo.transform('t' + parseInt(movePoint.x - 33) + ',' + parseInt(movePoint.y - 34) + 'r' + parseInt(angle));

                }, ms);
            
                // Animamos los componentes de la linea azul, para que se desplacen a su posición final
                bordeNegro.animate({strokeDashoffset: "0"}, ms);
                lineaAzul.animate({strokeDashoffset: "0"}, ms);
                lineaNegra.animate({strokeDashoffset: "0"}, ms, function(){
                    animacionTranslateRomboAmarillo(500);
                });
            }
        }

        function animacionTranslateRomboAmarillo (ms) {
            if(ms > 1){
                // Situamos al rombo amarillo delante del rombo rojo
                groupRomboAmarillo.before(groupRomboRojo);

                // Animamos el rombo amarillo para que se mueva x el mismo camino que la linea azul
                var strokeDashoffset = 0;
                
                var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
                if(is_chrome){
                    var lenStrokeDashoffset_LineaAzul = lineaAzul.attr('stroke-dashoffset').length;
                    if(lineaAzul.attr('stroke-dashoffset').substring(0, (lenStrokeDashoffset_LineaAzul - 2)) != len_Dasharray && lineaAzul.attr('stroke-dashoffset').substring(0, (lenStrokeDashoffset_LineaAzul - 2)) < 0){
                        strokeDashoffset = -lineaAzul.attr('stroke-dashoffset').substring(0, (lenStrokeDashoffset_LineaAzul - 2));
                    }
                }else{
                    if(lineaAzul.attr('stroke-dashoffset') != len_Dasharray && lineaAzul.attr('stroke-dashoffset') < 0 ){
                        strokeDashoffset = -lineaAzul.attr('stroke-dashoffset');
                    }
                }
                animRomboAmarillo = Snap.animate(strokeDashoffset,len_Dasharray, function(value) {
                    //alert(value);
                    var movePoint = lineaAzul.getPointAtLength(value),
                        movePointPrevious = lineaAzul.getPointAtLength(value - 1),
                        x1 = movePoint.y - movePointPrevious.y,
                        x2 = movePoint.x - movePointPrevious.x,
                        angle = Math.atan(x1 / x2) * (180 / Math.PI);

                    groupRomboAmarillo.transform('t' +  -(parseInt(287.078) - parseInt(movePoint.x)) + ',' + -(parseInt(336) - parseInt( movePoint.y)) + 'r' + parseInt(angle));

                }, ms);
                // Animamos los componentes de la linea azul, para que se cierre sobre la posición del rombo rojo
                bordeNegro.animate({strokeDashoffset: -len_Dasharray}, ms);
                lineaAzul.animate({strokeDashoffset: -len_Dasharray}, ms);
                lineaNegra.animate({strokeDashoffset: -len_Dasharray}, ms, function(){
                    // Ocultamos el rombo rojo
                    groupRomboRojo.attr({transform: "t0,0 s0"});
                    
                    // Inicializamos el strokeDasharray y strokeDashoffset para ocultarlo
                    lineaAzul.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
                    bordeNegro.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
                    lineaNegra.attr({strokeDasharray: len_Dasharray + " " + len_Dasharray, strokeDashoffset: len_Dasharray});
                    
                    animacionRomboAmarillo(500);
                });
            }
        }

        function animacionRomboAmarillo (ms) {
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

        return {
            play: animation.play,
            pause: animation.pause,
            resume: animation.resume
        };
    }

    var animation_3 = function(f, svg) {
        s = new Snap(svg);

        var animation = {}, 
            ojo = null, ojo2 = null; panel = null, iris = null, pupila = null, interIrisPupila = null, circuloRojo = null, circuloVerde = null, 
            groupInteriorOjo = null, groupContornoOjo = null,
            intervalAbreIris = null, intervalAbreBolaVerde = null, intervalAbreBolaRoja = null, intervalMueveBolaVerde = null, intervalMueveBolaRoja = null, intervalCierre = null,
            lenPupila = null, lenInterIrisPupila = null,
            animBolaVerde = null, animBolaRoja = null,
            cxBolaVerde = 0, cyBolaVerde = 0, cxBolaRoja = 0, cyBolaRoja = 0;

        ojo = f.select("path[id='ojo']");
        ojo2 = f.select("path[id='ojo2']");
        //panel = f.select("path[id='panel']");
        iris = f.select("circle[id='iris']");
        pupila = f.select("path[id='pupila']");
        interIrisPupila = f.select("path[id='interIrisPupila']");
        circuloRojo = f.select("circle[id='circuloRojo']");
        circuloVerde = f.select("circle[id='circuloVerde']");

        lenPupila = pupila.getTotalLength();
        lenInterIrisPupila = interIrisPupila.getTotalLength();

        // Play animation
        animation.play = function() {
            // Inicializamos el ojo a la linea
            ojo.attr({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"});
            ojo2.attr({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"});
            //panel.attr({d:"M0,0 V0,186 Q 48.697,186 160,186 Q 271.304,186 320.675,186 V316.675,0z"});

            groupInteriorOjo = s.group(iris, interIrisPupila, pupila, circuloRojo, circuloVerde);
            groupContornoOjo = s.group(ojo, ojo2);

            iris.attr({transform:"t0,-120"});
            pupila.attr({transform:"t0,-120 s0"});
            interIrisPupila.attr({transform:"t0,-120 s0"});
            circuloRojo.attr({r:"0"});
            circuloVerde.attr({r:"0"});

            groupInteriorOjo.attr({ mask : ojo2 });

            groupInteriorOjo.before(ojo);

            this.timestapInit = new Date().getTime();
            this.timeConsumed = 0;

            animAperturaOjo(300);
        }

        animation.pause = function() {
            animation.pause.ojo = ojo.stop();
            animation.pause.ojo2 = ojo2.stop();
            //animation.pause.panel = panel.stop();
            animation.pause.iris = iris.stop();
            animation.pause.circuloRojo = circuloRojo.stop();
            animation.pause.circuloVerde = circuloVerde.stop();
            animation.pause.interIrisPupila = interIrisPupila.stop();

            this.timestapPause = new Date().getTime();
            var diff = this.timestapPause - this.timestapInit;
            console.log(diff);
            console.log(this.timeConsumed);
            this.timeConsumed = this.timeConsumed + diff;
            console.log(this.timeConsumed);

            animation.pause.animBolaVerde = animBolaVerde.stop();
            animation.pause.animBolaRoja = animBolaRoja.stop();

            clearInterval(intervalCierre);
            clearInterval(intervalAbreIris);
            clearInterval(intervalAbreBolaVerde);
            clearInterval(intervalMueveBolaVerde);
            clearInterval(intervalAbreBolaRoja);
            clearInterval(intervalMueveBolaRoja);
        }

        animation.resume = function() {
            if(this.timeConsumed > 1 && this.timeConsumed < 150){
                animAperturaOjo(300 - this.timeConsumed);
                intervalAbreIris = setInterval(function(){
                    animAperturaIris(300);
                },(150 - this.timeConsumed));
                intervalCierre = setInterval(function(){
                    animCierrePupila(300);
                },(3000 - this.timeConsumed));
            }else if(this.timeConsumed > 150 && this.timeConsumed < 300){
                animAperturaOjo(300 - this.timeConsumed);
                animAperturaIris(450 - this.timeConsumed);
                intervalCierre = setInterval(function(){
                    animCierrePupila(300);
                },(3000 - this.timeConsumed));
            }else if(this.timeConsumed > 300 && this.timeConsumed < 400){
                animAperturaIris(450 - this.timeConsumed);
                intervalAbreBolaVerde = setInterval(function(){
                    animAperturaBolaVerde(300);
                },(400 - this.timeConsumed));
                intervalCierre = setInterval(function(){
                    animCierrePupila(300);
                },(3000 - this.timeConsumed));
            }else if(this.timeConsumed > 400 && this.timeConsumed < 450){
                animAperturaIris(450 - this.timeConsumed);
                animAperturaBolaVerde(700 - this.timeConsumed);
                intervalCierre = setInterval(function(){
                    animCierrePupila(300);
                },(3000 - this.timeConsumed));
            }else if(this.timeConsumed > 450 && this.timeConsumed < 700){
                animAperturaBolaVerde(700 - this.timeConsumed);
                animAperutaPupila(750 - this.timeConsumed);
                intervalCierre = setInterval(function(){
                    animCierrePupila(300);
                },(3000 - this.timeConsumed));
            }else if(this.timeConsumed > 700 && this.timeConsumed < 750){
                animAperutaPupila(750 - this.timeConsumed);
                intervalMueveBolaVerde = setInterval(function(){
                    funcAnimBolaVerde(1500);
                },(2250 - this.timeConsumed));
                intervalCierre = setInterval(function(){
                    animCierrePupila(300);
                },(3000 - this.timeConsumed));
            }else if(this.timeConsumed > 750 && this.timeConsumed < 1050){
                intervalAbreBolaRoja = setInterval(function(){
                    animAperturaBolaRoja(300);
                },(1050 - this.timeConsumed));
                intervalMueveBolaVerde = setInterval(function(){
                    funcAnimBolaVerde(1500);
                },(2250 - this.timeConsumed));
                intervalCierre = setInterval(function(){
                    animCierrePupila(300);
                },(3000 - this.timeConsumed));
            }else if(this.timeConsumed > 1050 && this.timeConsumed < 2050){
                intervalMueveBolaRoja = setInterval(function(){
                    funcAnimBolaRoja(1000);
                },(2050 - this.timeConsumed));
                intervalMueveBolaVerde = setInterval(function(){
                    funcAnimBolaVerde(1500);
                },(2250 - this.timeConsumed));
                intervalCierre = setInterval(function(){
                    animCierrePupila(300);
                },(3000 - this.timeConsumed));
            }else if(this.timeConsumed > 2050 && this.timeConsumed < 3000){                
                intervalMueveBolaRoja = setInterval(function(){
                    funcAnimBolaRoja(950);
                },(3000 - this.timeConsumed));
                intervalMueveBolaVerde = setInterval(function(){
                    funcAnimBolaVerde(750);
                },(3000 - this.timeConsumed));
                intervalCierre = setInterval(function(){
                    animCierrePupila(300);
                },(3000 - this.timeConsumed));
            }else if(this.timeConsumed > 3000 && this.timeConsumed < 3300){
                animCierrePupila(3300 - this.timeConsumed);
            }else if(this.timeConsumed > 3300 && this.timeConsumed < 3900){
                animCierreIris(3900 - this.timeConsumed);
            }else if(this.timeConsumed > 3900 && this.timeConsumed < 4500){
                animCierreOjo(4500 - this.timeConsumed);
            }

            this.timestapInit = new Date().getTime();
        }

        function animAperturaOjo (ms){
            //ojo.before(panel);
            //ojo2.before(ojo);
            ojo.animate({d:"M 316.675,186 Q 271.304,106.5 160,106.5 Q 48.697,106.5 3.326,186 Q 48.697,265.5 160,265.5 Q 271.304,265.5 316.675,186"},ms);
            ojo2.animate({d:"M 316.675,186 Q 271.304,106.5 160,106.5 Q 48.697,106.5 3.326,186 Q 48.697,265.5 160,265.5 Q 271.304,265.5 316.675,186"},ms);
            //panel.animate({d:"M 0,0 V0,186 Q 48.697,104 160,104 Q 271.304,104 320.675,186 V316.675,0z"},ms);

            intervalAbreIris = setInterval(function(){
                animAperturaIris(300);
            },150);

            intervalCierre = setInterval(function(){
                animCierrePupila(300);
            },3000);
        }

        function animAperturaIris (ms){
            clearInterval(intervalAbreIris);
            //groupInteriorOjo.after(panel);
            //groupInteriorOjo.after(ojo2);
            //groupInteriorOjo.before(ojo);

            iris.animate({transform:"t0,0"},ms);
            //circuloVerde.animate({cx:"99.779", cy:"144.404"},ms);
            //circuloRojo.attr({cx:"118.404", cy:"186"});
            pupila.attr({transform:"t0,0 s0"});
            intervalAbreBolaVerde = setInterval(function(){
                animAperturaBolaVerde(300);
            },250);
            interIrisPupila.animate({transform:"t0,0 s1"},ms, function(){
                animAperutaPupila(300);
            });
        }

        function animAperturaBolaVerde (ms){
            clearInterval(intervalAbreBolaVerde);
            circuloVerde.animate({r:"7.931"},ms);
            funcAnimBolaVerde(1500);
            intervalMueveBolaVerde = setInterval(function(){
                funcAnimBolaVerde(1500);
            },1500);
        }

        function animAperutaPupila (ms){
            pupila.animate({transform:"t0,0 s1"},ms);
            intervalAbreBolaRoja = setInterval(function(){
                animAperturaBolaRoja(300);
            },300);
        }

        function animAperturaBolaRoja (ms){
            clearInterval(intervalAbreBolaRoja);
            circuloRojo.animate({r:"11.612"},ms);
            funcAnimBolaRoja(1000);
            intervalMueveBolaRoja = setInterval(function(){
                funcAnimBolaRoja(1000);
            },1000);
        }

        function funcAnimBolaVerde(ms){
            animBolaVerde = Snap.animate(lenInterIrisPupila, 0, function (value) {
                var movePoint = interIrisPupila.getPointAtLength(value);
                
                circuloVerde.attr({cx: parseInt(movePoint.x), cy:  parseInt(movePoint.y)});
            }, ms);
        }

        function funcAnimBolaRoja(ms){
            animBolaRoja = Snap.animate(0, lenPupila, function (value) {
                var movePoint = pupila.getPointAtLength(value);

                circuloRojo.attr({cx: parseInt(movePoint.x), cy:  parseInt(movePoint.y)});
            }, ms);
        }

        function animCierrePupila(ms){
            clearInterval(intervalCierre);
            circuloRojo.animate({r:"0"},ms, function(){
                clearInterval(intervalMueveBolaRoja);
                animBolaRoja.stop();
                pupila.animate({transform:"t0,0 s0"},ms, function(){
                    animCierreIris(300);
                });
            });
        }

        function animCierreIris(ms){
            circuloVerde.animate({r:"0"},ms, function(){
                clearInterval(intervalMueveBolaVerde);
                animBolaVerde.stop();
                interIrisPupila.animate({transform:"t0,-120 s0"},ms);
                iris.animate({transform:"t0,-120"},ms, function(){
                    animCierreOjo(300);
                });
            });
        }

        function animCierreOjo(ms){
            ojo.animate({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"},ms);
            ojo2.animate({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"},ms);
            //panel.animate({d:"M0,0 V0,186 Q 48.697,186 160,186 Q 271.304,186 320.675,186 V316.675,0z"},ms);
        }

        return {
            play: animation.play,
            pause: animation.pause,
            resume: animation.resume
        };
    }

    var animation_4 = function(f, svg) {
        var animation = {};
        s = new Snap(svg);
        rayoAmarillo = f.select("polygon[id='rayoAmarillo']");
        rayoRojo = f.select("polygon[id='rayoRojo']");
        linea = f.select("path[id='linea']");
        panelOculto = f.select("path[id='panelOculto']");
        lengthLinea = linea.getTotalLength();
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

            animacionLinea(800);
            animacionRayoAmarillo(2100);
            animacionRayoRojo(2350);
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
            animacionLinea(this.timeConsumed > 800?1: 800 - this.timeConsumed);
            animacionRayoAmarillo(this.timeConsumed > 2100?1: 2100 - this.timeConsumed);
            animacionRayoRojo(2350 - this.timeConsumed);
            if(this.timeConsumed > 2350){
                var tiempoInitCambioColores = new Date().getTime();
                intervalo = setInterval(function(){funcCambioColores(tiempoInitCambioColores)}, 200);
            }
        }

        function animacionLinea (ms){
            linea.animate({strokeDashoffset:"0"},ms);
        }

        function animacionRayoAmarillo(ms){
            rayoAmarillo.animate({transform:"t0,0"},ms, mina.bounce);
        }

        function animacionRayoRojo (ms){
            rayoRojo.animate({transform:"t0,0"},ms, mina.bounce, function(){
                linea.attr({display:"none"});
                panelOculto.attr({display:"none"});
                var tiempoInitCambioColores = new Date().getTime();
                intervalo = setInterval(function(){funcCambioColores(tiempoInitCambioColores)}, 200);
            });     
        }

        function funcCambioColores(tiempo){
            //alert(((new Date().getTime() - tiempo) + this.timeConsumed));
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

        s.append(panelOculto);
        s.append(linea);

        return {
            play: animation.play,
            pause: animation.pause,
            resume: animation.resume
        };
    }

/*
    var animation_4 = function(f, svg) {
        var animation = {};
        s = new Snap(svg);
        rayoAmarillo = f.select("polygon[id='rayoAmarillo']");
        rayoRojo = f.select("polygon[id='rayoRojo']");
        linea = f.select("path[id='linea']");
        panelOculto = f.select("path[id='panelOculto']");
        lengthLinea = linea.getTotalLength();
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

            animation.animacionLinea(800);
            animation.animacionRayoAmarillo(1000);
            animation.animacionRayoRojo(1250);
        }

        animation.pause = function() {
            animation.pause.linea = linea.stop();
            animation.pause.rayoAmarillo = rayoAmarillo.stop();
            animation.pause.rayoRojo = rayoRojo.stop();
            this.timestapPause = new Date().getTime();
            var diff = this.timestapPause - this.timestapInit;
            this.timeConsumed = this.timeConsumed + diff;
            if(this.timeConsumed > 1250){
                clearInterval(intervalo);
            }
        }

        animation.resume = function() {
            this.timestapInit = new Date().getTime();
            animation.animacionLinea(this.timeConsumed > 800?1: 800 - this.timeConsumed);
            animation.animacionRayoAmarillo(this.timeConsumed > 1000?1: 1000 - this.timeConsumed);
            animation.animacionRayoRojo(1250 - this.timeConsumed);
            if(this.timeConsumed > 1250){
                var tiempoInitCambioColores = new Date().getTime();
                this.intervalo = setInterval(function(){funcCambioColores(tiempoInitCambioColores)}, 200);
            }
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
                var tiempoInitCambioColores = new Date().getTime();
                intervalo = setInterval(function(){funcCambioColores(tiempoInitCambioColores)}, 200);
            });
        }

        function funcCambioColores(tiempo){
            //alert(((new Date().getTime() - tiempo) + this.timeConsumed));
            if((new Date().getTime() - tiempo) < 3000){
                if($("#rayoAmarillo").css('fill') == "rgb(255, 207, 72)"){
                    this.rayoAmarillo.attr({fill:"#C83759"});
                }else{
                    this.rayoAmarillo.attr({fill:"#FFCF48"});
                }
                if($("#rayoRojo").css('fill') == "rgb(200, 55, 89)"){
                    this.rayoRojo.attr({fill:"#FFCF48"});
                }else{
                    this.rayoRojo.attr({fill:"#C83759"});
                }
            }else{
                clearInterval(intervalo);
                this.rayoAmarillo.attr({display:"none"});
                this.rayoRojo.attr({display:"none"});
            }
        }

        s.append(panelOculto);
        s.append(linea);

        return {
            play: animation.play,
            pause: animation.pause,
            resume: animation.resume
        };
    }*/

    return {
        animation: animation
    };
};
