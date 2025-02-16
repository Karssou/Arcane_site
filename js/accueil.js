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

  // CAROUSSELS

  var bar = document.querySelector("#progress");

  var splide_discover = new Splide("#splide-carousel-discover", {
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

  splide_discover.on("mounted move", function () {
    var end = splide_discover.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide_discover.index + 1) / end, 1);

    if (bar) {
      bar.style.width = String(100 * rate) + "%";
    }
  });

  splide_discover.mount();

  var splide_discover_fortiche = new Splide("#splide-carousel-fortiche", {
    type: "fade",
    updateOnMove: true,
    perPage: 1,
    lazyload: "nearby",
    rewind: true,
    pagination: false,
    arrows: false,
    autoplay: true,
    interval: 5000,
    pauseOnHover: false,
    speed: 1000,
  }).mount();

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

  // ANIMATION ENTRY PARAGRAPH

  gsap.to("#creator-paragraph-entry-container", {
    scrollTrigger: {
      trigger: "#creator-paragraph-entry-container",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 0.5,
      markers: false,
    },
    opacity: 0,
    duration: 2,
    ease: "power1.out",
  });

  // ANIMATIONS SCROLLING CREATION //

  let tl_anim_creation = gsap.timeline({
    scrollTrigger: {
      trigger: "#creator-fixed-background",
      start: "top top",
      end: "bottom+=300% bottom",
      endTrigger: "#div-creator-alexyee",
      scrub: true,
      pin: true,
      markers: true,
    },
  });

  // ANIMATION PARAGRAPHE CHRISTIAN LINKE

  let tl_anim_chlinke = gsap.timeline({
    scrollTrigger: {
      trigger: "#div-creator-chlinke",
      start: "center-=30% bottom",
      end: "center+=30% top",
      scrub: true,
      pin: false,
      markers: true,
    },
  });

  tl_anim_chlinke.from(
    [
      ".img-container-chlinke",
      ".creator-description-chlinke",
      ".span-information-creator-chlinke",
      ".span-sub-information-creator-chlinke",
    ],
    {
      opacity: 0,
      y: 50,
      stagger: 0.7,
      duration: 1,
      ease: "power2.out",
    }
  );

  tl_anim_chlinke.to(
    [
      ".img-container-chlinke",
      ".creator-description-chlinke",
      ".span-information-creator-chlinke",
      ".span-sub-information-creator-chlinke",
    ],
    {
      opacity: 0,
      y: -50,
      stagger: 0.7,
      duration: 1,
      ease: "power2.in",
    },
    "+=3"
  );

  let tl_animation_alexyee = gsap.timeline({
    scrollTrigger: {
      trigger: "#div-creator-alexyee",
      start: "center-=30% bottom",
      end: "center+=30% top",
      scrub: true,
      pin: false,
      markers: true,
    },
  });

  tl_animation_alexyee.from(
    [
      ".img-container-alexyee",
      ".creator-description-alexyee",
      ".span-information-creator-alexyee",
      ".span-sub-information-creator-alexyee",
    ],
    {
      opacity: 0,
      y: 50,
      stagger: 0.7,
      ease: "power2.out",
    }
  );

  tl_animation_alexyee.to(
    [
      ".img-container-alexyee",
      ".creator-description-alexyee",
      ".span-information-creator-alexyee",
      ".span-sub-information-creator-alexyee",
    ],
    {
      opacity: 0,
      y: -50,
      stagger: 0.7,
      ease: "power2.in",
    },
    "+=3"
  );

  let tl_anim_ToFortiche = gsap.timeline({
    scrollTrigger: {
      trigger: "#div-creator-alexyee",
      start: "bottom top",
      end: "bottom+=300% bottom",
      scrub: true,
      pin: true,
      markers: true,
      pinspacing: true,
    },
  });

  tl_anim_ToFortiche.to("#creator-fixed-background", {
    opacity: 0,
    duration: 1,
  });

  tl_anim_ToFortiche.to("#transition-quote-fortiche", { opacity: 1 });

  tl_anim_ToFortiche.to(
    "#transition-quote-fortiche",
    {
      opacity: 1,
      scale: 1,
      duration: 2,
      ease: "power2.out",
    },
    "-=0.5"
  );

  tl_anim_ToFortiche.to(
    "#transition-quote-fortiche",
    {
      scale: 10,
      opacity: 0,
      duration: 3,
      ease: "power2.in",
    },

    "+=3"
  );

  // ANIMATION FIXED BACKGROUND

  gsap.to("#fortiche-fixed-background", {
    scrollTrigger: {
      trigger: "#fortiche-fixed-background",
      start: "bottom bottom",
      end: "top bottom",
      endTrigger: "#timeline-container",
      markers: true,
      pin: true,
      scrub: true,
      pinSpacing: false,
    },
    opacity: 0.5,
  });

  // ANIMATION DISCOVER

  let tl_anim_DiscoverFortiche = gsap.timeline({
    scrollTrigger: {
      trigger: "#discover-fortiche",
      start: "center bottom",
      end: "center+=30% top",
      scrub: true,
      pin: false,
      markers: true,
    },
  });

  tl_anim_DiscoverFortiche.from(".title-discover-fortiche", {
    opacity: 0,
    y: 40,
  });

  tl_anim_DiscoverFortiche.from(
    ".fortiche-subtext",
    { opacity: 0, y: 40 },
    "-=1"
  );

  tl_anim_DiscoverFortiche.from(
    "#splide-carousel-fortiche",
    {
      opacity: 0,
      x: 40,
    },
    "-=1"
  );

  tl_anim_DiscoverFortiche.from(
    ".fortiche-presentation",
    {
      opacity: 0,
      x: -40,
    },
    "-=1"
  );

  tl_anim_DiscoverFortiche.to(
    ".title-discover-fortiche",
    {
      opacity: 0,
      y: -40,
    },
    "+=1"
  );
  tl_anim_DiscoverFortiche.to(".fortiche-subtext", { opacity: 0, y: -40 });
  tl_anim_DiscoverFortiche.to(".fortiche-presentation", { opacity: 0, x: -40 });
  tl_anim_DiscoverFortiche.to("#splide-carousel-fortiche", {
    opacity: 0,
    x: 40,
  });

  // ANIMATIONS DES FIGURES

  gsap.utils.toArray(".fortiche-figure").forEach((figure) => {
    let tl_anim_figures = gsap.timeline({
      scrollTrigger: {
        trigger: figure,
        start: "center bottom",
        end: "center+=30% top",
        scrub: true,
        pin: false,
        markers: false,
      },
    });

    tl_anim_figures.from(
      figure.querySelectorAll(".img-wrapper, .figure-name"),
      {
        opacity: 0,
        stagger: 0.1,
        x: -50,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    tl_anim_figures.from(
      figure.querySelectorAll(".figure-role"),
      {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.5"
    );

    tl_anim_figures.from(
      figure.querySelectorAll(".paragraph-figure .line"),
      {
        opacity: 0,
        y: 20,
        stagger: 0.4,
        duration: 1,
        ease: "power3.out",
      },
      "-=2"
    );

    tl_anim_figures.to(figure.querySelectorAll(".img-wrapper, .figure-name"), {
      opacity: 0,
      x: 100, // Mouvement vers la droite (inverse de l'entrée)
      duration: 1.2,
      ease: "power2.in",
    });

    tl_anim_figures.to(figure.querySelectorAll(".figure-role"), {
      opacity: 0,
      x: -100,
      duration: 1,
      ease: "power2.in",
    });

    tl_anim_figures.to(
      figure.querySelectorAll(".paragraph-figure .line"),
      {
        opacity: 0,
        y: -20,
        stagger: 0.3,
        duration: 0.5,
        ease: "power3.in",
      },
      "-=2"
    );
  });

  var splide_timeline_fortiche = new Splide("#timeline-project-fortiche", {
    type: "fade",
    updateOnMove: true,
    perPage: 1,
    lazyload: "nearby",
    rewind: false,
    pagination: false,
    arrows: false,
    autoplay: false,
    speed: 1000,
  });

  const PB_Fortiche = document.getElementById("timeline-progress-bar");
  const PB_Progression_Fortiche = document.getElementById(
    "timeline-progression"
  );

  splide_timeline_fortiche.on("mounted move", function () {
    var end = splide_timeline_fortiche.Components.Controller.getEnd() + 1;
    var rate = Math.min((splide_timeline_fortiche.index + 1) / end, 1);
    if (PB_Fortiche) {
      PB_Progression_Fortiche.style.width = String(100 * rate) + "%";
    }
  });

  PB_Fortiche.addEventListener("click", function (e) {
    const rect = PB_Fortiche.getBoundingClientRect();

    const clickX = e.clientX - rect.left;

    const progressPercent = clickX / rect.width;

    const slideIndex = Math.round(
      progressPercent * (splide_timeline_fortiche.length - 1)
    );
    console.log(slideIndex);
    splide_timeline_fortiche.go(slideIndex);
  });

  splide_timeline_fortiche.mount();
});
