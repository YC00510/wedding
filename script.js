const reveals = document.querySelectorAll(".reveal");
const bgm = document.getElementById("bgm");
const btn = document.getElementById("musicBtn");
const opening = document.getElementById("opening");
const enterBtn = document.getElementById("enterBtn");

let playing = false;

/* ✨ REVEAL（上下都會動） */
const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }

  });

}, {
  threshold: 0.2
});

reveals.forEach(r => observer.observe(r));

/* ✉️ 信封控制（唯一入口） */
enterBtn.addEventListener("click", async () => {

  try {
    await bgm.play();
    playing = true;
    btn.style.opacity = 1;
  } catch (err) {
    console.log("music blocked", err);
  }

  opening.classList.add("hide");

});

/* 🎵 音樂 toggle */
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

/* 🌫 HERO 視差（改 video 版本） */
window.addEventListener("scroll", () => {

  const video = document.querySelector(".hero-video");

  if (!video) return;

  video.style.transform =
    `translateY(${window.scrollY * 0.15}px) scale(1.05)`;

});