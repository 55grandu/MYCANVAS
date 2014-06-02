var animation = {};

window.onload = function(){
    var s = Snap("#petercobo_03");
    Snap.load("img/PETERCOBO_03_1.svg", function (f) {
        var ojo = f.select("path[id='ojo']"),
		    iris = f.select("circle[id='iris']"),
		    pupila = f.select("circle[id='pupila']"),
		    interIrisPupila = f.select("circle[id='interIrisPupila']"),
		    circuloRojo = f.select("circle[id='circuloRojo']"),
		    circuloVerde = f.select("circle[id='circuloVerde']");
        
        // Inicializamos el ojo a la linea
        ojo.attr({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"});
        
        animation.play = function() {        
            // Inicializamos el ojo a la linea
            ojo.attr({d:"M 316.675,186 Q 271.304,186 160,186 Q 48.697,186 3.326,186 Q 48.697,186 160,186 Q 271.304,186 316.675,186"});
            
            this.timestapInit = new Date().getTime();
		    this.timeConsumed = 0;

        	this.animacionOjo(800);
        }
        
        animation.animacionOjo = function(ms){
	    	ojo.animate({d:"M 316.675,186 Q 271.304,106.5 160,106.5 Q 48.697,106.5 3.326,186 Q 48.697,265.5 160,265.5 Q 271.304,265.5 316.675,186"},ms);
	    }
        
/*	    var romboAmarillo1 = f.select("rect[id='romboAmarillo1']"),
		    romboAmarillo2 = f.select("rect[id='romboAmarillo2']"),
		    romboRojo1 = f.select("rect[id='romboRojo1']"),
		    romboRojo2 = f.select("rect[id='romboRojo2']"),
		    lineaAzul = f.select("path[id='lineaAzul']"),
		    lineaNegra = f.select("path[id='lineaNegra']")
		    bordeNegro = s.path({id:"bordeNegro", d:"m 287.078,339 c 0,0 -7.768,-118.845 -127.078,-154.692 C 49.359,154.152 32.922,32 32.922,32", stroke:"#000000", fill:"none", strokeWidth:"65", strokeLinecap:"none", strokeLinejoin:"none", strokeMiterlimit:"10"});
	    
		lineaAzul.attr({d:"m 287.078,339 c 0,0 -7.768,-118.845 -127.078,-154.692 C 49.359,154.152 32.922,32 32.922,32", stroke:"#1CA9C9", fill:"none", strokeWidth:"55", strokeLinecap:"none", strokeLinejoin:"none", strokeMiterlimit:"10"});
		lineaNegra.attr({d:"m 287.078,307.691 c 0,0 -7.768,-88.307 -127.078,-122.154 C 49.359,154.152 32.922,63.843 32.922,63.843", display:"none"});

		lineaAzul.attr({strokeDasharray:"425.87506103515625 425.87506103515625", strokeDashoffset:"425.87506103515625"});
		bordeNegro.attr({strokeDasharray:"425.87506103515625 425.87506103515625", strokeDashoffset:"425.87506103515625"});
		lineaNegra.attr({strokeDasharray:"425.87506103515625 425.87506103515625", strokeDashoffset:"425.87506103515625"});

		var groupRomboRojo = s.group(romboRojo1,romboRojo2);
		var groupRomboAmarillo = s.group(romboAmarillo1,romboAmarillo2);

		groupRomboRojo.attr({transform:"t253,305 s0"});
		groupRomboAmarillo.attr({transform:"t0,0 s0"});

        setTimeout(animacionRomboRojo,1);

        setTimeout(animacionTranslateRomboRojo,1500);

        setTimeout(animacionTranslateRomboAmarillo,4000);

        setTimeout(animacionRomboAmarillo,6200);

        function animacionRomboRojo(){
			groupRomboRojo.animate({transform:"t253,305 s1"},1500);
        	groupRomboRojo.before(bordeNegro);
        	groupRomboRojo.before(lineaAzul);
        	groupRomboRojo.before(lineaNegra);
        }

        function animacionTranslateRomboRojo(){
        	lineaNegra.attr({display:"inline"});
			groupRomboAmarillo.attr({transform:"t0,0 s1"});
        	groupRomboAmarillo.after(groupRomboRojo);

        	groupRomboAmarillo.before(bordeNegro);
        	groupRomboAmarillo.before(lineaAzul);
        	groupRomboAmarillo.before(lineaNegra);

			//groupRomboRojo.attr({class:"animated translateRomboRojo"});

		    bordeNegro.animate({strokeDashoffset:"0"},2200);
		    lineaAzul.animate({strokeDashoffset:"0"},2200);
	    	lineaNegra.animate({strokeDashoffset:"0"},2500);

        	Snap.animate(0, "425.87506103515625", function( value ) {
		        //alert(value);
		        var movePoint = lineaAzul.getPointAtLength( value );
				var movePointPrevious = lineaAzul.getPointAtLength(value-1);

				var x1 = movePoint.y - movePointPrevious.y;
				var x2 = movePoint.x - movePointPrevious.x;
				var angle = Math.atan(x1/x2)*(180/Math.PI);
		      
		        groupRomboRojo.transform( 't' + parseInt(movePoint.x -30) + ',' + parseInt( movePoint.y -28) + 'r' + parseInt(angle));
		    
		    }, 2170);

        }

        function animacionTranslateRomboAmarillo(){
        	groupRomboAmarillo.before(groupRomboRojo);

//			groupRomboAmarillo.attr({class:"animated translateRomboAmarillo"});

		    bordeNegro.animate({strokeDashoffset:"-425.87506103515625"},2200);
		    lineaAzul.animate({strokeDashoffset:"-425.87506103515625"},2200);
	    	lineaNegra.animate({strokeDashoffset:"-425.87506103515625"},2200);

        	Snap.animate(0,"425.87506103515625", function( value ) {
		        //alert(value);
		        var movePoint = lineaAzul.getPointAtLength( value );
				var movePointPrevious = lineaAzul.getPointAtLength(value-1);

				var x1 = movePoint.y - movePointPrevious.y;
				var x2 = movePoint.x - movePointPrevious.x;
				var angle = Math.atan(x1/x2)*(180/Math.PI);
		      
		        groupRomboAmarillo.transform( 't' +  -(parseInt(287.078) - parseInt(movePoint.x)) + ',' + -(parseInt(336) - parseInt( movePoint.y)) + 'r' + parseInt(angle));
		    
		    }, 2170);
        }

        function animacionRomboAmarillo(){
        	lineaNegra.attr({display:"none"});

			groupRomboRojo.attr({transform:"t0,0 s0"});
			groupRomboAmarillo.attr({transform:"t-253,-305 "});
			groupRomboAmarillo.animate({transform:"t-253,-305 s0"},1500);
        }

		s.append(bordeNegro);
		s.append(lineaAzul);
		s.append(lineaNegra);*/
        
        s.append(ojo);
        
	    //animation.play();
	    document.getElementById('play').onclick=function(){animation.play();};
	    document.getElementById('pause').onclick=function(){animation.pause();};
	    document.getElementById('resume').onclick=function(){animation.resume();};
    });
}
