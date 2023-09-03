let timer;
let isRunning = false;

const countdownDisplay = document.getElementById("countdown");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        const endTime = new Date().getTime() + 60000; // 60 seconds (adjust as needed)

        timer = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeRemaining = endTime - currentTime;

            if (timeRemaining <= 0) {
                clearInterval(timer);
                isRunning = false;
                countdownDisplay.textContent = "00:00:00";
            } else {
                updateDisplay(timeRemaining);
            }
        }, 1000);

        updateDisplay(60000); // Initialize display with the initial time
    }
}

function stopTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    countdownDisplay.textContent = "00:00:00";
}

function updateDisplay(time) {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    const hoursStr = String(hours).padStart(2, "0");
    const minutesStr = String(minutes).padStart(2, "0");
    const secondsStr = String(seconds).padStart(2, "0");

    countdownDisplay.textContent = `${hoursStr}:${minutesStr}:${secondsStr}`;
}