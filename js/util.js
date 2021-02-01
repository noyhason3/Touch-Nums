function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function startTimer() {
  isTimerOn = true;
  startTime = Date.now();
  timer();
}
function timer() {
  var endTime = Date.now();
  var diffTime = endTime - startTime;

  var miliseconds = Math.floor(diffTime % 1000);
  var minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

  miliseconds = miliseconds < 10 ? '0' + miliseconds : miliseconds;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  if (isTimerOn) {
    window.setTimeout(timer, 1);

    timeDisplay = document.querySelector('.timer').innerHTML =
      minutes + ':' + seconds + ':' + miliseconds;
  }
}
function endTimer() {
  isTimerOn = false;
  document.querySelector('.timer').innerHTML = 'your time is: ' + timeDisplay;
}
