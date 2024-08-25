const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
})

console.log("Hello ....")

fs.appendFile(path.join(__dirname, 'files', 'test.txt'),'Test text', (err) => {
    if (err) throw err;
    console.log("Write complete.");
})

process.on('uncaughtException', err => {
    console.error(`There was  an uncaught error: ${err}`);
    process.exit(1);
})

fs.open(path.join(__dirname,'files','starter.txt'), 'a', function (err, file) {
  if (err) throw err;
  fs.writeFile(path.join(__dirname, 'files', 'starter.txt'), 'New content!', function (err) {
    if (err) throw err;    
  });
  console.log('Saved!');
});