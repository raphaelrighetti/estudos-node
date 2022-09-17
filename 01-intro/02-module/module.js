const fs = require('fs');

fs.readFile('./vaitomarnocu.txt', 'utf-8', (err, data) => {
  if(err) {
    throw err;
  }

  console.log(data);
})