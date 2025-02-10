document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    lerp: 0.05,
    wheelMultiplier: 1,
  });

  lenis.overflow = false;

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  new Splide("#splide-carousel", {
    type: "loop",
    perPage: 1,
    lazyload: "sequential",
    gap: "4vh",
    updateOnMove: true,
    pagination: true,
    arrows: false,
    autoplay: "pause",
    intersection: {
      inView: {
        autoplay: true,
      },
      outView: {
        autoplay: false,
      },
    },

    interval: 3000,
    pauseOnHover: false,
    speed: 1000,
  }).mount();
});
