let timer;
let running = false;
let hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0;
let lapCounter = 1;

document.getElementById("startStop").addEventListener("click", function () {
  if (!running) {
    timer = setInterval(updateTime, 10);
    running = true;
    this.textContent = "STOP";
  } else {
    clearInterval(timer);
    running = false;
    this.textContent = "START";
  }
});

document.getElementById("reset").addEventListener("click", function () {
  clearInterval(timer);
  running = false;
  document.getElementById("startStop").textContent = "START";
  hours = minutes = seconds = milliseconds = 0;
  document.getElementById("hours").textContent = "00";
  document.getElementById("minutes").textContent = "00";
  document.getElementById("seconds").textContent = "00";
  document.getElementById("milliseconds").textContent = "00";
  document.getElementById("lapsList").innerHTML = "";
  lapCounter = 1;

  document.querySelector(".laps-container").style.display = "none";
});

document.getElementById("lap").addEventListener("click", function () {
  let lapTime = `${formatTime(hours)} : ${formatTime(minutes)} : ${formatTime(
    seconds
  )} : ${formatTime(milliseconds)}`;
  let lapItem = document.createElement("li");
  lapItem.textContent = `Lap ${lapCounter}: ${lapTime}`;
  document.getElementById("lapsList").appendChild(lapItem);
  lapCounter++;

  document.querySelector(".laps-container").style.display = "block";

  let lapsContainer = document.querySelector(".laps-container");
  lapsContainer.scrollTop = lapsContainer.scrollHeight;
});

function updateTime() {
  milliseconds += 1;
  if (milliseconds == 100) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
  document.getElementById("milliseconds").textContent =
    formatTime(milliseconds);
}

function formatTime(value) {
  return value < 10 ? `0${value}` : value;
}
