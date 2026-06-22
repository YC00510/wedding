const reveals = document.querySelectorAll(".reveal");
const bgm = document.getElementById("bgm");
const btn = document.getElementById("musicBtn");
const opening = document.getElementById("opening");

/* 🎬 scroll reveal */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("show");
  });
});

reveals.forEach(r => observer.observe(r));

/* 🎵 autoplay */
window.addEventListener("load", () => {
  bgm.play().catch(() => {
    bgm.muted = true;
    bgm.play();
  });
});

/* 🎧 toggle */
let playing = true;

btn.addEventListener("click", () => {
  if (playing) {
    bgm.pause();
    btn.style.opacity = 0.4;
  } else {
    bgm.play();
    btn.style.opacity = 1;
  }
  playing = !playing;
});

/* 🎬 close opening */
setTimeout(() => {
  opening.style.display = "none";
}, 3200);

/* 🌫 subtle cinematic parallax */
window.addEventListener("scroll", () => {
  document.querySelector(".hero").style.backgroundPositionY =
    window.scrollY * 0.4 + "px";
});