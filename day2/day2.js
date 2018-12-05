const fs = require('fs');

Array.prototype.diff = function(arr2) {
  return this.filter(x => arr2.includes(x));
}

// const x = 'ubkfmdjxyzlbgkrotcepvswaqx';
// const y = 'uikfmdkuyzlbgerotcepvswaqh';

// const commonChars = [...x].diff([...y]);

fs.readFile('./day2/input.txt', (err, input) => {
  if (err) throw err;

  const parsedInput = `${input}`.split('\n');
  let compareIndex = 0;
  const matches = [];

  for (let i = 0; i < parsedInput.length; i++) {
    let counter = 0;
    let a = parsedInput[compareIndex];

    for (let j = 0; j < parsedInput.length; j++) {
      let b = parsedInput[j];

      if (a[j] !== b[j]) {
        counter++;
      }
    }

    if (counter === 1) {
      matches.push(a);
      // matches.push(b);
    }

    compareIndex++;
  }

  console.log(matches);
});

// fs.readFile('./day2/input.txt', (err, input) => {
//   if (err) throw err;

//   const parsedInput = `${input}`.split('\n');
//   const sortedInput = parsedInput.map(string => [...string].sort().join());
//   const result = sortedInput.reduce((acc, string) => {
//     let twoCount = 0;
//     let threeCount = 0;
//     const occurancesTally = countOccurances(string);

//     for (let key in occurancesTally) {
//       twoCount = occurancesTally[key] === 2 ? twoCount + 1 : twoCount;
//       threeCount = occurancesTally[key] === 3 ? threeCount + 1 : threeCount;
//     }

//     acc[0] = twoCount > 0 ? acc[0] + 1 : acc[0];
//     acc[1] = threeCount > 0 ? acc[1] + 1 : acc[1];

//     return acc;
//   }, [0, 0]);

//   console.log(result);
// });

// function countOccurances(string) {
//   const count = {};
//   const stringArr = [...string];

//   for (let i = 0; i < stringArr.length; i++) {
//     if (!count[stringArr[i]]) {
//       count[stringArr[i]] = 1;
//     } else {
//       count[stringArr[i]] = count[stringArr[i]] + 1;
//     }
//   }

//   return count;
// }