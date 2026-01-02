const frameWidth = 1512;
const frameHeight = 982;

const setScale = () => {
  const scale = Math.min(window.innerWidth / frameWidth, window.innerHeight / frameHeight);
  document.documentElement.style.setProperty("--scale", scale.toFixed(4));
};

const tick = document.querySelector(".tick");
const tock = document.querySelector(".tock");
let tickOn = true;

const swap = () => {
  tickOn = !tickOn;
  tick.classList.toggle("on", tickOn);
  tock.classList.toggle("on", !tickOn);
};

window.addEventListener("resize", setScale);
window.addEventListener("load", setScale);
setScale();

setInterval(swap, 800);
