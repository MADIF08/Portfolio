const sections = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },

  {
    threshold: 0.2,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});

/* NAVBAR */

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const section = document.querySelector(link.getAttribute("href"));

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    closeMenu();
  });
});

/* HOME LOAD */

window.addEventListener("load", () => {
  document
    .querySelector("#home")

    .classList.add("active");
});
const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth",
  });
});
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".nav-overlay");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", closeMenu);

function closeMenu() {
  hamburger.classList.remove("active");
  navLinks.classList.remove("active");
  overlay.classList.remove("active");
}
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

/*welcome text*/
const typingText = document.getElementById("home-text");

const text =
  "Front-end Developer Turning ideas into fast, responsive and accessible web experiences.";

let index = 0;
let deleting = false;

function typeEffect() {
  if (!deleting) {
    typingText.textContent = text.substring(0, index++);
  } else{
    
  return;
  }
  let speed = deleting ? 40 : 30;

  if (!deleting && index > text.length) {
    speed = 2000; // Pause when finished
    deleting = true;
  }

  if (deleting && index < 0) {
    deleting = false;
    speed = 500; // Pause before typing again
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

    // 

const techCards = document.querySelectorAll(".tech-card");

const techObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        techCards.forEach((card, index) => {
          card.classList.remove("show");

          setTimeout(() => {
            card.classList.add("show");
          }, index * 200);
        }); 
      
      } else {
        techCards.forEach((card) => {
          card.classList.remove("show");
        });

      }
    });
  },
  {
    threshold: 0.3,
  },
);

techObserver.observe(document.querySelector("#skills"));

//TOGGLE 

