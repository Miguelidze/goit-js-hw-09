function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-set]');

let timerId = null;

stopBtn.setAttribute('disabled', true);

console.log();
setTimeout(() => {
    console.log()
}, 1000)
