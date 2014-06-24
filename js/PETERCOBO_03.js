var animation = {};

window.onload = function(){
    var s = Snap("#petercobo_03");
    Snap.load("img/PETERCOBO_03_1.svg", function (f) {
        var ojo = f.select("path[id='ojo']"),
            ojo2 = f.select("path[id='ojo2']"),
            //panel = f.select("path[id='panel']"),
            iris = f.select("circle[id='iris']"),
            pupila = f.select("path[id='pupila']"),
            interIrisPupila = f.select("path[id='interIrisPupila']"),
            circuloRojo = f.select("circle[id='circuloRojo']"),
            circuloVerde = f.select("circle[id='circuloVerde']"),
            circuloIris = s.circle(160,186,61).attr({stroke:"silver","strokeWidth":61, fill:"silver"}),
            groupCirculoIris = s.group(circuloIris,circuloIris),
            groupInteriorOjo = s.group(iris,interIrisPupila, pupila, circuloRojo, circuloVerde);

        //s.append(ojo);
        //s.append(ojo2);

        groupInteriorOjo.attr({mask:groupCirculoIris});

        //groupInteriorOjo.before(ojo);
        //groupInteriorOjo.after(ojo2);
        //panel.animate({transform:"t0,0"},1);

        groupCirculoIris.animate({transform:"t0,0"},1);

        groupInteriorOjo.animate({transform:"t0,100"},2000);
        //groupCirculoIris.animate({transform:"t0,-100"},2000);

        /*
        // Inicializamos el ojo a la linea
        ojo.attr({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"});
        ojo2.attr({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"});

        groupInteriorOjo.attr({transform:"t0,-300"});
        groupInteriorOjo.select("path[id='pupila']").attr({transform:"t0,-300 s0"});
        groupInteriorOjo.select("path[id='interIrisPupila']").attr({transform:"t0,-300 s0"});
        groupInteriorOjo.select("circle[id='circuloRojo']").attr({transform:"t0,-300",r:"0"});
        groupInteriorOjo.select("circle[id='circuloVerde']").attr({transform:"t0,-300",r:"0"});

        animation.play = function() {
            // Inicializamos el ojo a la linea
            ojo.attr({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"});
            ojo2.attr({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"});
            panel.attr({d:"M0,0 V0,186 Q 48.697,186 160,186 Q 271.304,186 320.675,186 V316.675,0z"});

            var lenInterIrisPupila = groupInteriorOjo.select("path[id='interIrisPupila']").getTotalLength();
            groupInteriorOjo.select("path[id='interIrisPupila']").attr({strokeDasharray: lenInterIrisPupila + " " + lenInterIrisPupila, strokeDashoffset: "0"});

            var lenPupila = groupInteriorOjo.select("path[id='pupila']").getTotalLength();
            groupInteriorOjo.select("path[id='pupila']").attr({strokeDasharray: lenPupila + " " + lenPupila, strokeDashoffset: "0"});

            groupInteriorOjo.attr({transform:"t0,-300"});
            groupInteriorOjo.select("path[id='pupila']").attr({transform:"t0,-300 s0"});
            groupInteriorOjo.select("path[id='interIrisPupila']").attr({transform:"t0,-300 s0"});
            groupInteriorOjo.select("circle[id='circuloRojo']").attr({r:"0"});
            groupInteriorOjo.select("circle[id='circuloVerde']").attr({r:"0"});

            this.timestapInit = new Date().getTime();
            this.timeConsumed = 0;

            animacionOjo(800);
            animacionIris(800);
            animacionInterIrisPupila(400);
        }

        animation.pause = function() {
            animation.pause.ojo = ojo.stop();
            animation.pause.ojo2 = ojo2.stop();
            animation.pause.panel = panel.stop();
            animation.pause.iris = iris.stop();
            animation.pause.circuloRojo = circuloRojo.stop();
            animation.pause.circuloVerde = circuloVerde.stop();
            animation.pause.interIrisPupila = interIrisPupila.stop();
            animation.pause.groupInteriorOjo = groupInteriorOjo.stop();
            this.timestapPause = new Date().getTime();
            var diff = this.timestapPause - this.timestapInit;
            console.log(diff);
            console.log(this.timeConsumed);
            this.timeConsumed = this.timeConsumed + diff;
            console.log(this.timeConsumed);

            animation.pause.animBolaVerde = animBolaVerde.stop();
            animation.pause.animBolaRoja = animBolaRoja.stop();

            clearInterval(intervalCierre);
        }

        animation.resume = function() {
            this.timestapInit = new Date().getTime();
            animacionOjo(this.timeConsumed > 800?1: 800 - this.timeConsumed);
            animacionIris(this.timeConsumed > 800?1: 800 - this.timeConsumed);
            animacionInterIrisPupila(this.timeConsumed > 1200?1: 1200 - this.timeConsumed);
        }

        function animacionOjo (ms){
            ojo.before(panel);
            ojo2.before(ojo);
            ojo.animate({d:"M 316.675,186 Q 271.304,106.5 160,106.5 Q 48.697,106.5 3.326,186 Q 48.697,265.5 160,265.5 Q 271.304,265.5 316.675,186"},ms);
            ojo2.animate({d:"M 316.675,186 Q 271.304,106.5 160,106.5 Q 48.697,106.5 3.326,186 Q 48.697,265.5 160,265.5 Q 271.304,265.5 316.675,186"},ms);
            panel.animate({d:"M 0,0 V0,186 Q 48.697,104 160,104 Q 271.304,104 320.675,186 V316.675,0z"},ms);
        }

        function animacionIris (ms){
            groupInteriorOjo.after(panel);
            groupInteriorOjo.after(ojo2);
            groupInteriorOjo.before(ojo);
            groupInteriorOjo.animate({transform:"t0,0"},ms);
        }

        function animacionInterIrisPupila (ms){
            groupInteriorOjo.select("path[id='interIrisPupila']").animate({transform:"t0,-150 s0"},ms, function(){
                groupInteriorOjo.select("circle[id='circuloVerde']").attr({transform:"t0,0"});
                groupInteriorOjo.select("circle[id='circuloVerde']").animate({r:"7.931"},1000);

                funcAnimBolaVerde();
                groupInteriorOjo.select("path[id='interIrisPupila']").animate({transform:"t0,0 s1"},ms, function(){
                    groupInteriorOjo.select("path[id='pupila']").attr({transform:"t0,0"});
                    groupInteriorOjo.select("circle[id='circuloRojo']").attr({transform:"t0,0"});

                    groupInteriorOjo.select("path[id='pupila']").animate({transform:"t0,0 s1"},ms);

                    groupInteriorOjo.select("circle[id='circuloRojo']").animate({r:"11.612"},1000);

                    funcAnimBolaRoja();

                    intervalCierre = setInterval(function(){
                        animCierreInterIrisPupila(800);
                    },2000);
                });
            });
        }

        function funcAnimBolaVerde(){
            var lenInterIrisPupila = groupInteriorOjo.select("path[id='interIrisPupila']").getTotalLength();
            animBolaVerde = Snap.animate(lenInterIrisPupila, 0, function (value) {
                var movePoint = groupInteriorOjo.select("path[id='interIrisPupila']").getPointAtLength(value);

                groupInteriorOjo.select("circle[id='circuloVerde']").attr({cx: parseInt(movePoint.x), cy:  parseInt(movePoint.y)});
            }, 1000, function(){
                funcAnimBolaVerde();
            });
        }

        function funcAnimBolaRoja(){
            var lenPupila = groupInteriorOjo.select("path[id='pupila']").getTotalLength();
            animBolaRoja = Snap.animate(0, lenPupila, function (value) {
                var movePoint = groupInteriorOjo.select("path[id='pupila']").getPointAtLength(value);

                groupInteriorOjo.select("circle[id='circuloRojo']").attr({cx: parseInt(movePoint.x), cy:  parseInt(movePoint.y)});
            }, 1000, function(){
                funcAnimBolaRoja();
            });
        }

        function animCierreInterIrisPupila(ms){
            clearInterval(intervalCierre);
            groupInteriorOjo.select("circle[id='circuloVerde']").animate({r:"0"},1000);
            groupInteriorOjo.select("circle[id='circuloRojo']").animate({r:"0"},1000, function(){
                animBolaRoja.stop();
                animBolaVerde.stop();
                    groupInteriorOjo.select("path[id='pupila']").animate({transform:"t0,-300 s0"},ms);
                    groupInteriorOjo.select("path[id='interIrisPupila']").animate({transform:"t0,-300 s0"},ms);
                    animCierreIris(800);
                    animCierreOjo(800);
                //});
            });
        }

        function animCierreIris (ms){
            groupInteriorOjo.animate({transform:"t0,-300"},ms);
        }

        function animCierreOjo (ms){
            ojo.animate({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"},ms);
            ojo2.animate({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"},ms);
            panel.animate({d:"M0,0 V0,186 Q 48.697,186 160,186 Q 271.304,186 320.675,186 V316.675,0z"},ms);
        }
*/
      
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
