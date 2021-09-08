let intervalHandle = null;
let startTime = new Date();

const startButton = document.getElementById("start");
const startButtonImage = document.getElementById("start-button-image");
const stopButton = document.getElementById("stop");
const stopButtonImage = document.getElementById("stop-button-image");
const outputLabel = document.getElementById("output");

const getIntervalText = (startTime, endTime) => {
  const milliseconds = endTime - startTime;

  const hour = Math.floor(milliseconds / (3600 * 1000));
  const minute = Math.floor((milliseconds % (3600 * 1000)) / (60 * 1000));
  const second = Math.floor((milliseconds % (60 * 1000)) / 1000);
  const fraction = Math.floor(milliseconds % 1000);

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}.${String(fraction).padStart(3, "0")}`;
}

const updateTime = () => {
  const currentTime = new Date();
  outputLabel.innerText = getIntervalText(startTime, currentTime);
}

const start = () => {
  if (intervalHandle !== null)
    return;

  startTime = new Date();

  intervalHandle = setInterval(updateTime, 7); // 7, so that the last digit seems to increment randomly

  startButton.disabled = true;
  stopButton.disabled = false;

  startButtonImage.src = "images/icon-04.png";
  stopButtonImage.src = "images/icon-02.png";
  document. getElementById("output"). style. display = "none"; //hide.

};

const stop = () => {
  if (intervalHandle === null)
    return;

  clearInterval(intervalHandle);
  intervalHandle = null;

  updateTime(); // So that we have the most precise interval between Start and Stop

  startButton.disabled = false;
  stopButton.disabled = true;

  startButtonImage.src = "images/icon-01.png";
  stopButtonImage.src = "images/icon-03.png";
  document. getElementById("output"). style. display = "block"; //show.
}






    

