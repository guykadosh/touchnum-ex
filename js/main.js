'use strict';

// Modal - global variables
var gMax, gNums, gCurrNum, gInterval, gBoardSize;

function init() {
  gMax = 16;
  resetGame();
}

function resetGame() {
  clearInterval(gInterval);

  // Reset modal
  gBoardSize = Math.sqrt(gMax);
  gNums = fillNums(gMax);
  gCurrNum = 1;

  // reset and render DOM
  var elTimer = document.querySelector('.timer');
  var elNextNum = document.querySelector('.next-number');
  elTimer.innerText = '00:00:00';
  elNextNum.innerText = '01';
  renderBoard();
}

function renderBoard() {
  var strHTML = '';

  for (var i = 0; i < gBoardSize; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < gBoardSize; j++) {
      shuffle(gNums);
      strHTML += `<td onclick="cellClicked(this)">${gNums.pop()}</td>`;
    }
    strHTML += '<tr/>';
  }

  var elNumsTable = document.querySelector('.nums-table');
  elNumsTable.innerHTML = strHTML;
}

function cellClicked(elNum) {
  // Run function only when right number is clicked
  if (+elNum.innerText !== gCurrNum) return;

  // start timer when 1 is clicked
  if (gCurrNum === 1) startTimer();

  // When last nmber stop timer and no next number.
  if (gCurrNum === gMax) {
    clearInterval(gInterval);
  } else {
    // Update Modal
    gCurrNum++;

    // Update DOM
    var elNextNum = document.querySelector('.next-number');
    elNextNum.innerText = gCurrNum.toString().padStart(2, '0');
  }

  elNum.classList.add('clicked');
}

function changeBoard(elInput) {
  if (gMax === +elInput.value) return;

  gMax = +elInput.value;
  resetGame();
}

function startTimer() {
  // Clear if there is previous interval
  clearInterval(gInterval);

  // Milliseconds modal
  var ms = 0;

  gInterval = setInterval(function () {
    // Update Modal
    ms += 59;

    // Update DOM
    var elTimer = document.querySelector('.timer');
    elTimer.innerText = convertMsToTime(ms);
  }, 59);
}
