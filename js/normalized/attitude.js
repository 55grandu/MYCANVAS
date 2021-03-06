var attitude = function() {
    /**
     * This function execute the animation num with the loaded svg f in cancas svg
     * @param  {int}               num number of animation to load
     * @param  {Fragment}(SnapSVG) f   link to loaded SVG
     * @param  {element}           svg canvas
     */
    var animation = function(num, f, svg) {
        switch(num.toString()) {
            case "1":
                return animation_1(f, svg);
                break;
            case "2":
                return animation_2(f, svg);
                break;
            case "3":
                return animation_3(f, svg);
                break;
            case "4":
                return animation_4(f, svg);
                break;
            case "5":
                return animation_5(f, svg);
                break;
        }
    }

    var animation_model = function(f, svg) {
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
         s = new Snap(svg);

        var anim = {}, 
            manoDerGota1 = null, manoDerGota2 = null, manoDerGota3 = null, manoDerGota4 = null, manoIzqGota1 = null, manoIzqGota2 = null, manoIzqGota3 = null, manoIzqGota4 = null, bordeOjoIzq = null, bordeOjoDer = null, rellenoOjoIzq = null, rellenoOjoDer = null, parpadoInfOjoIzq = null, parpadoSupOjoIzq = null, parpadoInfOjoDer = null, parpadoSupOjoDer = null, lineaIzqOjoIzq = null, lineaDerOjoIzq = null, lineaIzqOjoDer = null, lineaDerOjoDer = null,
            grupoManoDer = null, grupoManoIzq = null, grupoGotas = null, interiorOjoIzq = null, interiorOjoDer = null,
            lenLineaIzqOjoIzq = null, lenLineaDerOjoIzq = null, lenLineaIzqOjoDer = null, lenLineaDerOjoDer = null,
            intervalCierreParpado = null,
            RELLENO_104 = null, TRAZO_104 = null, RELLENO_2_208 = null, RELLENO_2_207 = null, bordeRellenoMano104 = null, RELLENO_103 = null, TRAZO_103 = null, RELLENO_2_206 = null, RELLENO_2_205 = null, bordeRellenoMano103 = null,
            loaded = false;

        //grupoManoDer = f.select("g[id='MANO_103_']");
        //grupoManoIzq = f.select("g[id='MANO_104_']");
        RELLENO_104 = f.select("path[id='RELLENO_104_']");
        TRAZO_104 = f.select("path[id='TRAZO_104_']");
        console.log(RELLENO_2_208);
        RELLENO_2_208 = f.select("ellipse[id='RELLENO_2_208_']");
        console.log(RELLENO_2_208);
        RELLENO_2_207 = f.select("ellipse[id='RELLENO_2_207_']");
        bordeRellenoMano104 = f.select("path[id='bordeRellenoMano104']");

        RELLENO_103 = f.select("path[id='RELLENO_103_']");
        TRAZO_103 = f.select("path[id='TRAZO_103_']");
        RELLENO_2_206 = f.select("ellipse[id='RELLENO_2_206_']");
        RELLENO_2_205 = f.select("ellipse[id='RELLENO_2_205_']");
        bordeRellenoMano103 = f.select("path[id='bordeRellenoMano103']");

        manoDerGota1 = f.select("path[id='manoDerGota1']").attr({transform:"t0,-70"});
        manoDerGota2 = f.select("path[id='manoDerGota2']").attr({transform:"t0,-70"});
        manoDerGota3 = f.select("path[id='manoDerGota3']").attr({transform:"t0,-70"});
        manoDerGota4 = f.select("path[id='manoDerGota4']").attr({transform:"t0,-70"});
        manoIzqGota1 = f.select("path[id='manoIzqGota1']").attr({transform:"t0,-70"});
        manoIzqGota2 = f.select("path[id='manoIzqGota2']").attr({transform:"t0,-70"});
        manoIzqGota3 = f.select("path[id='manoIzqGota3']").attr({transform:"t0,-70"});
        manoIzqGota4 = f.select("path[id='manoIzqGota4']").attr({transform:"t0,-70"});
        bordeOjoIzq = f.select("path[id='bordeOjoIzq']").attr({d:"M 153.714,179.194 Q 127.178,179.194 101,179.194 Q 127.178,179.194 153.714,179.194", fill:"#FFFFFF", stroke:"#FFFFFF", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
        bordeOjoDer = f.select("path[id='bordeOjoDer']").attr({d:"M 219.5,179.194 Q 193,179.194 167,179.194 Q 193,179.194 219.5,179.194", fill:"#FFFFFF", stroke:"#FFFFFF", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
        parpadoInfOjoDer = f.select("path[id='parpadoInfOjoDer']");
        parpadoSupOjoDer = f.select("path[id='parpadoSupOjoDer']");
        parpadoInfOjoIzq = f.select("path[id='parpadoInfOjoIzq']");
        parpadoSupOjoIzq = f.select("path[id='parpadoSupOjoIzq']");
        interiorOjoIzq = f.select("g[id='interiorOjoIzq']");
        interiorOjoDer = f.select("g[id='interiorOjoDer']");

        // Play animation
        anim.play = function() {
            // Deshabilitamos el play y habilitamos el pause
            //document.getElementById('play').disabled = true;
            //document.getElementById('pause').disabled = false;

            rellenoOjoIzq = s.path({display:"none", d:"M 153.714,179.194 Q 127.178,179.194 101,179.194 Q 127.178,179.194 153.714,179.194", fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
            rellenoOjoDer = s.path({display:"none", d:"M 219.5,179.194 Q 193,179.194 167,179.194 Q 193,179.194 219.5,179.194", fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});

            lineaIzqOjoIzq = s.path({display:"none", d:"M127.178,179.194 h26.536,0", fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
            lineaDerOjoIzq = s.path({display:"none", d:"M127.178,179.194 h-26,0", fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
            lineaIzqOjoDer = s.path({display:"none", d:"M193,179.194 h26.321,0", fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});
            lineaDerOjoDer = s.path({display:"none", d:"M193,179.194 h-26,0", fill:"none", stroke:"#000000", strokeWidth:"3", strokeLinecap:"round", strokeLinejoin:"round", strokeMiterlimit:"10"});

            lenLineaIzqOjoIzq = lineaIzqOjoIzq.getTotalLength();
            lenLineaDerOjoIzq = lineaDerOjoIzq.getTotalLength();
            lenLineaIzqOjoDer = lineaIzqOjoDer.getTotalLength();
            lenLineaDerOjoDer = lineaDerOjoDer.getTotalLength();

            lineaIzqOjoIzq.attr({strokeDasharray: lenLineaIzqOjoIzq + " " + lenLineaIzqOjoIzq, strokeDashoffset: lenLineaIzqOjoIzq});
            lineaDerOjoIzq.attr({strokeDasharray: lenLineaDerOjoIzq + " " + lenLineaDerOjoIzq, strokeDashoffset: lenLineaDerOjoIzq});
            lineaIzqOjoDer.attr({strokeDasharray: lenLineaIzqOjoDer + " " + lenLineaIzqOjoDer, strokeDashoffset: lenLineaIzqOjoDer});
            lineaDerOjoDer.attr({strokeDasharray: lenLineaDerOjoDer + " " + lenLineaDerOjoDer, strokeDashoffset: lenLineaDerOjoDer});

            RELLENO_104.attr({transform:"t0,-300", d:"m 152.869,165.033 0,-164.909 c 0,-2.374 -1.924,-4.298 -4.299,-4.298 -2.373,0 -4.299,1.924 -4.299,4.298 l 0,167.909 -3.197,0 0,-192.413 c 0,-2.376 -1.924,-4.3 -4.299,-4.3 -2.373,0 -4.299,1.925 -4.299,4.3 l 0,180.609 -3.198,0 0,-188.546 c 0,-2.375 -1.923,-4.299 -4.298,-4.299 -2.375,0 -4.301,1.924 -4.301,4.299 l 0,188.546 -3.195,0 0,-183.915 c 0,-2.375 -1.926,-4.299 -4.299,-4.299 -2.376,0 -4.302,1.924 -4.302,4.299 l 0,185.222 -3.195,0 0,-170.285 c 0,-2.374 -1.925,-4.3 -4.299,-4.3 -2.376,0 -4.302,1.926 -4.302,4.3 l 0,170.283 -0.002,0 0,7.499 0,14.296 0,1.436 0.002,0 c 0,18.752 12.301,24.215 12.301,24.215 l 1.09,2.699 -6.641,32.259 42.283,0 -6.141,-31.259 1.031,-3.091 c 6.601,-4.646 11.094,-14.087 11.766,-22.604 0.061,-0.289 0.092,-0.588 0.092,-0.896 l 0,-1.297 c 0,-0.01 0.004,-0.018 0.004,-0.025 l 0,-15.731 -0.003,0 z"});
            TRAZO_104.attr({transform:"t0,-300",d:"m 150.571,-7.579 c -1.502,0 -2.904,0.432 -4.09,1.18 l 0,-17.98 c 0,-4.248 -3.457,-7.703 -7.706,-7.703 -1.502,0 -2.902,0.433 -4.092,1.179 l 0,-1.412 c 0.002,-4.248 -3.454,-7.703 -7.702,-7.703 -3.644,0 -6.704,2.539 -7.501,5.941 -1.229,-0.828 -2.707,-1.312 -4.295,-1.312 -4.249,0 -7.705,3.456 -7.705,7.704 l 0,8.41 c -1.187,-0.746 -2.588,-1.178 -4.09,-1.178 -4.25,0 -7.705,3.455 -7.705,7.704 l 0,170.285 -0.002,7.497 0,14.296 0,1.438 c 0.002,11.117 5.834,20.89 14.596,26.442 l -7.793,36.229 0.066,0 c -0.025,0.193 -0.041,0.388 -0.041,0.584 0,5.748 10.957,10.407 24.469,10.407 13.514,0 24.468,-4.659 24.468,-10.407 0,-0.196 -0.016,-0.391 -0.041,-0.584 l 0.067,0 -7.711,-36.318 c 7.966,-5.104 13.545,-13.711 14.393,-23.675 0.078,-0.449 0.121,-0.906 0.121,-1.357 l 0,-1.191 0,-0.01 0,-0.119 0,-15.733 0,-164.909 c 0,-4.248 -3.457,-7.705 -7.706,-7.705 z m 4.304,188.344 c 0,0.008 -0.004,0.016 -0.004,0.025 l 0,1.297 c 0,0.309 -0.031,0.607 -0.092,0.896 -0.674,8.518 -5.166,15.957 -11.768,20.604 -1.934,1.362 -4.051,2.479 -6.305,3.317 l 3.438,0.033 0.42,1.975 6.151,28.959 c -4.454,-2.581 -11.632,-4.257 -19.735,-4.257 -8.098,0 -15.273,1.674 -19.728,4.252 l 6.229,-28.872 0.498,-2.307 2.779,0.026 c -2.033,-0.801 -3.948,-1.832 -5.715,-3.064 -7.224,-5.039 -11.955,-13.406 -11.955,-22.885 l -0.004,0 0,-1.436 0,-14.296 0,-7.499 0.004,0 0,-170.283 c 0,-2.374 1.926,-4.3 4.301,-4.3 2.374,0 4.299,1.926 4.299,4.3 l 0,170.285 3.195,0 0,-185.222 c 0,-2.375 1.926,-4.299 4.301,-4.299 2.375,0 4.299,1.924 4.299,4.299 l 0,183.915 3.197,0 0,-188.546 c 0,-2.375 1.925,-4.299 4.3,-4.299 2.375,0 4.298,1.924 4.298,4.299 l 0,188.546 3.197,0 0,-180.608 c 0,-2.375 1.926,-4.3 4.299,-4.3 2.375,0 4.3,1.924 4.3,4.3 l 0,192.413 3.197,0 0,-167.909 c 0,-2.374 1.926,-4.298 4.299,-4.298 2.374,0 4.3,1.924 4.3,4.298 l 0,164.909 0.004,0 0,15.732 z"});
            RELLENO_2_208.attr({transform:"t0,-300"});
            RELLENO_2_207.attr({transform:"t0,-300"});
            bordeRellenoMano104.attr({transform:"t0,-300"});

            RELLENO_103.attr({transform:"t0,-300",d:"m 163.129,165.033 0,-164.909 c 0,-2.374 1.926,-4.298 4.301,-4.298 2.373,0 4.299,1.924 4.299,4.298 l 0,167.909 3.197,0 0,-192.413 c 0,-2.376 1.924,-4.3 4.299,-4.3 2.373,0 4.299,1.925 4.299,4.3 l 0,180.609 3.197,0 0,-188.546 c 0,-2.375 1.922,-4.299 4.297,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,188.546 3.195,0 0,-183.915 c 0,-2.375 1.926,-4.299 4.299,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,185.222 3.195,0 0,-170.285 c 0,-2.374 1.926,-4.3 4.299,-4.3 2.375,0 4.301,1.926 4.301,4.3 l 0,170.283 0.004,0 0,7.499 0,14.296 0,1.436 -0.004,0 c 0,18.752 -12.299,24.215 -12.299,24.215 l -1.09,2.699 6.641,32.259 -42.281,0 6.141,-31.259 -1.031,-3.091 c -6.602,-4.646 -11.094,-14.087 -11.768,-22.604 -0.061,-0.289 -0.092,-0.588 -0.092,-0.896 l 0,-1.297 c 0,-0.01 -0.004,-0.018 -0.004,-0.025 l 0,-15.731 0.003,0 z"});
            TRAZO_103.attr({transform:"t0,-300",d:"m 161.725,0.124 0,164.909 0,15.733 0,0.119 0,0.01 0,1.191 c 0,0.451 0.043,0.908 0.121,1.357 0.848,9.964 6.428,18.571 14.393,23.675 l -7.711,36.318 0.068,0 c -0.025,0.193 -0.041,0.388 -0.041,0.584 0,5.748 10.953,10.407 24.467,10.407 13.512,0 24.467,-4.659 24.467,-10.407 0,-0.196 -0.016,-0.391 -0.041,-0.584 l 0.066,0 -7.793,-36.229 c 8.762,-5.553 14.594,-15.325 14.596,-26.442 l 0,-1.438 0,-14.296 -0.002,-7.497 0,-170.285 c 0,-4.249 -3.455,-7.704 -7.705,-7.704 -1.502,0 -2.902,0.432 -4.09,1.178 l 0,-8.41 c 0,-4.248 -3.455,-7.704 -7.705,-7.704 -1.586,0 -3.064,0.483 -4.293,1.312 -0.799,-3.402 -3.857,-5.941 -7.502,-5.941 -4.248,0 -7.703,3.455 -7.701,7.703 l 0,1.412 c -1.189,-0.746 -2.59,-1.179 -4.092,-1.179 -4.248,0 -7.705,3.455 -7.705,7.703 l 0,17.98 c -1.186,-0.748 -2.588,-1.18 -4.09,-1.18 -4.25,0.002 -7.707,3.459 -7.707,7.705 z m 3.402,164.909 0.004,0 0,-164.909 c 0,-2.374 1.926,-4.298 4.301,-4.298 2.373,0 4.299,1.924 4.299,4.298 l 0,167.909 3.197,0 0,-192.413 c 0,-2.376 1.924,-4.3 4.299,-4.3 2.373,0 4.299,1.925 4.299,4.3 l 0,180.609 3.197,0 0,-188.546 c 0,-2.375 1.922,-4.299 4.297,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,188.546 3.195,0 0,-183.915 c 0,-2.375 1.926,-4.299 4.299,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,185.222 3.195,0 0,-170.285 c 0,-2.374 1.926,-4.3 4.299,-4.3 2.375,0 4.301,1.926 4.301,4.3 l 0,170.283 0.004,0 0,7.499 0,14.296 0,1.436 -0.004,0 c 0,9.479 -4.73,17.846 -11.955,22.885 -1.766,1.232 -3.682,2.264 -5.713,3.064 l 2.779,-0.026 0.498,2.307 6.229,28.872 c -4.455,-2.578 -11.631,-4.252 -19.727,-4.252 -8.104,0 -15.281,1.676 -19.734,4.257 l 6.15,-28.959 0.42,-1.975 3.438,-0.033 c -2.254,-0.839 -4.371,-1.955 -6.305,-3.317 -6.602,-4.646 -11.094,-12.086 -11.768,-20.604 -0.061,-0.289 -0.092,-0.588 -0.092,-0.896 l 0,-1.297 c 0,-0.01 -0.004,-0.018 -0.004,-0.025 z"});
            RELLENO_2_206.attr({transform:"t0,-300"});
            RELLENO_2_205.attr({transform:"t0,-300"});
            bordeRellenoMano103.attr({transform:"t0,-300"});

            s.append(interiorOjoIzq);
            s.append(interiorOjoDer);
            
            interiorOjoIzq.attr({transform:"t0,0 s0"});
            interiorOjoDer.attr({transform:"t0,0 s0"});
            this.timestapInit = new Date().getTime();
            this.timeConsumed = 0;

            animBajaManos(500);
        }

        // Pause animation
        anim.pause = function() {
            // Deshabilitamos el pause y habilitamos el resume
            //document.getElementById('pause').disabled = true;
            //document.getElementById('resume').disabled = false;

            this.timestapPause = new Date().getTime();
            var diff = this.timestapPause - this.timestapInit;
            console.log(diff);
            console.log(this.timeConsumed);
            this.timeConsumed = this.timeConsumed + diff;
            console.log(this.timeConsumed);

            //anim.pause.grupoManoIzq = grupoManoIzq.stop();
            //anim.pause.grupoManoDer = grupoManoDer.stop();
            //anim.pause.grupoGotas = grupoGotas.stop();
            anim.pause.RELLENO_104 = RELLENO_104.stop();
            anim.pause.TRAZO_104 = TRAZO_104.stop();
            anim.pause.RELLENO_2_208 = RELLENO_2_208.stop();
            anim.pause.RELLENO_2_207 = RELLENO_2_207.stop();
            anim.pause.bordeRellenoMano104 = bordeRellenoMano104.stop();
            anim.pause.RELLENO_103 = RELLENO_103.stop();
            anim.pause.TRAZO_103 = TRAZO_103.stop();
            anim.pause.RELLENO_2_206 = RELLENO_2_206.stop();
            anim.pause.RELLENO_2_205 = RELLENO_2_205.stop();
            anim.pause.bordeRellenoMano103 = bordeRellenoMano103.stop();
            anim.pause.manoDerGota1 = manoDerGota1.stop();
            anim.pause.manoDerGota2 = manoDerGota2.stop();
            anim.pause.manoDerGota3 = manoDerGota3.stop();
            anim.pause.manoDerGota4 = manoDerGota4.stop();
            anim.pause.manoIzqGota1 = manoIzqGota1.stop();
            anim.pause.manoIzqGota2 = manoIzqGota2.stop();
            anim.pause.manoIzqGota3 = manoIzqGota3.stop();
            anim.pause.manoIzqGota4 = manoIzqGota4.stop();
            anim.pause.rellenoOjoIzq = rellenoOjoIzq.stop();
            anim.pause.rellenoOjoDer = rellenoOjoDer.stop();
            anim.pause.bordeOjoIzq = bordeOjoIzq.stop();
            anim.pause.bordeOjoDer = bordeOjoDer.stop();
            anim.pause.interiorOjoIzq = interiorOjoIzq.stop();
            anim.pause.interiorOjoDer = interiorOjoDer.stop();
            anim.pause.lineaIzqOjoIzq = lineaIzqOjoIzq.stop();
            anim.pause.lineaIzqOjoDer = lineaIzqOjoDer.stop();
            anim.pause.lineaDerOjoIzq = lineaDerOjoIzq.stop();
            anim.pause.lineaDerOjoDer = lineaDerOjoDer.stop();

            clearInterval(intervalCierreParpado);
        }

        // Resume animation
        anim.resume = function () {
            console.log(this.timeConsumed);
            // Deshabilitamos el resume y habilitamos el pause
            //document.getElementById('pause').disabled = false;
            //document.getElementById('resume').disabled = true;

            if(this.timeConsumed > 1 && this.timeConsumed < 500){
                animBajaManos(500 - this.timeConsumed);
            }else if(this.timeConsumed > 500 && this.timeConsumed < 1000){
                animBajaDedos(1000 - this.timeConsumed);
            }else if(this.timeConsumed > 1000 && this.timeConsumed < 1250){
                animGotas(2000 - this.timeConsumed);
                animAbreLineaOjos((1250 - this.timeConsumed),true);
            }else if(this.timeConsumed > 1250 && this.timeConsumed < 1400){
                animGotas(2000 - this.timeConsumed);
                animAbreOjos((1400 - this.timeConsumed),true);
            }else if(this.timeConsumed > 1400 && this.timeConsumed < 1700){
                animGotas(2000 - this.timeConsumed);
                intervalCierreParpado = setInterval(function(){
                    cierreParpados();
                    animCierraOjos(150,true);
                },(1700 - this.timeConsumed));
            }else if(this.timeConsumed > 1700 && this.timeConsumed < 1850){
                cierreParpados();
                animCierraOjos((1850 - this.timeConsumed),true);
            }else if(this.timeConsumed > 1850 && this.timeConsumed < 2000){
                animGotas(2000 - this.timeConsumed);
                animAbreOjos((2000 - this.timeConsumed),false);
            }else if(this.timeConsumed > 2000 && this.timeConsumed < 2300){
                intervalCierreParpado = setInterval(function(){
                    cierreParpados();
                    animCierraOjos(150,flase);
                },(2300 - this.timeConsumed));
            }else if(this.timeConsumed > 2300 && this.timeConsumed < 2450){
                cierreParpados();
                animCierraOjos((2450 - this.timeConsumed),flase);
            }else if(this.timeConsumed > 2450 && this.timeConsumed < 2700){
                animCierreLineaOjos(2700 - this.timeConsumed);
            }else if(this.timeConsumed > 2700 && this.timeConsumed < 3200){
                animCierreMano(3200 - this.timeConsumed);
            }else{
                animCierreDedos(4100 - this.timeConsumed);
            }


            this.timestapInit = new Date().getTime();
        }

        function animBajaManos (ms){
            s.append(RELLENO_104);
            s.append(TRAZO_104);
            s.append(RELLENO_2_208);
            s.append(RELLENO_2_207);
            s.append(bordeRellenoMano104);
            s.append(RELLENO_103);
            s.append(TRAZO_103);
            s.append(RELLENO_2_206);
            s.append(RELLENO_2_205);
            s.append(bordeRellenoMano103);

            RELLENO_104.animate({transform:"t0,0"},ms);
            TRAZO_104.animate({transform:"t0,0"},ms);
            RELLENO_2_208.animate({transform:"t0,0"},ms);
            RELLENO_2_207.animate({transform:"t0,0"},ms);
            bordeRellenoMano104.animate({transform:"t0,0"},ms);

            RELLENO_103.animate({transform:"t0,0"},ms);
            TRAZO_103.animate({transform:"t0,0"},ms);
            RELLENO_2_206.animate({transform:"t0,0"},ms);
            RELLENO_2_205.animate({transform:"t0,0"},ms);
            bordeRellenoMano103.animate({transform:"t0,0"},ms, function(){
                animBajaDedos(500);
            });
        }

        function animBajaDedos (ms){
            RELLENO_104.animate({d:"M152.869,165.033v-20.909c0-2.374-1.924-4.298-4.299-4.298 c-2.373,0-4.299,1.924-4.299,4.298v23.909h-3.197V119.62c0-2.376-1.924-4.3-4.299-4.3c-2.373,0-4.299,1.925-4.299,4.3v36.609    h-3.198v-44.546c0-2.375-1.923-4.299-4.298-4.299s-4.301,1.924-4.301,4.299v44.546h-3.195v-39.915 c0-2.375-1.926-4.299-4.299-4.299c-2.376,0-4.302,1.924-4.302,4.299v41.222h-3.195v-26.285c0-2.374-1.925-4.3-4.299-4.3 c-2.376,0-4.302,1.926-4.302,4.3v26.283h-0.002v7.499v14.296v1.436h0.002c0,18.752,12.301,24.215,12.301,24.215l1.09,2.699 l-6.641,32.259h42.283l-6.141-31.259l1.031-3.091c6.601-4.646,11.094-14.087,11.766-22.604c0.061-0.289,0.092-0.588,0.092-0.896 v-1.297c0-0.01,0.004-0.018,0.004-0.025v-15.731H152.869z"},ms);
            TRAZO_104.animate({d:"M150.571,136.421c-1.502,0-2.904,0.432-4.09,1.18v-17.98c0-4.248-3.457-7.703-7.706-7.703 c-1.502,0-2.902,0.433-4.092,1.179v-1.412c0.002-4.248-3.454-7.703-7.702-7.703c-3.644,0-6.704,2.539-7.501,5.941 c-1.229-0.828-2.707-1.312-4.295-1.312c-4.249,0-7.705,3.456-7.705,7.704v8.41c-1.187-0.746-2.588-1.178-4.09-1.178 c-4.25,0-7.705,3.455-7.705,7.704v26.285l-0.002,7.497v14.296v1.438c0.002,11.117,5.834,20.89,14.596,26.442l-7.793,36.229h0.066 c-0.025,0.193-0.041,0.388-0.041,0.584c0,5.748,10.957,10.407,24.469,10.407c13.514,0,24.468-4.659,24.468-10.407 c0-0.196-0.016-0.391-0.041-0.584h0.067l-7.711-36.318c7.966-5.104,13.545-13.711,14.393-23.675 c0.078-0.449,0.121-0.906,0.121-1.357v-1.191v-0.01v-0.119v-15.733v-20.909C158.277,139.878,154.82,136.421,150.571,136.421z M154.875,180.765c0,0.008-0.004,0.016-0.004,0.025v1.297c0,0.309-0.031,0.607-0.092,0.896 c-0.674,8.518-5.166,15.957-11.768,20.604c-1.934,1.362-4.051,2.479-6.305,3.317l3.438,0.033l0.42,1.975l6.151,28.959 c-4.454-2.581-11.632-4.257-19.735-4.257c-8.098,0-15.273,1.674-19.728,4.252l6.229-28.872l0.498-2.307l2.779,0.026 c-2.033-0.801-3.948-1.832-5.715-3.064c-7.224-5.039-11.955-13.406-11.955-22.885h-0.004v-1.436v-14.296v-7.499h0.004v-26.283 c0-2.374,1.926-4.3,4.301-4.3c2.374,0,4.299,1.926,4.299,4.3v26.285h3.195v-41.222c0-2.375,1.926-4.299,4.301-4.299 s4.299,1.924,4.299,4.299v39.915h3.197v-44.546c0-2.375,1.925-4.299,4.3-4.299s4.298,1.924,4.298,4.299v44.546h3.197V119.62 c0-2.375,1.926-4.3,4.299-4.3c2.375,0,4.3,1.924,4.3,4.3v48.413h3.197v-23.909c0-2.374,1.926-4.298,4.299-4.298 c2.374,0,4.3,1.924,4.3,4.298v20.909h0.004V180.765z"},ms);

            RELLENO_103.animate({d:"M163.129,165.033v-20.909c0-2.374,1.926-4.298,4.301-4.298 c2.373,0,4.299,1.924,4.299,4.298v23.909h3.197V119.62c0-2.376,1.924-4.3,4.299-4.3c2.373,0,4.299,1.925,4.299,4.3v36.609h3.197 v-44.546c0-2.375,1.922-4.299,4.297-4.299s4.301,1.924,4.301,4.299v44.546h3.195v-39.915c0-2.375,1.926-4.299,4.299-4.299 c2.375,0,4.301,1.924,4.301,4.299v41.222h3.195v-26.285c0-2.374,1.926-4.3,4.299-4.3c2.375,0,4.301,1.926,4.301,4.3v26.283h0.004 v7.499v14.296v1.436h-0.004c0,18.752-12.299,24.215-12.299,24.215l-1.09,2.699l6.641,32.259h-42.281l6.141-31.259l-1.031-3.091 c-6.602-4.646-11.094-14.087-11.768-22.604c-0.061-0.289-0.092-0.588-0.092-0.896v-1.297c0-0.01-0.004-0.018-0.004-0.025v-15.731 H163.129z"},ms);
            TRAZO_103.animate({d:"M161.725,144.124v20.909v15.733v0.119v0.01v1.191c0,0.451,0.043,0.908,0.121,1.357 c0.848,9.964,6.428,18.571,14.393,23.675l-7.711,36.318h0.068c-0.025,0.193-0.041,0.388-0.041,0.584 c0,5.748,10.953,10.407,24.467,10.407c13.512,0,24.467-4.659,24.467-10.407c0-0.196-0.016-0.391-0.041-0.584h0.066l-7.793-36.229 c8.762-5.553,14.594-15.325,14.596-26.442v-1.438v-14.296l-0.002-7.497v-26.285c0-4.249-3.455-7.704-7.705-7.704 c-1.502,0-2.902,0.432-4.09,1.178v-8.41c0-4.248-3.455-7.704-7.705-7.704c-1.586,0-3.064,0.483-4.293,1.312 c-0.799-3.402-3.857-5.941-7.502-5.941c-4.248,0-7.703,3.455-7.701,7.703v1.412c-1.189-0.746-2.59-1.179-4.092-1.179 c-4.248,0-7.705,3.455-7.705,7.703v17.98c-1.186-0.748-2.588-1.18-4.09-1.18C165.182,136.421,161.725,139.878,161.725,144.124z M165.127,165.033h0.004v-20.909c0-2.374,1.926-4.298,4.301-4.298c2.373,0,4.299,1.924,4.299,4.298v23.909h3.197V119.62 c0-2.376,1.924-4.3,4.299-4.3c2.373,0,4.299,1.925,4.299,4.3v36.609h3.197v-44.546c0-2.375,1.922-4.299,4.297-4.299 s4.301,1.924,4.301,4.299v44.546h3.195v-39.915c0-2.375,1.926-4.299,4.299-4.299c2.375,0,4.301,1.924,4.301,4.299v41.222h3.195 v-26.285c0-2.374,1.926-4.3,4.299-4.3c2.375,0,4.301,1.926,4.301,4.3v26.283h0.004v7.499v14.296v1.436h-0.004 c0,9.479-4.73,17.846-11.955,22.885c-1.766,1.232-3.682,2.264-5.713,3.064l2.779-0.026l0.498,2.307l6.229,28.872 c-4.455-2.578-11.631-4.252-19.727-4.252c-8.104,0-15.281,1.676-19.734,4.257l6.15-28.959l0.42-1.975l3.438-0.033 c-2.254-0.839-4.371-1.955-6.305-3.317c-6.602-4.646-11.094-12.086-11.768-20.604c-0.061-0.289-0.092-0.588-0.092-0.896v-1.297 c0-0.01-0.004-0.018-0.004-0.025V165.033z"},ms, function(){
                animGotas(1000);
                animAbreLineaOjos(250,true);
            });
        }

        function animGotas (ms){
            s.append(manoDerGota1);
            s.append(manoDerGota2);
            s.append(manoDerGota3);
            s.append(manoDerGota4);
            s.append(manoIzqGota1);
            s.append(manoIzqGota2);
            s.append(manoIzqGota3);
            s.append(manoIzqGota4);

            manoDerGota1.animate({transform:"t0,180"},ms);
            manoDerGota2.animate({transform:"t0,180"},ms);
            manoDerGota3.animate({transform:"t0,180"},ms);
            manoDerGota4.animate({transform:"t0,180"},ms);
            manoIzqGota1.animate({transform:"t0,180"},ms);
            manoIzqGota2.animate({transform:"t0,180"},ms);
            manoIzqGota3.animate({transform:"t0,180"},ms);
            manoIzqGota4.animate({transform:"t0,180"},ms);
        }

        function animAbreLineaOjos (ms,primeraApertura){
            lineaIzqOjoIzq.before(RELLENO_104);
            lineaIzqOjoIzq.before(TRAZO_104);
            lineaIzqOjoIzq.before(RELLENO_2_208);
            lineaIzqOjoIzq.before(RELLENO_2_207);
            lineaIzqOjoIzq.before(bordeRellenoMano104);
            lineaIzqOjoIzq.attr({display:"inline"});
            lineaDerOjoIzq.before(lineaIzqOjoIzq).attr({display:"inline"});
            lineaIzqOjoDer.before(RELLENO_103);
            lineaIzqOjoDer.before(TRAZO_103);
            lineaIzqOjoDer.before(RELLENO_2_206);
            lineaIzqOjoDer.before(RELLENO_2_205);
            lineaIzqOjoDer.before(bordeRellenoMano103);
            lineaIzqOjoDer.attr({display:"inline"});
            lineaDerOjoDer.before(lineaIzqOjoDer).attr({display:"inline"});

            lineaIzqOjoIzq.animate({strokeDashoffset: "0"},ms);
            lineaDerOjoIzq.animate({strokeDashoffset: "0"},ms);
            lineaIzqOjoDer.animate({strokeDashoffset: "0"},ms);
            lineaDerOjoDer.animate({strokeDashoffset: "0"},ms, function(){
                animAbreOjos(150,primeraApertura);
            });
        }

        function animAbreOjos (ms,primeraApertura){
            s.append(rellenoOjoIzq);
            s.append(bordeOjoIzq);
            s.append(rellenoOjoDer);
            s.append(bordeOjoDer);

            rellenoOjoIzq.attr({display:"inline"});
            bordeOjoIzq.after(rellenoOjoIzq).attr({display:"inline"});
            rellenoOjoDer.attr({display:"inline"});
            bordeOjoDer.after(rellenoOjoDer).attr({display:"inline"});

            interiorOjoIzq.before(bordeOjoIzq).animate({transform:"t0,0 s1"},ms);
            interiorOjoDer.before(bordeOjoDer).animate({transform:"t0,0 s1"},ms);

            bordeOjoDer.animate({d:"M 219.5,179.194 Q 193,202.5 167,179.194 Q 193,156.5 219.5,179.194"},ms);
            bordeOjoIzq.animate({d:"M 153.714,179.194 Q 127.178,202.5 101,179.194 Q 127.178,156.5 153.714,179.194"},ms);
            rellenoOjoDer.animate({d:"M 219.5,179.194 Q 193,202.5 167,179.194 Q 193,156.5 219.5,179.194"},ms);
            rellenoOjoIzq.animate({d:"M 153.714,179.194 Q 127.178,202.5 101,179.194 Q 127.178,156.5 153.714,179.194"},ms, function(){
                abreParpados();
                if(primeraApertura){
                    intervalCierreParpado = setInterval(function(){
                        cierreParpados();
                        animCierraOjos(150,primeraApertura);
                    },300);    
                }else{
                    intervalCierreParpado = setInterval(function(){
                        cierreParpados();
                        animCierraOjos(150,primeraApertura);
                    },300);
                }
            });
        }

        function animCierraOjos (ms,primeraApertura){
            clearInterval(intervalCierreParpado);

            interiorOjoIzq.animate({transform:"t0,0 s0"},ms);
            interiorOjoDer.animate({transform:"t0,0 s0"},ms);

            bordeOjoDer.animate({d:"M 219.5,179.194 Q 193,179.194 167,179.194 Q 193,179.194 219.5,179.194"},ms);
            bordeOjoIzq.animate({d:"M 153.714,179.194 Q 127.178,179.194 101,179.194 Q 127.178,179.194 153.714,179.194"},ms);
            rellenoOjoDer.animate({d:"M 219.5,179.194 Q 193,179.194 167,179.194 Q 193,179.194 219.5,179.194"},ms);
            rellenoOjoIzq.animate({d:"M 153.714,179.194 Q 127.178,179.194 101,179.194 Q 127.178,179.194 153.714,179.194"},ms, function(){
                if(primeraApertura){
                    animAbreOjos(150,false);
                }else{
                    bordeOjoDer.attr({display:"none"});
                    bordeOjoIzq.attr({display:"none"});
                    rellenoOjoDer.attr({display:"none"});
                    rellenoOjoIzq.attr({display:"none"});
                    animCierreLineaOjos(250);
                }
            });
        }

        function abreParpados (){
            s.append(parpadoInfOjoIzq);
            s.append(parpadoInfOjoDer);
            s.append(parpadoSupOjoIzq);
            s.append(parpadoSupOjoDer);

            parpadoInfOjoIzq.attr({display:"inline"});
            parpadoInfOjoDer.attr({display:"inline"});
            parpadoSupOjoIzq.attr({display:"inline"});
            parpadoSupOjoDer.attr({display:"inline"});
        }

        function cierreParpados (){
            parpadoInfOjoIzq.attr({display:"none"});
            parpadoInfOjoDer.attr({display:"none"});
            parpadoSupOjoIzq.attr({display:"none"});
            parpadoSupOjoDer.attr({display:"none"});
        }

        function animCierreLineaOjos (ms){
            lineaIzqOjoIzq.animate({strokeDashoffset: lenLineaIzqOjoIzq},ms);
            lineaDerOjoIzq.animate({strokeDashoffset: lenLineaDerOjoIzq},ms);
            lineaIzqOjoDer.animate({strokeDashoffset: lenLineaIzqOjoDer},ms);
            lineaDerOjoDer.animate({strokeDashoffset: lenLineaDerOjoDer},ms, function(){
                lineaIzqOjoIzq.attr({display:"none"});
                lineaDerOjoIzq.attr({display:"none"});
                lineaIzqOjoDer.attr({display:"none"});
                lineaDerOjoDer.attr({display:"none"});
                animCierreMano(500);
            });
        }

        function animCierreMano (ms){
            RELLENO_104.animate({d:"m 152.869,437.033 0,-292.909 c 0,-2.374 -1.924,-4.298 -4.299,-4.298 -2.373,0 -4.299,1.924 -4.299,4.298 l 0,295.909 -3.197,0 0,-320.413 c 0,-2.376 -1.924,-4.3 -4.299,-4.3 -2.373,0 -4.299,1.925 -4.299,4.3 l 0,308.609 -3.198,0 0,-316.546 c 0,-2.375 -1.923,-4.299 -4.298,-4.299 -2.375,0 -4.301,1.924 -4.301,4.299 l 0,316.546 -3.195,0 0,-311.915 c 0,-2.375 -1.926,-4.299 -4.299,-4.299 -2.376,0 -4.302,1.924 -4.302,4.299 l 0,313.222 -3.195,0 0,-298.285 c 0,-2.374 -1.925,-4.3 -4.299,-4.3 -2.376,0 -4.302,1.926 -4.302,4.3 l 0,298.283 -0.002,0 0,7.499 0,14.296 0,1.436 0.002,0 c 0,18.752 12.301,24.215 12.301,24.215 l 1.09,2.699 -6.641,32.259 42.283,0 -6.141,-31.259 1.031,-3.091 c 6.601,-4.646 11.094,-14.087 11.766,-22.604 0.061,-0.289 0.092,-0.588 0.092,-0.896 l 0,-1.297 c 0,-0.01 0.004,-0.018 0.004,-0.025 l 0,-15.731 -0.003,0 z"},ms);
            TRAZO_104.animate({d:"m 150.571,136.421 c -1.502,0 -2.904,0.432 -4.09,1.18 l 0,-17.98 c 0,-4.248 -3.457,-7.703 -7.706,-7.703 -1.502,0 -2.902,0.433 -4.092,1.179 l 0,-1.412 c 0.002,-4.248 -3.454,-7.703 -7.702,-7.703 -3.644,0 -6.704,2.539 -7.501,5.941 -1.229,-0.828 -2.707,-1.312 -4.295,-1.312 -4.249,0 -7.705,3.456 -7.705,7.704 l 0,8.41 c -1.187,-0.746 -2.588,-1.178 -4.09,-1.178 -4.25,0 -7.705,3.455 -7.705,7.704 l 0,298.285 -0.002,7.497 0,14.296 0,1.438 c 0.002,11.117 5.834,20.89 14.596,26.442 l -7.793,36.229 0.066,0 c -0.025,0.193 -0.041,0.388 -0.041,0.584 0,5.748 10.957,10.407 24.469,10.407 13.514,0 24.468,-4.659 24.468,-10.407 0,-0.196 -0.016,-0.391 -0.041,-0.584 l 0.067,0 -7.711,-36.318 c 7.966,-5.104 13.545,-13.711 14.393,-23.675 0.078,-0.449 0.121,-0.906 0.121,-1.357 l 0,-1.191 0,-0.01 0,-0.119 0,-15.733 0,-292.909 c 0,-4.248 -3.457,-7.705 -7.706,-7.705 z m 4.304,316.344 c 0,0.008 -0.004,0.016 -0.004,0.025 l 0,1.297 c 0,0.309 -0.031,0.607 -0.092,0.896 -0.674,8.518 -5.166,15.957 -11.768,20.604 -1.934,1.362 -4.051,2.479 -6.305,3.317 l 3.438,0.033 0.42,1.975 6.151,28.959 c -4.454,-2.581 -11.632,-4.257 -19.735,-4.257 -8.098,0 -15.273,1.674 -19.728,4.252 l 6.229,-28.872 0.498,-2.307 2.779,0.026 c -2.033,-0.801 -3.948,-1.832 -5.715,-3.064 -7.224,-5.039 -11.955,-13.406 -11.955,-22.885 l -0.004,0 0,-1.436 0,-14.296 0,-7.499 0.004,0 0,-298.283 c 0,-2.374 1.926,-4.3 4.301,-4.3 2.374,0 4.299,1.926 4.299,4.3 l 0,298.285 3.195,0 0,-313.222 c 0,-2.375 1.926,-4.299 4.301,-4.299 2.375,0 4.299,1.924 4.299,4.299 l 0,311.915 3.197,0 0,-316.546 c 0,-2.375 1.925,-4.299 4.3,-4.299 2.375,0 4.298,1.924 4.298,4.299 l 0,316.546 3.197,0 0,-308.608 c 0,-2.375 1.926,-4.3 4.299,-4.3 2.375,0 4.3,1.924 4.3,4.3 l 0,320.413 3.197,0 0,-295.909 c 0,-2.374 1.926,-4.298 4.299,-4.298 2.374,0 4.3,1.924 4.3,4.298 l 0,292.909 0.004,0 0,15.732 z"},ms);
            RELLENO_2_208.animate({transform:"t0, 300"},ms);
            RELLENO_2_207.animate({transform:"t0, 300"},ms);
            bordeRellenoMano104.animate({transform:"t0, 300"},ms);

            RELLENO_103.animate({d:"m 163.129,437.033 0,-292.909 c 0,-2.374 1.926,-4.298 4.301,-4.298 2.373,0 4.299,1.924 4.299,4.298 l 0,295.909 3.197,0 0,-320.413 c 0,-2.376 1.924,-4.3 4.299,-4.3 2.373,0 4.299,1.925 4.299,4.3 l 0,308.609 3.197,0 0,-316.546 c 0,-2.375 1.922,-4.299 4.297,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,316.546 3.195,0 0,-311.915 c 0,-2.375 1.926,-4.299 4.299,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,313.222 3.195,0 0,-298.285 c 0,-2.374 1.926,-4.3 4.299,-4.3 2.375,0 4.301,1.926 4.301,4.3 l 0,298.283 0.004,0 0,7.499 0,14.296 0,1.436 -0.004,0 c 0,18.752 -12.299,24.215 -12.299,24.215 l -1.09,2.699 6.641,32.259 -42.281,0 6.141,-31.259 -1.031,-3.091 c -6.602,-4.646 -11.094,-14.087 -11.768,-22.604 -0.061,-0.289 -0.092,-0.588 -0.092,-0.896 l 0,-1.297 c 0,-0.01 -0.004,-0.018 -0.004,-0.025 l 0,-15.731 0.003,0 z"},ms);
            TRAZO_103.animate({d:"m 161.725,144.124 0,292.909 0,15.733 0,0.119 0,0.01 0,1.191 c 0,0.451 0.043,0.908 0.121,1.357 0.848,9.964 6.428,18.571 14.393,23.675 l -7.711,36.318 0.068,0 c -0.025,0.193 -0.041,0.388 -0.041,0.584 0,5.748 10.953,10.407 24.467,10.407 13.512,0 24.467,-4.659 24.467,-10.407 0,-0.196 -0.016,-0.391 -0.041,-0.584 l 0.066,0 -7.793,-36.229 c 8.762,-5.553 14.594,-15.325 14.596,-26.442 l 0,-1.438 0,-14.296 -0.002,-7.497 0,-298.285 c 0,-4.249 -3.455,-7.704 -7.705,-7.704 -1.502,0 -2.902,0.432 -4.09,1.178 l 0,-8.41 c 0,-4.248 -3.455,-7.704 -7.705,-7.704 -1.586,0 -3.064,0.483 -4.293,1.312 -0.799,-3.402 -3.857,-5.941 -7.502,-5.941 -4.248,0 -7.703,3.455 -7.701,7.703 l 0,1.412 c -1.189,-0.746 -2.59,-1.179 -4.092,-1.179 -4.248,0 -7.705,3.455 -7.705,7.703 l 0,17.98 c -1.186,-0.748 -2.588,-1.18 -4.09,-1.18 -4.25,0.002 -7.707,3.459 -7.707,7.705 z m 3.402,292.909 0.004,0 0,-292.909 c 0,-2.374 1.926,-4.298 4.301,-4.298 2.373,0 4.299,1.924 4.299,4.298 l 0,295.909 3.197,0 0,-320.413 c 0,-2.376 1.924,-4.3 4.299,-4.3 2.373,0 4.299,1.925 4.299,4.3 l 0,308.609 3.197,0 0,-316.546 c 0,-2.375 1.922,-4.299 4.297,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,316.546 3.195,0 0,-311.915 c 0,-2.375 1.926,-4.299 4.299,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,313.222 3.195,0 0,-298.285 c 0,-2.374 1.926,-4.3 4.299,-4.3 2.375,0 4.301,1.926 4.301,4.3 l 0,298.283 0.004,0 0,7.499 0,14.296 0,1.436 -0.004,0 c 0,9.479 -4.73,17.846 -11.955,22.885 -1.766,1.232 -3.682,2.264 -5.713,3.064 l 2.779,-0.026 0.498,2.307 6.229,28.872 c -4.455,-2.578 -11.631,-4.252 -19.727,-4.252 -8.104,0 -15.281,1.676 -19.734,4.257 l 6.15,-28.959 0.42,-1.975 3.438,-0.033 c -2.254,-0.839 -4.371,-1.955 -6.305,-3.317 -6.602,-4.646 -11.094,-12.086 -11.768,-20.604 -0.061,-0.289 -0.092,-0.588 -0.092,-0.896 l 0,-1.297 c 0,-0.01 -0.004,-0.018 -0.004,-0.025 z"},ms);
            RELLENO_2_206.animate({transform:"t0, 300"},ms);
            RELLENO_2_205.animate({transform:"t0, 300"},ms);
            bordeRellenoMano103.animate({transform:"t0, 300"},ms, function(){
                animCierreDedos(500);
            });
        }

        function animCierreDedos (ms){
            RELLENO_104.animate({d:"m 152.869,437.033 0,-22.909 c 0,-2.374 -1.924,-4.298 -4.299,-4.298 -2.373,0 -4.299,1.924 -4.299,4.298 l 0,25.909 -3.197,0 0,-50.413 c 0,-2.376 -1.924,-4.3 -4.299,-4.3 -2.373,0 -4.299,1.925 -4.299,4.3 l 0,38.609 -3.198,0 0,-46.546 c 0,-2.375 -1.923,-4.299 -4.298,-4.299 -2.375,0 -4.301,1.924 -4.301,4.299 l 0,46.546 -3.195,0 0,-41.915 c 0,-2.375 -1.926,-4.299 -4.299,-4.299 -2.376,0 -4.302,1.924 -4.302,4.299 l 0,43.222 -3.195,0 0,-28.285 c 0,-2.374 -1.925,-4.3 -4.299,-4.3 -2.376,0 -4.302,1.926 -4.302,4.3 l 0,28.283 -0.002,0 0,7.499 0,14.296 0,1.436 0.002,0 c 0,18.752 12.301,24.215 12.301,24.215 l 1.09,2.699 -6.641,32.259 42.283,0 -6.141,-31.259 1.031,-3.091 c 6.601,-4.646 11.094,-14.087 11.766,-22.604 0.061,-0.289 0.092,-0.588 0.092,-0.896 l 0,-1.297 c 0,-0.01 0.004,-0.018 0.004,-0.025 l 0,-15.731 -0.003,0 z"},ms);
            TRAZO_104.animate({d:"m 150.571,406.421 c -1.502,0 -2.904,0.432 -4.09,1.18 l 0,-17.98 c 0,-4.248 -3.457,-7.703 -7.706,-7.703 -1.502,0 -2.902,0.433 -4.092,1.179 l 0,-1.412 c 0.002,-4.248 -3.454,-7.703 -7.702,-7.703 -3.644,0 -6.704,2.539 -7.501,5.941 -1.229,-0.828 -2.707,-1.312 -4.295,-1.312 -4.249,0 -7.705,3.456 -7.705,7.704 l 0,8.41 c -1.187,-0.746 -2.588,-1.178 -4.09,-1.178 -4.25,0 -7.705,3.455 -7.705,7.704 l 0,28.285 -0.002,7.497 0,14.296 0,1.438 c 0.002,11.117 5.834,20.89 14.596,26.442 l -7.793,36.229 0.066,0 c -0.025,0.193 -0.041,0.388 -0.041,0.584 0,5.748 10.957,10.407 24.469,10.407 13.514,0 24.468,-4.659 24.468,-10.407 0,-0.196 -0.016,-0.391 -0.041,-0.584 l 0.067,0 -7.711,-36.318 c 7.966,-5.104 13.545,-13.711 14.393,-23.675 0.078,-0.449 0.121,-0.906 0.121,-1.357 l 0,-1.191 0,-0.01 0,-0.119 0,-15.733 0,-22.909 c 0,-4.248 -3.457,-7.705 -7.706,-7.705 z m 4.304,46.344 c 0,0.008 -0.004,0.016 -0.004,0.025 l 0,1.297 c 0,0.309 -0.031,0.607 -0.092,0.896 -0.674,8.518 -5.166,15.957 -11.768,20.604 -1.934,1.362 -4.051,2.479 -6.305,3.317 l 3.438,0.033 0.42,1.975 6.151,28.959 c -4.454,-2.581 -11.632,-4.257 -19.735,-4.257 -8.098,0 -15.273,1.674 -19.728,4.252 l 6.229,-28.872 0.498,-2.307 2.779,0.026 c -2.033,-0.801 -3.948,-1.832 -5.715,-3.064 -7.224,-5.039 -11.955,-13.406 -11.955,-22.885 l -0.004,0 0,-1.436 0,-14.296 0,-7.499 0.004,0 0,-28.283 c 0,-2.374 1.926,-4.3 4.301,-4.3 2.374,0 4.299,1.926 4.299,4.3 l 0,28.285 3.195,0 0,-43.222 c 0,-2.375 1.926,-4.299 4.301,-4.299 2.375,0 4.299,1.924 4.299,4.299 l 0,41.915 3.197,0 0,-46.546 c 0,-2.375 1.925,-4.299 4.3,-4.299 2.375,0 4.298,1.924 4.298,4.299 l 0,46.546 3.197,0 0,-38.608 c 0,-2.375 1.926,-4.3 4.299,-4.3 2.375,0 4.3,1.924 4.3,4.3 l 0,50.413 3.197,0 0,-25.909 c 0,-2.374 1.926,-4.298 4.299,-4.298 2.374,0 4.3,1.924 4.3,4.298 l 0,22.909 0.004,0 0,15.732 z"},ms);

            RELLENO_103.animate({d:"m 163.129,437.033 0,-22.909 c 0,-2.374 1.926,-4.298 4.301,-4.298 2.373,0 4.299,1.924 4.299,4.298 l 0,25.909 3.197,0 0,-50.413 c 0,-2.376 1.924,-4.3 4.299,-4.3 2.373,0 4.299,1.925 4.299,4.3 l 0,38.609 3.197,0 0,-46.546 c 0,-2.375 1.922,-4.299 4.297,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,46.546 3.195,0 0,-41.915 c 0,-2.375 1.926,-4.299 4.299,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,43.222 3.195,0 0,-28.285 c 0,-2.374 1.926,-4.3 4.299,-4.3 2.375,0 4.301,1.926 4.301,4.3 l 0,28.283 0.004,0 0,7.499 0,14.296 0,1.436 -0.004,0 c 0,18.752 -12.299,24.215 -12.299,24.215 l -1.09,2.699 6.641,32.259 -42.281,0 6.141,-31.259 -1.031,-3.091 c -6.602,-4.646 -11.094,-14.087 -11.768,-22.604 -0.061,-0.289 -0.092,-0.588 -0.092,-0.896 l 0,-1.297 c 0,-0.01 -0.004,-0.018 -0.004,-0.025 l 0,-15.731 0.003,0 z"},ms);
            TRAZO_103.animate({d:"m 161.725,414.124 0,22.909 0,15.733 0,0.119 0,0.01 0,1.191 c 0,0.451 0.043,0.908 0.121,1.357 0.848,9.964 6.428,18.571 14.393,23.675 l -7.711,36.318 0.068,0 c -0.025,0.193 -0.041,0.388 -0.041,0.584 0,5.748 10.953,10.407 24.467,10.407 13.512,0 24.467,-4.659 24.467,-10.407 0,-0.196 -0.016,-0.391 -0.041,-0.584 l 0.066,0 -7.793,-36.229 c 8.762,-5.553 14.594,-15.325 14.596,-26.442 l 0,-1.438 0,-14.296 -0.002,-7.497 0,-28.285 c 0,-4.249 -3.455,-7.704 -7.705,-7.704 -1.502,0 -2.902,0.432 -4.09,1.178 l 0,-8.41 c 0,-4.248 -3.455,-7.704 -7.705,-7.704 -1.586,0 -3.064,0.483 -4.293,1.312 -0.799,-3.402 -3.857,-5.941 -7.502,-5.941 -4.248,0 -7.703,3.455 -7.701,7.703 l 0,1.412 c -1.189,-0.746 -2.59,-1.179 -4.092,-1.179 -4.248,0 -7.705,3.455 -7.705,7.703 l 0,17.98 c -1.186,-0.748 -2.588,-1.18 -4.09,-1.18 -4.25,0.002 -7.707,3.459 -7.707,7.705 z m 3.402,22.909 0.004,0 0,-22.909 c 0,-2.374 1.926,-4.298 4.301,-4.298 2.373,0 4.299,1.924 4.299,4.298 l 0,25.909 3.197,0 0,-50.413 c 0,-2.376 1.924,-4.3 4.299,-4.3 2.373,0 4.299,1.925 4.299,4.3 l 0,38.609 3.197,0 0,-46.546 c 0,-2.375 1.922,-4.299 4.297,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,46.546 3.195,0 0,-41.915 c 0,-2.375 1.926,-4.299 4.299,-4.299 2.375,0 4.301,1.924 4.301,4.299 l 0,43.222 3.195,0 0,-28.285 c 0,-2.374 1.926,-4.3 4.299,-4.3 2.375,0 4.301,1.926 4.301,4.3 l 0,28.283 0.004,0 0,7.499 0,14.296 0,1.436 -0.004,0 c 0,9.479 -4.73,17.846 -11.955,22.885 -1.766,1.232 -3.682,2.264 -5.713,3.064 l 2.779,-0.026 0.498,2.307 6.229,28.872 c -4.455,-2.578 -11.631,-4.252 -19.727,-4.252 -8.104,0 -15.281,1.676 -19.734,4.257 l 6.15,-28.959 0.42,-1.975 3.438,-0.033 c -2.254,-0.839 -4.371,-1.955 -6.305,-3.317 -6.602,-4.646 -11.094,-12.086 -11.768,-20.604 -0.061,-0.289 -0.092,-0.588 -0.092,-0.896 l 0,-1.297 c 0,-0.01 -0.004,-0.018 -0.004,-0.025 z"},ms);
        }

        return {
            play: anim.play,
            pause: anim.pause,
            resume: anim.resume
        };
    };

    var animation_3 = function(f, svg) {
        s = new Snap(svg);

        var anim = {};

        var grupoPiramide = null, bloqueOcultaPiramide = null, bordeOjo = null, rellonoOjo = null, grupoOjoInt = null, grupoPestanas = null, grupoMano = null, grupoPiramideParteSup = null,
            intervalPrimeraParte = null, intervalSegundaParte = null, intervalTerceraParte = null, intervalCierreCuartaParte = null, intervalCierreTerceraParte = null, intervalCierreSegundaParte = null, intervalCierreOjo = null, intervalCierreMano = null, mascaraPiramide = null;
            fondoVerdeParteInf = null, primeraLineaHorizontal = null, lineaCentalInferior = null, lineaIzqInferior = null, lineaDerInferior = null, lineaIzqMedio = null, lineaDerMedio = null, lineaCentalSuperior = null, segundaLineaHorizontal = null, terceraLineaHorizontal = null
            fondoVerdeParteInterInf = null, bordeNegroParteInterInf = null,
            fondoVerdeParteInterSup = null, bordeNegroParteInterSup = null,
            fondoVerdeParteSup = null, bordeNegroParteSup = null,
            fondoBlancoPiramide = null,
            loaded = false;

        // Cargamos los elementos del SVG
        //grupoPiramide = f.select("g[id='grupoPiramide']");
        fondoBlancoPiramide = f.select("polygon[id='fondoBlancoPiramide']");
        primeraLineaHorizontal = f.select("rect[id='primeraLineaHorizontal']");
        lineaCentalInferior = f.select("rect[id='lineaCentalInferior']");
        lineaIzqInferior = f.select("rect[id='lineaIzqInferior']");
        lineaDerInferior = f.select("rect[id='lineaDerInferior']");
        segundaLineaHorizontal = f.select("rect[id='segundaLineaHorizontal']");
        lineaIzqMedio = f.select("rect[id='lineaIzqMedio']");
        lineaDerMedio = f.select("rect[id='lineaDerMedio']");
        lineaCentalSuperior = f.select("rect[id='lineaCentalSuperior']");
        terceraLineaHorizontal = f.select("rect[id='terceraLineaHorizontal']");
        //bloqueOcultaPiramide = s.path({d:"m 214.472,240.01 -119.403,0 16.44103,-29.74731 15.63127,-28.28218 15.58957,-28.20671 12.03913,-21.7828 12.17037,22.01989 15.73019,28.46068 15.52063,28.08152 z", fill:"yellow"});
        //bloqueOcultaPiramide2 = s.path({d:"m -114.185,-3.078 108.966,0 -14.60077,-26.41769 -15.51732,-28.07602 -15.65469,-28.32458 -8.71022,-15.75971 -8.70966,15.75869 -15.57529,28.18091 -15.63018,28.28024 z", fill:"black"});
        mascaraPiramide = s.path({d:"m 216.472,240.01 -123.403,0 61.701,-110.019 z", fill:"#FFFFFF"});

        s.append(fondoBlancoPiramide);

        fondoVerdeParteInf = s.path({d:"m211.903,238.489l-16.03151,-28.623l-78.87149,0.134l-15.172,28.489l110.075,0z", fill:"#93C93D"});
        bordeNegroParteInf = s.path({d:"m214.472,240.00999l-119.403,0l16.701,-30.019l85.85101,0.009l16.851,30.00999zm-114.185,-3.07799l108.966,0l-14.483,-26.578l-79.2415,-0.711l-15.2415,27.289z"});
        grupoPiramideParteInf = s.group(fondoVerdeParteInf, bordeNegroParteInf, primeraLineaHorizontal, lineaCentalInferior, lineaIzqInferior, lineaDerInferior);

        fondoVerdeParteInterInf = s.path({d:"m180.903,182.489l14.968,27.377l-78.871,0.134l14.828,-27.511l49.075,0z", fill:"#93C93D"});
        bordeNegroParteInterInf = s.path({d:"m182.472,182.00999l-55.172,0.19l-15.53001,27.791l85.85101,0.009l-15.42101,-27.99001l0.272,0zm-52.185,0.92201l48.966,0l15.517,27.422l-79.241,-0.711l14.758,-26.711l0,0z"});
        grupoPiramideParteInterInf = s.group(fondoVerdeParteInterInf, bordeNegroParteInterInf, primeraLineaHorizontal, segundaLineaHorizontal, lineaIzqMedio, lineaDerMedio);

        fondoVerdeParteInterSup = s.path({d:"m180.8,182.489l-15.929,-28.189l-18.071,0l-14.972,28.189l48.972,0z", fill:"#93C93D"});
        bordeNegroParteInterSup = s.path({d:"m182.472,182.00999l-55.272,0.19l15.56999,-28.209l23.85101,0.00899l15.57899,28.01001l0.27199,0l0.00002,0zm-52.185,0.92201l48.966,0l-15.55301,-28.289l-18.17101,0l-15.24199,28.289l0,0z"});
        grupoPiramideParteInterSup = s.group(fondoVerdeParteInterSup, bordeNegroParteInterSup, segundaLineaHorizontal, terceraLineaHorizontal, lineaCentalSuperior);
        
        fondoVerdeParteSup = s.path({d:"m155.84,137.243l9.03101,17.05701l-18.071,0l9.03999,-17.05701l0,0z", fill:"#93C93D"});
        bordeNegroParteSup = s.path({d:"m154.77,132.10001l0,-0.10901l-12.17,22l24.29999,0.009l-12.12999,-22.009l0,0l0,0l0,0.10901zm0.03,6.39999l-0.03,-0.10001l8.62999,15.8l-17.39999,0l8.77,-15.7l0,0l0.03,0z"});
        grupoPiramideParteSup = s.group(fondoVerdeParteSup, bordeNegroParteSup, terceraLineaHorizontal);

        grupoPiramide = s.group(grupoPiramideParteSup, grupoPiramideParteInterSup, grupoPiramideParteInterInf, grupoPiramideParteInf);

        bordeOjo = f.select("path[id='bordeOjo']").attr({d:"M 183.369,196.739 Q 154.669,196.739 125.437,196.739 Q 154.669,196.739 183.369,196.739", fill:"none"});
        rellonoOjo = f.select("path[id='rellonoOjo']").attr({d:"M 183.369,196.739 Q 154.669,196.739 125.437,196.739 Q 154.669,196.739 183.369,196.739", fill:"none"});
        grupoOjoInt = f.select("g[id='grupoOjoInt']");
        grupoPestanas = f.select("g[id='grupoPestanas']").attr({display:"none"});
        grupoMano = f.select("g[id='grupoMano']");

        //s.append(grupoPiramide);
        //s.append(bloqueOcultaPiramide2);
        //s.append(bloqueOcultaPiramide);
        s.append(grupoPestanas);
        s.append(mascaraPiramide);

        //terceraLineaHorizontal.attr({transform:"t0,115"});
/*
        fondoVerdeParteInf.animate({transform:"t0,0"},500); 
        bordeNegroParteInf.animate({transform:"t0,0"},500);
        primeraLineaHorizontal.animate({transform:"t0,0"},500);
        lineaCentalInferior.animate({transform:"t0,0"},500);
        lineaIzqInferior.animate({transform:"t0,0"},500);
        lineaDerInferior.animate({transform:"t0,0"},500, function(){

            fondoVerdeParteInterInf.animate({transform:"t0,0"},500); 
            bordeNegroParteInterInf.animate({transform:"t0,0"},500); 
            //primeraLineaHorizontal.animate({transform:"t0,0"},500); 
            segundaLineaHorizontal.animate({transform:"t0,0"},500); 
            lineaIzqMedio.animate({transform:"t0,0"},500); 
            lineaDerMedio.animate({transform:"t0,0"},500, function(){

                grupoPiramideParteInf.after(grupoPiramideParteInterInf);

                fondoVerdeParteInterSup.animate({transform:"t0,0"},500); 
                bordeNegroParteInterSup.animate({transform:"t0,0"},500); 
                //segundaLineaHorizontal.attr({transform:"t0,87"});
                terceraLineaHorizontal.animate({transform:"t0,0"},500); 
                lineaCentalSuperior.animate({transform:"t0,0"},500, function(){

                    grupoPiramideParteInterInf.after(grupoPiramideParteInterSup);

                    fondoVerdeParteSup.animate({transform:"t0,0"},500); 
                    bordeNegroParteSup.animate({transform:"t0,0"},500, function(){
                        grupoPiramideParteInterSup.after(grupoPiramideParteSup);
                    }); 
                    //terceraLineaHorizontal.attr({transform:"t0,115"});
                });
            }); 
        });
*/
 
        

        anim.play = function() {
            grupoPiramide.attr({ mask : mascaraPiramide });

            fondoVerdeParteInf.attr({transform:"t0,35"}); 
            bordeNegroParteInf.attr({transform:"t0,35"});
            primeraLineaHorizontal.attr({transform:"t0,35"});
            lineaCentalInferior.attr({transform:"t0,35"});
            lineaIzqInferior.attr({transform:"t0,35"});
            lineaDerInferior.attr({transform:"t0,35"});

            fondoVerdeParteInterInf.attr({transform:"t0,59"});
            bordeNegroParteInterInf.attr({transform:"t0,59"});
            //primeraLineaHorizontal.attr({transform:"t0,59"});
            segundaLineaHorizontal.attr({transform:"t0,59"});
            lineaIzqMedio.attr({transform:"t0,59"});
            lineaDerMedio.attr({transform:"t0,59"});

            fondoVerdeParteInterSup.attr({transform:"t0,87"});
            bordeNegroParteInterSup.attr({transform:"t0,87"});
            //segundaLineaHorizontal.attr({transform:"t0,87"});
            terceraLineaHorizontal.attr({transform:"t0,87"});
            lineaCentalSuperior.attr({transform:"t0,87"});
            
            fondoVerdeParteSup.attr({transform:"t0,115"});
            bordeNegroParteSup.attr({transform:"t0,115"});

            this.timestapInit = new Date().getTime();
            this.timeConsumed = 0;

            //bloqueOcultaPiramide.attr({ mask : mascaraPiramide});

            animacionPiramidePrimeraParte(150);
        }

        anim.pause = function() {
            this.timestapPause = new Date().getTime();
            var diff = this.timestapPause - this.timestapInit;
            console.log(diff);
            console.log(this.timeConsumed);
            this.timeConsumed = this.timeConsumed + diff;
            console.log(this.timeConsumed);

            anim.pause.fondoVerdeParteInf = fondoVerdeParteInf.stop(); 
            anim.pause.bordeNegroParteInf = bordeNegroParteInf.stop();
            anim.pause.primeraLineaHorizontal = primeraLineaHorizontal.stop();
            anim.pause.lineaCentalInferior = lineaCentalInferior.stop();
            anim.pause.lineaIzqInferior = lineaIzqInferior.stop();
            anim.pause.lineaDerInferior = lineaDerInferior.stop();
            anim.pause.fondoVerdeParteInterInf = fondoVerdeParteInterInf.stop();
            anim.pause.bordeNegroParteInterInf = bordeNegroParteInterInf.stop();
            anim.pause.segundaLineaHorizontal = segundaLineaHorizontal.stop();
            anim.pause.lineaIzqMedio = lineaIzqMedio.stop();
            anim.pause.lineaDerMedio = lineaDerMedio.stop();
            anim.pause.fondoVerdeParteInterSup = fondoVerdeParteInterSup.stop();
            anim.pause.bordeNegroParteInterSup = bordeNegroParteInterSup.stop();
            anim.pause.terceraLineaHorizontal = terceraLineaHorizontal.stop();
            anim.pause.lineaCentalSuperior = lineaCentalSuperior.stop();
            anim.pause.fondoVerdeParteSup = fondoVerdeParteSup.stop();
            anim.pause.bordeNegroParteSup = bordeNegroParteSup.stop();
            //anim.pause.grupoPiramide = grupoPiramide.stop();
            //anim.pause.bloqueOcultaPiramide = bloqueOcultaPiramide.stop();
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
            if(this.timeConsumed > 1 && this.timeConsumed < 150){
                animacionPiramidePrimeraParte(150 - this.timeConsumed);
            }else if(this.timeConsumed > 150 && this.timeConsumed < 450){
                intervalPrimeraParte = setInterval(function(){
                    animacionPiramideSegundaParte(150);
                },(450 - this.timeConsumed));
            }else if(this.timeConsumed > 450 && this.timeConsumed < 600){
                animacionPiramideSegundaParte(600 - this.timeConsumed);
            }else if(this.timeConsumed > 600 && this.timeConsumed < 900){
                intervalSegundaParte = setInterval(function(){
                    animacionPiramideTerceraParte(150);
                },(900 - this.timeConsumed));
            }else if(this.timeConsumed > 900 && this.timeConsumed < 1050){
                animacionPiramideTerceraParte(1050 - this.timeConsumed);
            }else if(this.timeConsumed > 1050 && this.timeConsumed < 1350){
                intervalTerceraParte = setInterval(function(){
                    animacionPiramideCuartaParte(150);
                },(1350 - this.timeConsumed));
            }else if(this.timeConsumed > 1350 && this.timeConsumed < 1500){
                animacionPiramideCuartaParte(1500 - this.timeConsumed);
            }else if(this.timeConsumed > 1500 && this.timeConsumed < 1650){
                animacionAperturaOjo(1650 - this.timeConsumed);
            }else if(this.timeConsumed > 1500 && this.timeConsumed < 2000){
                intervalCierreOjo = setInterval(function(){
                    animacionCierreOjo(150,true);
                },(2000 - this.timeConsumed));
            }else if(this.timeConsumed > 2000 && this.timeConsumed < 2150){
                animacionCierreOjo(2150 - this.timeConsumed);
            }else if(this.timeConsumed > 2150 && this.timeConsumed < 2300){
                animacionAperturaOjo(2300 - this.timeConsumed);
            }else if(this.timeConsumed > 2300 && this.timeConsumed < 2800){
                animacionMano(2800 - this.timeConsumed);
            }else if(this.timeConsumed > 2800 && this.timeConsumed < 3300){
                intervalCierreMano = setInterval(function(){
                    animacionCierreMano(500);
                },(3300 - this.timeConsumed));
            }else if(this.timeConsumed > 3300 && this.timeConsumed < 3800){
                animacionCierreMano(3800 - this.timeConsumed);
            }else if(this.timeConsumed > 3800 && this.timeConsumed < 3950){
                animacionCierreOjo(3950 - this.timeConsumed);
            }else if(this.timeConsumed > 3950 && this.timeConsumed < 4100){
                animacionCierrePiramideCuartaParte(4100 - this.timeConsumed);
            }else if(this.timeConsumed > 4100 && this.timeConsumed < 4400){
                intervalCierreCuartaParte = setInterval(function(){
                    animacionCierrePiramideTerceraParte(150);
                },(4400 - this.timeConsumed));
            }else if(this.timeConsumed > 4400 && this.timeConsumed < 4550){
                animacionCierrePiramideTerceraParte(4550 - this.timeConsumed);
            }else if(this.timeConsumed > 4550 && this.timeConsumed < 4850){
                intervalCierreTerceraParte = setInterval(function(){
                    animacionCierrePiramideSegundaParte(150);
                },(4850 - this.timeConsumed));
            }else if(this.timeConsumed > 4850 && this.timeConsumed < 5000){
                animacionCierrePiramideSegundaParte(5000 - this.timeConsumed);
            }else if(this.timeConsumed > 5000 && this.timeConsumed < 5300){
                intervalCierreSegundaParte = setInterval(function(){
                    animacionCierrePiramidePrimeraParte(150);
                },(5300 - this.timeConsumed));
            }else{
                animacionCierrePiramidePrimeraParte(5450 - this.timeConsumed);
            }
            this.timestapInit = new Date().getTime();
        }

         function animacionPiramidePrimeraParte (ms){
            if(ms>1){
                fondoVerdeParteInf.animate({transform:"t0,0"},ms); 
                bordeNegroParteInf.animate({transform:"t0,0"},ms);
                primeraLineaHorizontal.animate({transform:"t0,0"},ms);
                lineaCentalInferior.animate({transform:"t0,0"},ms);
                lineaIzqInferior.animate({transform:"t0,0"},ms);
                lineaDerInferior.animate({transform:"t0,0"},ms, function(){
                //bloqueOcultaPiramide.animate({transform:"t0,-31"}, ms, function(){
                    intervalPrimeraParte = setInterval(function(){
                        animacionPiramideSegundaParte(150);
                    },300);
                });
            }
        }

        function animacionPiramideSegundaParte (ms){
            clearInterval(intervalPrimeraParte);
            if(ms>1){
                fondoVerdeParteInterInf.animate({transform:"t0,0"},ms); 
                bordeNegroParteInterInf.animate({transform:"t0,0"},ms); 
                //primeraLineaHorizontal.animate({transform:"t0,0"},ms); 
                segundaLineaHorizontal.animate({transform:"t0,0"},ms); 
                lineaIzqMedio.animate({transform:"t0,0"},ms); 
                lineaDerMedio.animate({transform:"t0,0"}, ms, function(){
                //bloqueOcultaPiramide.animate({transform:"t0,-59"}, ms, function(){
                    grupoPiramideParteInf.after(grupoPiramideParteInterInf);
                    intervalSegundaParte = setInterval(function(){
                        animacionPiramideTerceraParte(150);
                    },300);
                });
            }
        }

        function animacionPiramideTerceraParte (ms){
            clearInterval(intervalSegundaParte);
            if(ms>1){
                fondoVerdeParteInterSup.animate({transform:"t0,0"},ms); 
                bordeNegroParteInterSup.animate({transform:"t0,0"},ms); 
                //segundaLineaHorizontal.attr({transform:"t0,87"});
                terceraLineaHorizontal.animate({transform:"t0,0"},ms); 
                lineaCentalSuperior.animate({transform:"t0,0"}, ms, function(){
                //bloqueOcultaPiramide.animate({transform:"t0,-87"}, ms, function(){
                    grupoPiramideParteInterInf.after(grupoPiramideParteInterSup);
                    intervalTerceraParte = setInterval(function(){
                        animacionPiramideCuartaParte(150);
                    },300);
                });
            }
        }

        function animacionPiramideCuartaParte (ms){
            clearInterval(intervalTerceraParte);
            if(ms>1){
                fondoVerdeParteSup.animate({transform:"t0,0"}, ms); 
                bordeNegroParteSup.animate({transform:"t0,0"}, ms, function(){
                    grupoPiramideParteInterSup.after(grupoPiramideParteSup);
                    animacionAperturaOjo(150,true);
                });
            }
        }

        function animacionAperturaOjo (ms,primeraApertura){
            if(ms>1){
                s.append(rellonoOjo);
                s.append(grupoOjoInt);
                s.append(bordeOjo);

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
                s.append(grupoMano);

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
                grupoPiramideParteSup.after(grupoPiramideParteInterSup);
                grupoPiramideParteSup.after(grupoPiramideParteInterInf);
                grupoPiramideParteSup.after(grupoPiramideParteInf);
                fondoVerdeParteSup.animate({transform:"t0,115"}, ms); 
                bordeNegroParteSup.animate({transform:"t0,115"}, ms, function(){
                    intervalCierreCuartaParte = setInterval(function(){
                        animacionCierrePiramideTerceraParte(150);
                    },300);
                });
            }
        }

        function animacionCierrePiramideTerceraParte (ms){
            clearInterval(intervalCierreCuartaParte);
            if(ms>1){
                grupoPiramideParteInterSup.after(grupoPiramideParteInterInf);
                grupoPiramideParteInterSup.after(grupoPiramideParteInf);
                fondoVerdeParteInterSup.animate({transform:"t0,87"},ms); 
                bordeNegroParteInterSup.animate({transform:"t0,87"},ms); 
                //segundaLineaHorizontal.attr({transform:"t0,87"});
                terceraLineaHorizontal.animate({transform:"t0,87"},ms); 
                lineaCentalSuperior.animate({transform:"t0,87"}, ms, function(){
                    intervalCierreTerceraParte = setInterval(function(){
                        animacionCierrePiramideSegundaParte(150);
                    },300);
                });
            }
        }

        function animacionCierrePiramideSegundaParte (ms){
            clearInterval(intervalCierreTerceraParte);
            if(ms>1){
                grupoPiramideParteInterInf.after(grupoPiramideParteInf);
                fondoVerdeParteInterInf.animate({transform:"t0,59"},ms); 
                bordeNegroParteInterInf.animate({transform:"t0,59"},ms); 
                //primeraLineaHorizontal.animate({transform:"t0,0"},ms); 
                segundaLineaHorizontal.animate({transform:"t0,59"},ms); 
                lineaIzqMedio.animate({transform:"t0,59"},ms); 
                lineaDerMedio.animate({transform:"t0,59"}, ms, function(){
                    intervalCierreSegundaParte = setInterval(function(){
                        animacionCierrePiramidePrimeraParte(150);
                    },300);
                });
            }
        }

        function animacionCierrePiramidePrimeraParte (ms){
            clearInterval(intervalCierreSegundaParte);
            if(ms>1){
                fondoVerdeParteInf.animate({transform:"t0,35"},ms); 
                bordeNegroParteInf.animate({transform:"t0,35"},ms);
                primeraLineaHorizontal.animate({transform:"t0,35"},ms);
                lineaCentalInferior.animate({transform:"t0,35"},ms);
                lineaIzqInferior.animate({transform:"t0,35"},ms);
                lineaDerInferior.animate({transform:"t0,35"},ms, function(){
                });
            }
        }

        return {
            play: anim.play,
            pause: anim.pause,
            resume: anim.resume
        };
    }

    return {
        animation: animation
    };
};
