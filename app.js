menu.onclick = () => {
  navbar.classList.toggle("");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};


// Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "70%",
  duration: 1000,
  reset: true,
});

sr.reveal(
  
  {
    interval: 100,
  }
);


