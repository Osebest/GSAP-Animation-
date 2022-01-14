let icon = document.getElementById('hamburgerBtn')

icon.onclick = function (){
  document.getElementById('hideNav').classList.toggle("open")
}



/*GSAP ANIMATION*/

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({defaults:{duration:1}, repeat:-1, repeatDelay:.8})

tl.to(".one", {opacity:1, yoyo:true, repeat:1})
  .to(".two", {opacity:1, yoyo:true, delay:1, repeat:1})
  .to(".three", {opacity:1, yoyo:true, delay:1, repeat:1});

var tltwo = gsap.timeline({default:{duration:1}})

tltwo.from(".fruit", {opacity:0, y:-1000, stagger:.3, duration:3, ease: "bounce(.1)"})
     .from(".pot", {y:-1000, scale:0, rotation:(10*360), opacity:0, ease:"power-1.easeIn", duration:3}, "<.5");
     
gsap.from(".section2 p", {
  y:200, opacity:0, 
  duration:2, ease:"back",
  start: "top center",
  scrollTrigger: {
    trigger: ".section2 p",
    toggleActions: "restart none none restart"
  }
});
gsap.from(".join", {x:-300, opacity:0, stagger:.5, duration:.5, ease:"back",
  scrollTrigger:{
    start: "top center",
    trigger:".join",
    toggleActions: "restart none reverse pause"
  }
});
gsap.from(".wanna", {x:-300, opacity:0, duration:1, ease:"back",
  scrollTrigger:{
    start: "top center",
    trigger:".wanna",
    toggleActions: "restart none reverse pause"
  }
});
gsap.from(".man", {x:300, opacity:0, duration:1, delay:.5, ease:"back",
  scrollTrigger:{
    start: "top center",
    trigger:".wanna",
    toggleActions: "restart none reverse pause"
  }
});
gsap.from(".last", {x:-300, opacity:0, duration:1, stagger:.5, ease:"back",
  scrollTrigger:{
    start: "top center",
    trigger:".last",
    toggleActions: "restart reverse restart reverse"
  }
});
gsap.from(".video", {x:300, opacity:0, duration:1, delay:.5, ease:"back", delay:.5,
  scrollTrigger:{
    start: "top center",
    trigger:".video",
    toggleActions: "restart reverse restart reverse"
  }
});


  