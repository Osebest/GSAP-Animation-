/*GSAP ANIMATION*/

var tl = gsap.timeline({defaults:{duration:1}, repeat:-1, repeatDelay:.8})

tl.to(".two", {opacity:1, yoyo:true, repeat:1})
  .to(".one", {opacity:1, yoyo:true, delay:1, repeat:1})
  .to(".three", {opacity:1, yoyo:true, delay:1, repeat:1});
var tll = new gsap.timeline({repeat:-1}) 