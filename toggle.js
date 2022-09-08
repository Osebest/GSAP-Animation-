
let icon = document.getElementById('hamburgerBtn')

icon.onclick = function (){
  document.getElementById('hideNav').classList.toggle("open")
}

const parallax = document.getElementById("parallax");

window.addEventListener("scroll", ()=>{
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = offset * 0.4 + "px";
})



/*GSAP ANIMATION*/

gsap.registerPlugin(ScrollTrigger);

var tl = gsap.timeline({defaults:{duration:1}, repeat:-1, repeatDelay:.5, delay:3})

tl.fromTo(".one", {opacity:0, scale:0.4}, {opacity:1, scale:1, yoyo:true, repeat:1})
  .fromTo(".two", {opacity:0, scale:0.4}, {opacity:1, scale:1, yoyo:true, delay:.2, repeat:1})
  .fromTo(".three", {opacity:0, scale:0.4}, {opacity:1, scale:1, yoyo:true, delay:.2, repeat:1});

var tltwo = gsap.timeline({default:{duration:1}})

tltwo.fromTo(".fruit", {opacity:0, scale:0, y:-1000}, {opacity:1, scale:1, y:0, stagger:.3, duration:4.5, ease: "bounce.out"})
      .fromTo(".pot", {y:-1000, scale:0, opacity:0}, {y:0, scale:1, rotation:(5*360), opacity:1, ease:"back.out(1)", duration:2.5}, "<.5");
     
gsap.from(".section2 p", {
  y:300, opacity:0, 
  duration:1.5, ease:"power4.out",
  scrollTrigger: {
    start: "top 90%",
    trigger: ".section2 p",
    toggleActions: "restart reverse restart reverse"
  }
});
gsap.fromTo(".join", {x:-300, opacity:0}, {x:0, opacity:1, stagger:.3, duration:.5, ease:"power4.out",
  scrollTrigger:{
    start: "top center",
    trigger:".join",
    toggleActions: "restart reverse restart reverse"
  }
});
gsap.fromTo(".wanna", {x:-300, opacity:0}, {x:0, opacity:1, duration:1, ease:"back.out(1)",
  scrollTrigger:{
    start: "top center",
    trigger:".wanna",
    toggleActions: "restart none none reverse"
  }
});
gsap.fromTo(".man", {x:300, opacity:0}, {x:0, opacity:1, duration:1, delay:.3, ease:"back.out(1)",
  scrollTrigger:{
    start: "top center",
    trigger:".man",
    toggleActions: "restart none none reverse"
  }
});
gsap.fromTo(".last", {x:-300, opacity:0}, {x:0, opacity:1, duration:1, stagger:.5, ease:"back.out(1)",
  scrollTrigger:{
    start: "top center",
    trigger:".last",
    toggleActions: "restart none none reverse"
  }
});
gsap.fromTo(".video", {x:300, opacity:0}, {x:0, opacity:1, duration:1, delay:.3, ease:"back.out(1)", delay:.5,
  scrollTrigger:{
    start: "top center",
    trigger:".video",
    toggleActions: "restart none none reverse"
  }
});


  