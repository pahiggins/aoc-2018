const fs = require('fs');

function formatInput() {
  fs.readFile('./day4/input.txt', (err, input) => {
    if (err) throw err;

    const parsedInput = `${input}`.split('\n');
    const formattedInput = parsedInput.map(string => {
      const elements = string.split(' ');
      const date = [...elements[0]].slice(1).join('').split('-');
      const time = [...elements[1]].slice(0, -1).join('');
      const hours = time.split(':')[0];
      const mins = time.split(':')[1];

      if (elements.length === 6) {
        const guardId = elements[3];
        const state = `${elements[4]} ${elements[5]}`;
        return {
          year: date[0],
          month: date[1],
          day: date[2],
          hours,
          mins,
          guardId,
          state
        };
      } else if (elements.length === 4) {
        const state = `${elements[2]} ${elements[3]}`;
        return {
          year: date[0],
          month: date[1],
          day: date[2],
          hours,
          mins,
          guardId: 'Not specified',
          state
        };
      } else {
        return {};
      }
    });
  });
}



formatInput();