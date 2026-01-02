const frameWidth = 1512;
const frameHeight = 982;

const setScale = () => {
  const isMobile = window.matchMedia("(max-width: 600px)").matches;
  const scale = isMobile
    ? 1
    : Math.min(window.innerWidth / frameWidth, window.innerHeight / frameHeight);
  document.documentElement.style.setProperty("--scale", scale.toFixed(4));
};

const tick = document.querySelector(".tick");
const tock = document.querySelector(".tock");
const mobileTick = document.querySelector(".mobile-tick");
const mobileTock = document.querySelector(".mobile-tock");
let tickOn = true;

const swap = () => {
  tickOn = !tickOn;
  if (tick && tock) {
    tick.classList.toggle("on", tickOn);
    tock.classList.toggle("on", !tickOn);
  }
  if (mobileTick && mobileTock) {
    mobileTick.classList.toggle("on", tickOn);
    mobileTock.classList.toggle("on", !tickOn);
  }
};

window.addEventListener("resize", setScale);
window.addEventListener("load", setScale);
setScale();

setInterval(swap, 800);
