const faders = document.querySelectorAll(".fade");

/* ✨ 2. Scroll fade-in */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

faders.forEach(el => observer.observe(el));

/* 🎵 1. 音樂控制 */
const bgm = document.getElementById("bgm");
const btn = document.getElementById("musicBtn");

let playing = false;

btn.addEventListener("click", () => {
  if (!playing) {
    bgm.play();
    btn.textContent = "🔊 Music";
  } else {
    bgm.pause();
    btn.textContent = "🔈 Music";
  }
  playing = !playing;
});

/* 🌫️ 3. 微視差（parallax enhance） */
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  document.querySelector(".hero").style.backgroundPositionY =
    scrolled * 0.5 + "px";
});