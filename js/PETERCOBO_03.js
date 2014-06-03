var animation = {};

window.onload = function(){
    var s = Snap("#petercobo_03");
    Snap.load("img/PETERCOBO_03_1.svg", function (f) {
        var ojo = f.select("path[id='ojo']"),
            ojo2 = f.select("path[id='ojo2']"),
            panel = f.select("path[id='panel']"),
		    iris = f.select("circle[id='iris']"),
		    pupila = f.select("path[id='pupila']"),
		    interIrisPupila = f.select("path[id='interIrisPupila']"),
		    circuloRojo = f.select("circle[id='circuloRojo']"),
		    circuloVerde = f.select("circle[id='circuloVerde']");
        
        // Inicializamos el ojo a la linea
        ojo.attr({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"});
        ojo2.attr({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"});
        
        animation.play = function() {        
            // Inicializamos el ojo a la linea
            ojo.attr({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"});
            ojo2.attr({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"});
            panel.attr({d:"M0,0 V0,186 Q 48.697,186 160,186 Q 271.304,186 320.675,186 V316.675,0z"});
            iris.attr({transform:"t0,-300"});
            interIrisPupila.attr({transform:"t0,-300, s0"});
            circuloVerde.attr({r:"0"});
            
            this.timestapInit = new Date().getTime();
		    this.timeConsumed = 0;

        	this.animacionOjo(800);
        	this.animacionIris(800);
        	this.animacionInterIrisPupila(400);
        }
        
        animation.pause = function() {
        	animation.pause.ojo = ojo.stop();
        	animation.pause.ojo2 = ojo2.stop();
        	animation.pause.panel = panel.stop();
        	animation.pause.iris = iris.stop();
        	animation.pause.interIrisPupila = interIrisPupila.stop();
        	this.timestapPause = new Date().getTime();
        	var diff = this.timestapPause - this.timestapInit;
        	console.log(diff);
        	console.log(this.timeConsumed);
        	this.timeConsumed = this.timeConsumed + diff;
        	console.log(this.timeConsumed);
        }
        
        animation.animacionOjo = function(ms){
            ojo.before(panel);
            ojo2.before(ojo);
	    	ojo.animate({d:"M 316.675,186 Q 271.304,106.5 160,106.5 Q 48.697,106.5 3.326,186 Q 48.697,265.5 160,265.5 Q 271.304,265.5 316.675,186"},ms);
            ojo2.animate({d:"M 316.675,186 Q 271.304,106.5 160,106.5 Q 48.697,106.5 3.326,186 Q 48.697,265.5 160,265.5 Q 271.304,265.5 316.675,186"},ms);
            panel.animate({d:"M 0,0 V0,186 Q 48.697,104 160,104 Q 271.304,104 320.675,186 V316.675,0z"},ms);
	    }
        
        animation.animacionIris = function(ms){
            s.append(iris);
            iris.after(panel);
            iris.after(ojo2);
	    	iris.animate({transform:"t0,0"},ms);
	    }
        
        animation.animacionInterIrisPupila = function(ms){
            s.append(interIrisPupila);
            interIrisPupila.after(panel);
            interIrisPupila.after(ojo2);
            interIrisPupila.before(iris);
	    	interIrisPupila.animate({transform:"t0,-150 s0"},ms, function(){
                interIrisPupila.animate({transform:"t0,0 s1"},ms);
                
            });
	    }
        

        s.append(panel);
        s.append(ojo);
        s.append(ojo2);
        
	    //animation.play();
	    document.getElementById('play').onclick=function(){animation.play();};
	    document.getElementById('pause').onclick=function(){animation.pause();};
	    document.getElementById('resume').onclick=function(){animation.resume();};
    });
}
