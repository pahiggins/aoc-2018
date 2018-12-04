const fs = require('fs');

Array.prototype.diff = function(arr2) {
  return this.filter(x => arr2.includes(x));
}

// const x = 'ubkfmdjxyzlbgkrotcepvswaqx';
// const y = 'uikfmdkuyzlbgerotcepvswaqh';

// const commonChars = [...x].diff([...y]);

// console.log(x.length);
// console.log(y.length);
// console.log(commonChars.length);


fs.readFile('./day2/input.txt', (err, input) => {
  if (err) throw err;

  let compareIndex = 0;
  const matches = [];
  const parsedInput = `${input}`.split('\n');

  parsedInput.forEach(string => {
    let x = parsedInput[compareIndex];
    let y = string;
    console.log(x);
    console.log(y);
    const commonChars = [...x].diff([...y]);
    // console.log(commonChars.length);

    if (commonChars.length === 25) {
      matches.push(x);
      matches.push(y);
    }

    compareIndex++;
  });

  // console.log(matches);
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