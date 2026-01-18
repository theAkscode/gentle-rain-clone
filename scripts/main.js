// Initialize AOS (scroll animations)
// Start animating elements when they appear on screen
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: false,
  offset: 100,
  disable: false
});

// Initialize Rellax (parallax layers)
// Anything with .rellax will move at different speeds when we scroll
let rellax = new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  relativeToWrapper: false,
  round: true,
  vertical: true,
  horizontal: false
});

// Register GSAP ScrollTrigger
// This loads ScrollTrigger so GSAP can animate based on scroll
gsap.registerPlugin(ScrollTrigger);

// Smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Horizontal Scroll Animation
// Moving the whole container left as the page scrolls
gsap.to(".scroll-container", {
  // .scrollWidth - window.innerWidth => calculates how far the container must travel
  x: () => -(document.querySelector(".scroll-container").scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll-section",
    start: "top top",
    end: () => "+=" + (document.querySelector(".scroll-container").scrollWidth - window.innerWidth),
    scrub: 1,
    pin: true,
    anticipatePin: 1,
    markers: false
  }
});

// Rotating Text Animation
// List of words to rotate
const words = ["Practice", "Upskill", "Play", "Improve"];
// Tracks which word is currently showing
let index = 0;

function rotateWords() {
  index = (index + 1) % words.length;

  // Makes the animation smooth and buttery
  gsap.to("#rotating-word", {
    opacity: 0,
    y: -15,
    duration: 0.5,
    ease: "power2.in",
    onComplete: () => {
      document.getElementById("rotating-word").textContent = words[index];

      gsap.to("#rotating-word", {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  });
}

// Run the animation every 2.5 seconds
const rotationInterval = setInterval(rotateWords, 2500);

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  clearInterval(rotationInterval);
});
