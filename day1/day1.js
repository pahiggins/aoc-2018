const fs = require('fs');

function toSum(acc, cur) {
  return Number(acc) + Number(cur);
}

fs.readFile('./day1/input.txt', (err, input) => {
  if (err) throw err;

  const inputArr = `${input}`.split('\n');

  return inputArr.reduce(toSum, 0);
});

fs.readFile('./day1/input.txt', (err, input) => {
  if (err) throw err;

  const inputArr = `${input}`.split('\n');
  let prevSum = 0;
  let curSum = Number(inputArr[0]);

  inputArr.forEach(num => {
    curSum = prevSum + Number(num);

    

    prevSum = curSum;
  });
});

// +1, -1
// 0 1 0
// 0

// +3, +3, +4, -2, -4
// 0 3 6 10 8 4
// 10

// -6, +3, +8, +5, -6
// 0 -6 -3 5 10 4
// 5

// +7, +7, -2, -7, -4
// 0 7 14 12 5 1
// 14