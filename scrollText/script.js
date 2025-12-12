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

function marqueAnimation() {
  window.addEventListener("wheel", function (dest) {
  console.log("toto", dest.deltaY);
  if (dest.deltaY > 0) {
    gsap.to(".marque", {
      transform: "translateX(-200%)",
      duration: 4,
      ease: "none",
      repeat: -1,
    });
    gsap.to(".marque img", {
      rotate: 180,
      ease: "none",
    });
  } else {
    gsap.to(".marque", {
      transform: "translateX(0%)",
      duration: 4,
      ease: "none",
      repeat: -1,
    });
    gsap.to(".marque img", {
      rotate: 0,
      ease: "none",
    });
  }
});
}

marqueAnimation();
