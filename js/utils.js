'use strict';

// Fills numbers array from 1 to given Max
function fillNums(max) {
  const nums = [];
  for (var i = 0; i < max; i++) {
    nums.push(i + 1);
  }
  return nums;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// Shuffle items in array
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

// Padding '0' to a lonely digit.
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

// Convers milliseconds to a readable String
function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

  return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}:${(
    milliseconds % 1000
  )
    .toString()
    .substring(0, 3)}`;
}
