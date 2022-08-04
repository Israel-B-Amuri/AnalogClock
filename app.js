setInterval(setClock, 1000);
const secondsHand = document.querySelector("[data-seconds-hand]");
const minutesHand = document.querySelector("[data-minutes-hand]");
const hourHand = document.querySelector("[data-hour-hand]");

function setClock() {
  // save the date method in a variable
  const currentDate = new Date();

  //creat time ratios
  const secondsRatio = currentDate.getSeconds() / 60;
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

  // call the set rotaion function on each hand
  setRotation(secondsHand, secondsRatio);
  setRotation(minutesHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

//set the rotation to the elements
function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotate", rotationRatio * 360);
}

setClock();
