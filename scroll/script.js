// ============================= nav animation ==========

const navTl = gsap.timeline({});

navTl.from("nav h2", {
  opacity: 0,
  y: -10,
  duration: 1,
  ease: "power2.inOut",
});
navTl.from("#item a", {
  opacity: 0,
  y: -10,
  duration: 1,
  stagger: 0.3,
  ease: "power2.inOut",
});

// ========== scroll animation ==========
gsap.from("#page1 #box", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  ease: "power2.inOut",
});
gsap.from("#page2 #box", {
  opacity: 0,
  scale: 0,
  rotate: 360,
  duration: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#page2", // the element to be scrolled (page2)
    scroller: "body", // the element that scrolls (body)
    markers: true, // show markers on the timeline
    start: "top 50%",
    end: "bottom 50%",
    scrub: 2, // scroll er sathe sathe animation hobe scroll na korle hobe na !
  },
});

// ========== scroll animation pin ==========

gsap.to("#page6 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page6",
    scroller: "body",
    markers: true,
    start: "top top",
    end: "bottom top",
    scrub: 2,
    pin: true, // pin the element to the top of the viewport
  },
});
