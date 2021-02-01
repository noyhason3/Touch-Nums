var gNums;
var gCounter = 0;
var startTime = 0;
var isTimerOn = false;

function init() {
  renderLevels(7);
}

function renderLevels(levels) {
  var strHtml = '';
  for (var i = 0; i < levels; i++) {
    var cellsCount = (i + 3) ** 2;
    strHtml += `<button class="level" onclick="levelClicked(${cellsCount})">
    Level ${i + 1}--${cellsCount} cells</button>`;
  }

  var elLevels = document.querySelector('.levels');
  elLevels.innerHTML = strHtml;
}

function levelClicked(cellsCount) {
  gCounter = 0;
  gNums = getNums(cellsCount);
  gNums = shuffle(gNums);
  renderBoard(gNums, cellsCount);
}

function getNums(count) {
  var nums = [];
  for (var i = 0; i < count; i++) {
    nums.push(i + 1);
  }
  return nums;
}

function renderBoard(nums, cellsCount) {
  var length = Math.sqrt(nums.length);
  var strHtml = '';
  for (var i = 0; i < length; i++) {
    strHtml += '<tr>';
    for (var j = 0; j < length; j++) {
      var numToFill = nums.pop();

      strHtml += `<td onclick="cellClicked(this, ${cellsCount})">${numToFill}</td>`;
    }
    strHtml += '</tr>';
  }
  var elBoard = document.querySelector('.board');
  elBoard.innerHTML = strHtml;
}

function cellClicked(elCellClicked, cellsCount) {
  if (isRightCell(elCellClicked, gCounter)) {
    elCellClicked.classList.add('cell-right');
    gCounter++;
    if (gCounter===cellsCount) endTimer();
    closeModal();
  } else {
    elCellClicked.classList.add('cell-wrong')
    openModal();
  }
}

function isRightCell(cellClicked, prevCell) {
  if (+cellClicked.innerText === prevCell + 1) {
    if (+cellClicked.innerText === 1) startTimer();
    return true;
  }
  return false;
}

function openModal() {
  var modal = document.querySelector('.modal');
  modal.style.opacity = '1';
  setTimeout(closeModal, 5000);
}

function closeModal() {
  var modal = document.querySelector('.modal');
  modal.style.opacity = '0';
}

function shuffle(items) {
  var randIdx, keep, i;
  for (i = items.length - 1; i > 0; i--) {
    randIdx = getRandomInt(0, items.length - 1);

    keep = items[i];
    items[i] = items[randIdx];
    items[randIdx] = keep;
  }
  return items;
}









// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
// }
// function startTimer() {
//   isTimerOn = true;
//   startTime = Date.now();
//   timer();
// }
// function timer() {
//   var endTime = Date.now();
//   var diffTime = endTime - startTime;

//   var miliseconds = Math.floor(diffTime % 1000);
//   var minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((diffTime % (1000 * 60)) / 1000);

//   miliseconds = miliseconds < 10 ? '0' + miliseconds : miliseconds;
//   minutes = minutes < 10 ? '0' + minutes : minutes;
//   seconds = seconds < 10 ? '0' + seconds : seconds;

//   secondsForScore = Math.floor((diffTime /= 1000));

//   if (isTimerOn) {
//     window.setTimeout(timer, 1);

//     timeDisplay = document.querySelector('.timer').innerHTML =
//       minutes + ':' + seconds + ':' + miliseconds;
//     newScore = secondsForScore;
//   }
// }
// function endTimer() {
//   isTimerOn = false;
//   document.querySelector('.timer').innerHTML = 'your time is: ' + timeDisplay;
// }
