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
function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;
  var splitted = h1Text.split("");
  var halfValue = Math.floor(splitted.length / 2);
  var clutter = "";

  splitted.forEach(function (e, idx) {
    if (idx < halfValue) {
      clutter += `<span class="first">${e}</span>`;
    } else {
      clutter += `<span class="second">${e}</span>`;
    }
  });

  console.log(clutter);

  h1.innerHTML = clutter;
}


breakTheText();

gsap.from("h1 .first", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
  stagger: 0.10, // if give -0.10 ulta vabe hove 
  ease: "power2.inOut", 
});
gsap.from("h1 .second", {
  opacity: 0,
  y: 50,
  duration: 1,
  delay: 0.5,
  stagger: -0.10, // if give -0.10 ulta vabe hove 
  ease: "power2.inOut", 
});
