let timeLeft = 0;
let timerInterval = null;

// format waktu jadi MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// set waktu dari tombol
function setTimer(seconds) {
  clearInterval(timerInterval); // reset timer kalau lagi jalan
  timeLeft = seconds;
  document.getElementById("timer").textContent = formatTime(timeLeft);
}

// mulai timer
function startTimer() {
  if (timeLeft <= 0) return;

  // biar ga double jalan
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    timeLeft--;

    document.getElementById("timer").textContent = formatTime(timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time's up!");
    }
  }, 1000);
}