var Banner = {

  init: function() {

    'use strict';

    // Set banner vars
    var adContent = document.getElementById("ad_content"),
      legal = document.getElementById("legal"),
      canvas = document.getElementById("canvas"),
      stage,
      exportRoot,
      adWidth = 300,
      adHeight = 250,
      tl = new TimelineMax({onComplete:adDoneHandler}),
      done = false,
      del;


    ////////////////////////////////////////////////////// HELPERS //////////////////////////////////////////////////////

    // Check for IE 9 or earlier
    function preIE10Check() {
      if (window.attachEvent && !window.navigator.msPointerEnabled) {
        return true;
      } else {
        return false;
      }
    }


    ////////////////////////////////////////////////////// ANIMATION //////////////////////////////////////////////////////


    function initcanvas() {
      exportRoot = new lib.paperfold();
      stage = new createjs.Stage(canvas);
      stage.addChild(exportRoot);
      stage.update();
    }

    function startCanvasAnimation(){
      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick", stage);
    }

    function resetCanvas() {
      stage.removeAllChildren();
      initcanvas();
      tl.restart();
    }

    function frameStart() {
      if(!preIE10Check()){
        frame0();
      } else {
        TweenMax.set('#backup', { className: 'backup' });
        TweenMax.set('ad_content', { opacity: 1 });
      }
    }

    // this is the first frame of your animation
    function frame0(){
      initcanvas();

      tl.set('#ad_content', { autoAlpha: 1 })
        .from('#header_bar', 0.5, { y: "-50" })
        .from(['#logo', '#legal', '#cta'], 0.5, { y: 50 }, "-=0.5")
        .add(startCanvasAnimation, "+=0.25")
        .staggerFrom(['#text_1a', '#text_1b', '#text_1c'], 0.5, { y: 50 }, 0.25, "+=1.5")
        .to(['#text_1a', '#text_1b', '#text_1c'], 0.5, { autoAlpha: 0 }, "+=1.5")
        .staggerFrom(['#text_2a', '#text_2b', '#text_2c', '#text_2d'], 0.5, { y: 50 }, 0.25, "+=.5")
        .to(['#text_2a', '#text_2b', '#text_2c', '#text_2d'], 0.5, { autoAlpha: 0 }, "+=1.5")
        .staggerFrom(['#text_ef1', '#text_ef2','#text_ef3','#text_ef4'], 0.5, { y: 50 }, 0.25)
        .from("#glint",3,{x:"-400", ease:Strong.easeOut, force3D:false},"+=.5");
    }



    ////////////////////////////////////////////////////// EVENT HANDLERS //////////////////////////////////////////////////////

    function onAdClick(e) {
      window.open(window.clickTag);
    }

   function onAdHover(e) {
      if(done){
       TweenMax.from("#glint",3,{x:"-400", ease:Strong.easeOut, force3D:false});
      }
    }

    function onAdOut(e) {
      TweenMax.set('#glint', { clearProps: "all" });
    }

    function onLegalClick(e) {
      createjs.Ticker.removeEventListener("tick", stage);
      resetCanvas();
    }

    function adInteractionListeners() {
      if (adContent.addEventListener) {
        adContent.addEventListener('click', onAdClick, false);
        adContent.addEventListener('mouseenter', onAdHover, false);
        adContent.addEventListener('mouseleave', onAdOut, false);
        // legal.addEventListener('click', onLegalClick, false);
      } else {
        adContent.attachEvent('onclick', onAdClick, false);
        adContent.attachEvent('onmouseenter', onAdHover, false);
        adContent.attachEvent('onmouseleave', onAdOut, false);
        // legal.attachEvent('onclick', onLegalClick, false);
      }
    }

    function adDoneHandler() {
      done = true;
    }


    ////////////////////////////////////////////////////// INIT //////////////////////////////////////////////////////

    adInteractionListeners();
    frameStart();
  }
};

window.onload = function(){
  Banner.init();
};
