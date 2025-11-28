// gsap.to() | initial to final e jete hole and final to initial e jete hole gsap.from()
gsap.to("#box1", {
  x: 100,
  y: 100,
  duration: 2,
  ease: "power2.inOut",
});
gsap.to("#box1", {
  rotation: 360,
  duration: 2,
  backgroundColor: "orange", // css property can be used camelCase
  borderRadius: "50%",
  scale: 1.5,
  ease: "power2.inOut",
});

gsap.to("#box2", {
  x: -100,
  y: 100,
  duration: 2,
  ease: "power2.inOut",
});
gsap.to("#box2", {
  rotation: 360,
  duration: 2,
  delay: 2,
  ease: "power2.inOut",
});

gsap.from("#box3", {
  x: 100,
  y: -100,
  duration: 2,
  ease: "power2.inOut",
});
gsap.from("#box3", {
  rotation: 360,
  duration: 2,
  delay: 2,

  ease: "power2.inOut",
});
gsap.from("#box4", {
  x: -100,
  y: -100,
  duration: 2,
  ease: "power2.inOut",
});
gsap.from("#box4", {
  rotation: 360,
  duration: 2,
  delay: 2,
  backgroundColor: "blue",
  ease: "power2.inOut",
});

// --------------------- Text Animation -------------------

gsap.from("h1", {
  opacity: 0,
  duration: 2,
  color: "red",
  y: 30,
  stagger: 1, // stagger the animation by 1 second all the elements
  ease: "power2.inOut",
  repeat: 1, // repeat the animation 2 time
  // repeatDelay: 2, // delay the animation 2 seconds before repeating
  repeat: -1, // repeat the animation infinitely
});

// ============================= ball-box animation ======================

gsap.to("#ball-box", {
  rotation: 360,
  x: 700,
  duration: 2,
  rotate: 360,
  repeat: -1,
  borderRadius: "50%",
  ease: "power2.inOut",
  yoyo: true, // repeat the animation in reverse direction
});

// ============================= Timeline animation ==========

const tl = gsap.timeline({
    yoyo: true, 
    repeat: -1,
});

tl.to("#box5", {
  x: 700,
  duration: 2,
  rotate: 360,
  borderRadius: "50%",
  ease: "power2.inOut",
});
tl.to("#box6", {
  x: 700,
  duration: 2,
  rotate: 360,
  borderRadius: "50%",
  ease: "power2.inOut",
});
tl.to("#box7", {
  x: 700,
  duration: 2,
  rotate: 360,
  borderRadius: "50%",
  ease: "power2.inOut",
});
tl.to("#box8", {
  x: 700,
  duration: 2,
  rotate: 360,
  borderRadius: "50%",
  ease: "power2.inOut",
});

// ============================= nav animation ==========

const navTl = gsap.timeline({});

navTl.from("nav h2", {
    opacity: 0,
    y: - 10,
    duration: 1,
    ease: "power2.inOut",
})
navTl.from("#item a", {
    opacity: 0,
    y: - 10,
    duration: 1,
    stagger: 0.3,
    ease: "power2.inOut",
})



//______________________________________________________________________//
// ease: "power2.inOut" মানে হলো অ্যানিমেশন কীভাবে শুরু হবে এবং শেষ হবে — অর্থাৎ অ্যানিমেশনের গতি (speed curve) কেমন হবে।

// ➤ power2

// এটা GSAP-এর একটা easing type।

// power1 → কম শক্তিশালী

// power2 → একটু বেশি smooth acceleration/deceleration

// power3 → আরও দ্রুত

// power4 → সবচেয়ে aggressive
// power2 মাঝারি smooth easing দেয়।

// ➤ inOut

// এটা easing-এর দিক বোঝায়:

// in → প্রথমে ধীরে শুরু, পরে দ্রুত

// out → প্রথমে দ্রুত, পরে ধীরে

// inOut → শুরুতে ধীরে → মাঝখানে দ্রুত → শেষে আবার ধীরে
