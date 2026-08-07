let timeLeft = 0;
let timerInterval = null;
let isRunning = false;

// format waktu jadi MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// set waktu dari tombol
function setTimer(seconds) {
  clearInterval(timerInterval);
  timerInterval = null;
  isRunning = false;

  timeLeft = seconds;
  document.getElementById("timer").textContent = formatTime(timeLeft);
  document.querySelector(".start-btn").textContent = "START";
}

// start / pause timer
function startTimer() {
  if (timeLeft <= 0) return;

  const button = document.querySelector(".start-btn");

  // kalau sedang jalan -> pause
  if (isRunning) {
    clearInterval(timerInterval);
    timerInterval = null;
    isRunning = false;
    button.textContent = "START";
    return;
  }

  // kalau pause -> lanjut
  isRunning = true;
  button.textContent = "PAUSE";

  timerInterval = setInterval(() => {
    timeLeft--;

    document.getElementById("timer").textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      isRunning = false;
      button.textContent = "START";
      alert("Time's up!");
    }
  }, 1000);
}
