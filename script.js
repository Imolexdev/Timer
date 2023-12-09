let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  timer = setInterval(updateTimer, 1000);
  document.getElementById('startBtn').disabled = true;
}

function stopTimer() {
  clearInterval(timer);
  document.getElementById('startBtn').disabled = false;
}

function resetTimer() {
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById('startBtn').disabled = false;
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}

function toggleDarkMode() {
  const body = document.body;
  const darkModeToggle = document.getElementById('darkModeToggle');

  if (darkModeToggle.checked) {
    body.style.setProperty('--bg-color', '#333');
    body.style.setProperty('--text-color', '#fff');
  } else {
    body.style.setProperty('--bg-color', '#f4f4f4');
    body.style.setProperty('--text-color', '#000');
  }
}
