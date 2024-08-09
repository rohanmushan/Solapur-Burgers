const menuBtn = document.getElementById("head-button");
const navLinks = document.getElementById("head-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 800,
};

ScrollReveal().reveal(".header_burger img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header_slogans h2", {
  ...scrollRevealOption,
  delay: 200,
});
ScrollReveal().reveal(".header_slogans h1", {
  ...scrollRevealOption,
  delay: 500,
});
  
ScrollReveal().reveal("#Special1", {
   ...scrollRevealOption,
   origin: "left",
   interval: 300,
   duration: 900,
});

ScrollReveal().reveal("#Special2", {
  ...scrollRevealOption,
  origin: "left",
  interval: 300,
  duration: 900,
});

ScrollReveal().reveal("#Special3", {
  ...scrollRevealOption,
  origin: "right",
  interval: 300,
  duration: 900,
});

ScrollReveal().reveal("#Special4", {
  ...scrollRevealOption,
  origin: "right",
  interval: 300,
  duration: 900,
});

ScrollReveal().reveal(".menu_card", {
  ...scrollRevealOption,
  interval: 300,
});

ScrollReveal().reveal(".event_content", {
  ...scrollRevealOption,
  duration: 900,
  origin: "left",
});

ScrollReveal().reveal("#event2", {
  ...scrollRevealOption,
  duration: 900,
  origin: "right",
});

