var animation = (function () {
	var anim = {};

	var grupoPiramide = null, bloqueOcultaPiramide = null, bordeOjo = null, rellonoOjo = null, grupoOjoInt = null, grupoPestanas = null, grupoMano = null, 
        intervalPrimeraParte = null, intervalSegundaParte = null, intervalTerceraParte = null, intervalCierreCuartaParte = null, intervalCierreTerceraParte = null, intervalCierreSegundaParte = null, intervalCierreOjo = null, intervalCierreMano = null, 
		loaded = false;

	// Animation Login
	// Animation public methods
	anim.load = function() {
		anim.element = Snap("#attitude_3"); //Almacenara el identificador de SVG con el que se debe trabajar

		Snap.load("img/ATTITUDE_3.svg", function (f) {
			// Cargamos los elementos del SVG
			grupoPiramide = f.select("g[id='grupoPiramide']");
			bloqueOcultaPiramide = anim.element.path({d:"M300,241 L0,241 L0,100 L300,100 L300,241", fill:"#FFFFFF"});
			bordeOjo = f.select("path[id='bordeOjo']").attr({d:"M 183.369,196.739 Q 154.669,196.739 125.437,196.739 Q 154.669,196.739 183.369,196.739", fill:"none"});
			rellonoOjo = f.select("path[id='rellonoOjo']").attr({d:"M 183.369,196.739 Q 154.669,196.739 125.437,196.739 Q 154.669,196.739 183.369,196.739", fill:"none"});
			grupoOjoInt = f.select("g[id='grupoOjoInt']");
			grupoPestanas = f.select("g[id='grupoPestanas']").attr({display:"none"});
			grupoMano = f.select("g[id='grupoMano']");

			anim.element.append(grupoPiramide);
			anim.element.append(bloqueOcultaPiramide);
			anim.element.append(grupoPestanas);
		});
	}
	anim.play = function() {
		document.getElementById('play').disabled = true;
		document.getElementById('pause').disabled = false;
		
		this.timestapInit = new Date().getTime();
		this.timeConsumed = 0;
		
		animacionPiramidePrimeraParte(150);
	}

	anim.pause = function() {
		document.getElementById('pause').disabled = true;
		document.getElementById('resume').disabled = false;

		this.timestapPause = new Date().getTime();
    	var diff = this.timestapPause - this.timestapInit;
    	console.log(diff);
    	console.log(this.timeConsumed);
    	this.timeConsumed = this.timeConsumed + diff;
    	console.log(this.timeConsumed);

        anim.pause.grupoPiramide = grupoPiramide.stop();
        anim.pause.bloqueOcultaPiramide = bloqueOcultaPiramide.stop();
        anim.pause.bordeOjo = bordeOjo.stop();
        anim.pause.rellonoOjo = rellonoOjo.stop();
        anim.pause.grupoOjoInt = grupoOjoInt.stop();
        anim.pause.grupoPestanas = grupoPestanas.stop();
        anim.pause.grupoMano = grupoMano.stop();

        clearInterval(intervalPrimeraParte);
        clearInterval(intervalSegundaParte);
        clearInterval(intervalTerceraParte);

        clearInterval(intervalCierreOjo);
        clearInterval(intervalCierreMano);

        clearInterval(intervalCierreCuartaParte);
        clearInterval(intervalCierreTerceraParte);
        clearInterval(intervalCierreSegundaParte);
	}
	anim.resume = function () {
		document.getElementById('pause').disabled = false;
		document.getElementById('resume').disabled = true;

        if(anim.timeConsumed > 1 && anim.timeConsumed < 150){
            animacionPiramidePrimeraParte(150 - anim.timeConsumed);
        }else if(anim.timeConsumed > 150 && anim.timeConsumed < 450){
            intervalPrimeraParte = setInterval(function(){
                animacionPiramideSegundaParte(150);
            },(450 - anim.timeConsumed));
        }else if(anim.timeConsumed > 450 && anim.timeConsumed < 600){
            animacionPiramideSegundaParte(600 - anim.timeConsumed);
        }else if(anim.timeConsumed > 600 && anim.timeConsumed < 900){
            intervalSegundaParte = setInterval(function(){
                animacionPiramideTerceraParte(150);
            },(900 - anim.timeConsumed));
        }else if(anim.timeConsumed > 900 && anim.timeConsumed < 1050){
            animacionPiramideTerceraParte(1050 - anim.timeConsumed);
        }else if(anim.timeConsumed > 1050 && anim.timeConsumed < 1350){
            intervalTerceraParte = setInterval(function(){
                animacionPiramideCuartaParte(150);
            },(1350 - anim.timeConsumed));
        }else if(anim.timeConsumed > 1350 && anim.timeConsumed < 1500){
            animacionPiramideCuartaParte(1500 - anim.timeConsumed);
        }else if(anim.timeConsumed > 1500 && anim.timeConsumed < 1650){
            animacionAperturaOjo(1650 - anim.timeConsumed);
        }else if(anim.timeConsumed > 1500 && anim.timeConsumed < 2000){
            intervalCierreOjo = setInterval(function(){
                animacionCierreOjo(150,true);
            },(2000 - anim.timeConsumed));
        }else if(anim.timeConsumed > 2000 && anim.timeConsumed < 2150){
            animacionCierreOjo(2150 - anim.timeConsumed);
        }else if(anim.timeConsumed > 2150 && anim.timeConsumed < 2300){
            animacionAperturaOjo(2300 - anim.timeConsumed);
        }else if(anim.timeConsumed > 2300 && anim.timeConsumed < 2800){
            animacionMano(2800 - anim.timeConsumed);
        }else if(anim.timeConsumed > 2800 && anim.timeConsumed < 3300){
            intervalCierreMano = setInterval(function(){
                animacionCierreMano(500);
            },(3300 - anim.timeConsumed));
        }else if(anim.timeConsumed > 3300 && anim.timeConsumed < 3800){
            animacionCierreMano(3800 - anim.timeConsumed);
        }else if(anim.timeConsumed > 3800 && anim.timeConsumed < 3950){
            animacionCierreOjo(3950 - anim.timeConsumed);
        }else if(anim.timeConsumed > 3950 && anim.timeConsumed < 4100){
            animacionCierrePiramideCuartaParte(4100 - anim.timeConsumed);
        }else if(anim.timeConsumed > 4100 && anim.timeConsumed < 4400){
            intervalCierreCuartaParte = setInterval(function(){
                animacionCierrePiramideTerceraParte(150);
            },(4400 - anim.timeConsumed));
        }else if(anim.timeConsumed > 4400 && anim.timeConsumed < 4550){
            animacionCierrePiramideTerceraParte(4550 - anim.timeConsumed);
        }else if(anim.timeConsumed > 4550 && anim.timeConsumed < 4850){
            intervalCierreTerceraParte = setInterval(function(){
                animacionCierrePiramideSegundaParte(150);
            },(4850 - anim.timeConsumed));
        }else if(anim.timeConsumed > 4850 && anim.timeConsumed < 5000){
            animacionCierrePiramideSegundaParte(5000 - anim.timeConsumed);
        }else if(anim.timeConsumed > 5000 && anim.timeConsumed < 5300){
            intervalCierreSegundaParte = setInterval(function(){
                animacionCierrePiramidePrimeraParte(150);
            },(5300 - anim.timeConsumed));
        }else{
            animacionCierrePiramidePrimeraParte(5450 - anim.timeConsumed);
        }
        this.timestapInit = new Date().getTime();
	}

	 function animacionPiramidePrimeraParte (ms){
        if(ms>1){
    		bloqueOcultaPiramide.animate({transform:"t0,-31"}, ms, function(){
                intervalPrimeraParte = setInterval(function(){
        			animacionPiramideSegundaParte(150);
                },300);
    		});
        }
	}

    function animacionPiramideSegundaParte (ms){
        clearInterval(intervalPrimeraParte);
        if(ms>1){
            bloqueOcultaPiramide.animate({transform:"t0,-59"}, ms, function(){
                intervalSegundaParte = setInterval(function(){
                    animacionPiramideTerceraParte(150);
                },300);
            });
        }
    }

    function animacionPiramideTerceraParte (ms){
        clearInterval(intervalSegundaParte);
        if(ms>1){
            bloqueOcultaPiramide.animate({transform:"t0,-87"}, ms, function(){
                intervalTerceraParte = setInterval(function(){
                    animacionPiramideCuartaParte(150);
                },300);
            });
        }
    }

    function animacionPiramideCuartaParte (ms){
        clearInterval(intervalTerceraParte);
        if(ms>1){
            bloqueOcultaPiramide.animate({transform:"t0,-115"}, ms, function(){
                animacionAperturaOjo(150,true);
            });
        }
    }

	function animacionAperturaOjo (ms,primeraApertura){		
        if(ms>1){
            anim.element.append(rellonoOjo);
    		anim.element.append(grupoOjoInt);
    		anim.element.append(bordeOjo);

    		grupoOjoInt.attr({transform:"t0,0 s0"});
    		rellonoOjo.attr({fill:"#FFFFFF", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
    		bordeOjo.attr({fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
    		
    		grupoOjoInt.animate({transform:"t0,0 s1"},(ms));
    		rellonoOjo.animate({d:"M 183.369,196.739 Q 154.669,170.548 125.437,196.739 Q 154.669,222.93 183.369,196.739"},ms);
    		bordeOjo.animate({d:"M 183.369,196.739 Q 154.669,170.548 125.437,196.739 Q 154.669,222.93 183.369,196.739"},ms, function(){
    			grupoPestanas.attr({display:"inline"});
    			if(primeraApertura){
    				intervalCierreOjo = setInterval(function(){
    					animacionCierreOjo(150,true);
    				},500);
    			}else{
    				animacionMano(500);
    			}
    		});
        }
	}

	function animacionCierreOjo (ms,primerCierre){
        clearInterval(intervalCierreOjo);
        if(ms>1){
    		grupoPestanas.attr({display:"none"});
    		grupoOjoInt.animate({transform:"t0,0 s0"},(ms));
    		rellonoOjo.animate({d:"M 183.369,196.739 Q 154.669,196.739 125.437,196.739 Q 154.669,196.739 183.369,196.739"},ms, function(){
    			if(primerCierre){
    				animacionAperturaOjo(150,false)	
    			}else{
    				bordeOjo.attr({fill:"none", stroke:"none"});
    				rellonoOjo.attr({fill:"none", stroke:"none"});
    				animacionCierrePiramideCuartaParte(150);
    			}
    		});
    		bordeOjo.animate({d:"M 183.369,196.739 Q 154.669,196.739 125.437,196.739 Q 154.669,196.739 183.369,196.739"},ms);
        }
	}

	function animacionMano (ms){
        if(ms>1){
    		anim.element.append(grupoMano);

    		grupoMano.attr({transform:"t0,0 s0"});
    		grupoMano.animate({transform:"t0,0 s1"},ms, mina.bounce, function(){
                intervalCierreMano = setInterval(function(){
                    animacionCierreMano(500);
                },500);
    		});
        }
	}

	function animacionCierreMano (ms){
        clearInterval(intervalCierreMano);
        if(ms>1){
    		grupoMano.animate({transform:"t0,0 s0"},ms, function(){
                animacionCierreOjo(150, false);
    		});
        }
	}

    function animacionCierrePiramideCuartaParte (ms){
        if(ms>1){
            bloqueOcultaPiramide.animate({transform:"t0,-87"}, ms, function(){
                intervalCierreCuartaParte = setInterval(function(){
                    animacionCierrePiramideTerceraParte(150);
                },300);
            });
        }
    }

    function animacionCierrePiramideTerceraParte (ms){
        clearInterval(intervalCierreCuartaParte);
        if(ms>1){
            bloqueOcultaPiramide.animate({transform:"t0,-59"}, ms, function(){
                intervalCierreTerceraParte = setInterval(function(){
                    animacionCierrePiramideSegundaParte(150);
                },300);
            });
        }
    }
    
    function animacionCierrePiramideSegundaParte (ms){
        clearInterval(intervalCierreTerceraParte);
        if(ms>1){
            bloqueOcultaPiramide.animate({transform:"t0,-31"}, ms, function(){
                intervalCierreSegundaParte = setInterval(function(){
                    animacionCierrePiramidePrimeraParte(150);
                },300);
            });
        }
    }

    function animacionCierrePiramidePrimeraParte (ms){
        clearInterval(intervalCierreSegundaParte);
        if(ms>1){
            bloqueOcultaPiramide.animate({transform:"t0,0"}, ms, function(){  
                document.getElementById('play').disabled = false;
                document.getElementById('pause').disabled = true;
                document.getElementById('resume').disabled = true;
            });
        }
    }

	return anim;

}());


window.onload = function(){
	document.getElementById('play').disabled = false;
	document.getElementById('pause').disabled = true;
	document.getElementById('resume').disabled = true;

	animation.load();
	document.getElementById('play').onclick=function(){
		animation.play();
	};
	document.getElementById('pause').onclick=function(){
		animation.pause();
	};
	document.getElementById('resume').onclick=function(){
		animation.resume();
	};
}
