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

// ========== cursor animation ==========
var body = document.querySelector("body");
var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");

body.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.x,
    y: dets.y,
    duration: 1,
  });
});

image.addEventListener("mouseenter", function () {
  cursor.innerHTML = "🖱";
  gsap.to(cursor, {
    scale: 2.5,
    duration: 0.3,
    opacity: 0.5,
  });
});

image.addEventListener("mouseleave", function () {
  cursor.innerHTML = "";
  gsap.to(cursor, {
    scale: 1,
    duration: 0.3,
    opacity: 1,
  });
});

