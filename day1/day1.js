const fs = require('fs');

function toSum(acc, cur) {
  return Number(acc) + Number(cur);
}

fs.readFile('./day1/input.txt', (err, input) => {
  if (err) throw err;

  const inputArr = `${input}`.split('\n');

  return inputArr.reduce(toSum, 0);
});