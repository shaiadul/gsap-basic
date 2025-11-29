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

// ========== svg animation ==========

var initialPath = `M 10 100 Q 500 100 990 100`;
const finalPath = `M 10 100 Q 500 100 990 100`;

const box = document.querySelector("#box");

box.addEventListener("mousemove", function (dets) {
  initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

  gsap.to("svg path", {
    attr: {d: initialPath}, // attr user for attribute value modify
    duration: 0.2,
    ease: "power2.out",
  })
});

box.addEventListener("mouseleave", function () {
  gsap.to("svg path", {
    attr: {d: finalPath},
    duration: 1.5,
    ease: "elastic.out(1, 0.2)",
  })
});
