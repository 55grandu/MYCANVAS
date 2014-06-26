var animation = {};

window.onload = function(){
    var s = Snap("#petercobo_03");
    Snap.load("img/PETERCOBO_03_1.svg", function (f) {
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
	    //animation.play();
	    document.getElementById('play').onclick=function(){animation.play();};
	    document.getElementById('pause').onclick=function(){animation.pause();};
	    document.getElementById('resume').onclick=function(){animation.resume();};
    });
/*
var s = Snap("#petercobo_03"); 

var bigC = s.circle(100,100,75).attr({ stroke: 'silver', 'strokeWidth': 40, fill: 'silver' });
var bigC2 = s.circle(250,250,75).attr({ stroke: 'silver', 'strokeWidth': 40, fill: 'silver' });
var clipG = s.group(bigC,bigC2);

var r = s.rect(100,100,100,100,20,20).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'red' });
var c = s.circle(50,50,50).attr({ stroke: '#123456', 'strokeWidth': 20, fill: 'blue' });

var g = s.group(r,c); 

//g.attr({ mask: clipG });

g.animate({ transform: 'r360,150,150' }, 3000, mina.bounce );
clipG.animate({ transform: 't200,0' }, 3000, mina.bounce, function() { clipG.animate({ transform: 't0,0' }, 3000, mina.bounce)  }  );
*/}
