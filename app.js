const timer = document.querySelector('.timer');
const hours = document.querySelector('#hrs');
const minutes = document.querySelector('#min');
const seconds = document.querySelector('#sec');
const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');

let timing = 0;
let interval;

function startTimer() {
  if (
    hours.value === '00' &&
    minutes.value === '00' &&
    seconds.value === '00'
  ) {
    return;
  }

  timing--;

  const h = Math.floor(timing / 3600);
  const m = Math.floor((timing % 3600) / 60);
  const s = timing % 60;

  // toFixed()
  hours.value = h < 10 ? `0${h}` : h;
  minutes.value = m < 10 ? `0${m}` : m;
  seconds.value = s < 10 ? `0${s}` : s;

  if (timing === 0 && seconds.value === '00') {
    alert('타이머가 완료되었습니다!');
    clearInterval(interval);
  }
}

startBtn.addEventListener('click', () => {
  timing =
    parseInt(hours.value) * 3600 +
    parseInt(minutes.value) * 60 +
    parseInt(seconds.value);

  if (startBtn.textContent === 'START') {
    // START 버튼을 눌렀을 때
    startBtn.textContent = 'PAUSE';
    startBtn.style.backgroundColor = '#15C2B8';
    interval = setInterval(startTimer, 1000);
  } else {
    // PAUSE 버튼을 눌렀을 때
    startBtn.textContent = 'START';
    startBtn.style.backgroundColor = '#5180ff';
    clearInterval(interval);
  }
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  timing = 0;
  hours.value = '00';
  minutes.value = '00';
  seconds.value = '00';
});
