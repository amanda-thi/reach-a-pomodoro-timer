let countdown;
let timeLeft = 1500; // Default: 25 menit (1500 detik)
let isRunning = false; // Status timer (sedang berjalan atau tidak)
const timerDisplay = document.getElementById("timer");
const startButton = document.querySelector(".start-btn");

function setTimer(seconds) {
  clearInterval(countdown); // Hentikan timer jika ada yang berjalan
  timeLeft = seconds;
  updateTimerDisplay(timeLeft);
  isRunning = false; // Pastikan status direset
  startButton.textContent = "START"; // Kembalikan teks tombol
}

function startTimer() {
  if (isRunning) {
    clearInterval(countdown); // Jika sedang berjalan, maka pause
    isRunning = false;
    startButton.textContent = "RESUME"; // Ubah teks tombol ke RESUME
  } else {
    countdown = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimerDisplay(timeLeft);
      } else {
        clearInterval(countdown);
        isRunning = false;
        startButton.textContent = "START";
      }
    }, 1000);
    isRunning = true;
    startButton.textContent = "PAUSE";
  }
}

function updateTimerDisplay(seconds) {
  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    secs
  ).padStart(2, "0")}`;
}
