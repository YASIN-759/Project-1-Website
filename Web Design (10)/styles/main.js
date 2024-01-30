
gsap.to(".cover",{
  top:"-120%",
  delay:3,
  ease:Expo.easeInOut,
  duration:2
})

// gsap.to(".cover",{
//   // top:"-100%",
//   delay:3,
  // ease:"bounce.out",
//   duration:3,
//   opacity:0,
// })










// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
var nav = document.getElementById("nav");
var sticky = nav.offsetTop;

window.onscroll = function() {
  if (window.scrollY >= sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;---------------------;;;;;;;;;;;;;;;;;;;;;;;;;;;;

gsap.from(".header-white-dot",{
  opacity:0,
  x:"2rem",
  duration:1,
  delay:0.5,
})

gsap.from("#header-black-dot", {
  duration: 1.1,
  opacity: 0,
  y: "-3.5rem",
  delay: 1,
  ease: "bounce.out",
});


// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-------------------;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

gsap.from("#feature_h1",{
  y:"5rem",
  opacity:0,
  duration:1,
  delay:-1,
  scrollTrigger:{
    trigger:"#feature_h1",
    scroller:"body",
    start:"top 100%",
    end:"top 100%",
    scrub:5,  
  }
})

gsap.from("#card-1",{
  x:"4rem",
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#card-1",
    scroller:"body",
    start:"top 85%",
    end:"top 85%",
    scrub:5,
  }
})

gsap.from("#card-2",{
  x:"4rem",
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#card-2",
    scroller:"body",
    start:"top 90%",
    end:"top 90%",
    scrub:5,
  }
})

gsap.from("#card-3",{
  x:"4rem",
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:"#card-3",
    scroller:"body",
    start:"top 95%",
    end:"top 95%",
    scrub:5,
  }
})

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

gsap.from("#image_h1",{
  y:"5rem",
  opacity:0,
  duration:1,
  delay:-1,
  scrollTrigger:{
    trigger:"#image_h1",
    scroller:"body",
    start:"top 100%",
    end:"top 100%",
    scrub:5,  
  }
})

gsap.from("#images-pad-h1",{
  y:"1rem",
  scale:0.7,
  opacity:0,
  duration:1,
  delay:1,
  scrollTrigger:{
    trigger:"#images-pad-h1",
    scroller:"body",
    start:"top 100%",
    end:"top 100%",
    scrub:5,  
  }
})

gsap.from("#images-pad",{
  duration:2,
  ease:Expo.easeIn,
  scrollTrigger:{
    trigger:"#images-pad",
    scroller:"body",
    start:"top 100%",
    // end:"top 0%",
    scrub:5,
    // pin:true,
 
  }
})

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


gsap.from("#review-h1",{
  y:"5rem",
  opacity:0,
  delay:-1,
  scrollTrigger:{
    trigger:"#review-h1",
    scroller:"body",
    start:"top 100%",
    scrub:5,
  }
})

gsap.from("#review-card1",{
  x:"5rem",
  opacity:0,
  delay:-1,
  scrollTrigger:{
    trigger:"#review-card1",
    scroller:"body",
    start:"top 90%",
    end:"top 90%",
    scrub:5,
  }
})

gsap.from("#review-card2",{
  x:"5rem",
  opacity:0,
  delay:-1,
  scrollTrigger:{
    trigger:"#review-card2",
    scroller:"body",
    start:"top 90%",
    end:"top 90%",
    scrub:5,
  }
})

gsap.from("#review-card3",{
  x:"5rem",
  opacity:0,
  delay:-1,
  scrollTrigger:{
    trigger:"#review-card3",
    scroller:"body",
    start:"top 90%",
    end:"top 90%",
    scrub:5,
  }
})

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

gsap.from("#price-plan-h1",{
  y:"5rem",
  opacity:0,
  delay:-0.5,
  scrollTrigger:{
    trigger:"#price-plan-h1",
    scroller:"body",
    start:"top 100%",
    scrub:1,
  }
})

gsap.from("#price-plan-card",{
  x:"5rem",
  opacity:0,
  delay:-1,
  scrollTrigger:{
    trigger:"#price-plan-card",
    scroller:"body",
    start:"top 100%",
    // scrub:5,
  }
})

// gsap.from("#card-overlay",{
//   x:"5rem",
//   opacity:0,
//   delay:-1.5,
//   scrollTrigger:{
//     trigger:"#card-overlay",
//     scroller:"body",
//     start:"top 90%",
//     scrub:5,
//   }
// })

// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

gsap.from("#blogs-h1",{
  y:"5rem",
  opacity:0,
  delay:1,
  scrollTrigger:{
    trigger:"#blogs-h1",
    scroller:"body",
    start:"top 100%",
    scrub:5,
  }
})

gsap.from("#blog-a",{
  y: "5rem",
  opacity:0,
  delay:1,
  scrollTrigger:{
    trigger:"#blog-a",
    scroller:"body",
    start:"top 100%",
    scrub:5,
  }
})

gsap.from("#blog-b",{
  y: "5rem",
  opacity:0,
  delay:1,
  scrollTrigger:{
    trigger:"#blog-b",
    scroller:"body",
    start:"top 100%",
    scrub:1,
  }
})











// ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// let mm =gsap.matchMedia();

if(window.innerWidth > 767){
gsap.from("#slider",{
  scrollTrigger:{
    trigger:"#slider",
    scroller:"body",
    start:"top 22%",
    pin:true,
  }
})

gsap.to(".img",{
  transform:"translateX(-526%)",
  scrollTrigger:{
    trigger:".img",
    scroller:"body",
    scrub:1,
    start:"top 22%",
    end:"top -110%",
  }
})
}





