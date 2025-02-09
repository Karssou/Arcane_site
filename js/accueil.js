// Attendre que la page soit chargée
window.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.to("#hero-video", {
    scale: 1.2, // Zoom léger pour donner un effet de profondeur
    y: -100, // Décalage progressif vers le haut
    scrollTrigger: {
      trigger: "#hero-banner",
      start: "top bottom", // Déclenchement au début du scroll
      end: "bottom top", // Fin de l'effet
      scrub: 2, // Effet fluide
    },
  });

  // Effet plus léger sur le logo
  gsap.to("#hero-title", {
    yPercent: 10, // Déplacement plus subtil
    opacity: 0.8, // Effet de fondu léger
    ease: "none",
    scrollTrigger: {
      trigger: "#hero-banner",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  // Effet sur le bouton
  gsap.to("#hero-info", {
    yPercent: 5,
    opacity: 0.9,
    ease: "none",
    scrollTrigger: {
      trigger: "#hero-banner",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
});
