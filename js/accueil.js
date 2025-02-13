import { SplitText } from "../libs/splitText.js";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const navbar = document.getElementById("navigation-container");
  const lenis = new Lenis({
    lerp: 0.05,
    wheelMultiplier: 1,
    direction: "vertical",
  });

  lenis.overflow = false;

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  function ScrolltoTop() {
    lenis.scrollTo(0, {
      immediate: false,
      duration: 3,
    });
  }

  const totopbtn = document.getElementById("float-btn-back");

  totopbtn.addEventListener("click", function () {
    ScrolltoTop();
  });

  const links = document.querySelectorAll(".scroll-link");
  console.log(links);
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      lenis.scrollTo(targetElement, {
        duration: 3,
        easing: (t) => t,
      });
    });
  });

  var bar = document.querySelector("#progress");

  var splide = new Splide("#splide-carousel", {
    type: "loop",
    updateOnMove: true,
    perPage: 1,
    lazyload: "nearby",
    gap: "4vh",

    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 5000,
    pauseOnHover: false,
    speed: 1000,
  });

  splide.on("mounted move", function () {
    var end = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide.index + 1) / end, 1);

    if (bar) {
      bar.style.width = String(100 * rate) + "%";
    }
  });

  splide.mount();

  // FLOATING BUTTONS

  window.addEventListener("scroll", function () {
    const heroBanner = document.getElementById("hero-banner");
    let floatingButton = document.querySelectorAll(".floating-btn");
    floatingButton.forEach(function (btn) {
      if (window.scrollY > heroBanner.offsetHeight - 10) {
        btn.classList.add("show-floating-button");
      } else {
        btn.classList.remove("show-floating-button");
      }
    });
  });

  // ANIMATION HERO BANNER TO SECTION DISCOVER : )

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "#hero-banner", // L'animation est déclenchée par le hero-banner
        start: "top top", // Au moment où le hero-banner atteint le haut de la fenêtre
        end: "bottom top", // Quand le bas du hero-banner atteint le haut de la fenêtre
        scrub: true, // L'animation suit le scroll de l'utilisateur
      },
    })
    .to("#hero-banner", {
      y: "100%", // Déplace le hero-banner vers le bas jusqu'à ce qu'il disparaisse complètement
      ease: "none",
    });

  // ANIMATION DISCOVER TO CREATORS

  let tl_anim_discover = gsap.timeline({
    scrollTrigger: {
      trigger: "#discover",
      start: "bottom bottom",
      end: "+=200%",
      scrub: true,
      markers: false,
      pin: true,
    },
  });

  tl_anim_discover.to(
    "#div-discover",
    {
      opacity: 0,
      scale: 0.8,
      duration: 4,
      ease: "power2.inOut",
    },
    "+=1.5"
  );
  tl_anim_discover.to(
    "#transition-quote",
    {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "power2.out",
    },
    "-=0.5"
  );

  tl_anim_discover.to(
    "#transition-quote",
    {
      scale: 10,
      opacity: 0,
      duration: 3,
      ease: "power2.in",
    },

    "+=3"
  );

  // ANIMATIONS SCROLLING CREATION //

  let tl_anim_EntryToCreation = gsap.timeline({
    scrollTrigger: {
      trigger: "#creator-paragraph-entry-container",
      start: "top top",
      end: "+=100%",
      scrub: true,
      markers: true,
      pin: true,
    },
  });

  let tl_anim_createur = gsap.timeline({
    scrollTrigger: {
      trigger: "#creator-fixed-background",
      start: "top top",
      end: "+=300%",
      scrub: true,
      markers: true,
      pin: false,
    },
  });
});
