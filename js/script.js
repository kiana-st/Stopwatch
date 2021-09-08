let intervalHandle = 1;
let startTime = new Date();


const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const outputLabel = document.getElementById("output");

let getIntervalString = (startTime, endTime) => {
  const milliseconds = endTime - startTime;

  const hour = Math.floor(milliseconds / (3600 * 1000));
  const minute = Math.floor((milliseconds % (3600 * 1000)) / (60 * 1000));
  const second = Math.floor((milliseconds % (60 * 1000)) / 1000);
  const fraction = Math.floor(milliseconds % 1000);
  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}.${String(fraction).padStart(3, "0")}`;
}

let start = () => {
  console.log("start");

  if (intervalHandle !== null)
    return;

  startTime = new Date();

  intervalHandle = setInterval(() => {
    console.log("interval");
    const currentTime = new Date();
    const intervalText = getIntervalString(startTime, currentTime);

    outputLabel.innerText = intervalText;
  }, 100);

  startButton.disabled = true;
  resetButton.disabled = false;

  // startButton.style.backgroundColor = "#00ff00";
  // resetButton.style.backgroundColor = "#00ff00";
  document. getElementById("output"). style. display = "none"; //hide.

};

let reset = () => {
  console.log("reset");


  if (intervalHandle === null)
    return;

  clearInterval(intervalHandle);

  intervalHandle = null;

  startButton.disabled = false;
  resetButton.disabled = true;

  // startButton.style.backgroundColor = "#ff0000";
  // resetButton.style.backgroundColor = "#ff0000";
  document. getElementById("output"). style. display = "block"; //show.

}

reset();

outputLabel.innerText = getIntervalString(startTime, startTime);