const displayMessage = require("./0-console");

displayMessage("Welcome to Holberton School, what is your name?");
process.stdin.on("readable", function () {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write("Your name is: " + chunk);
  }
});

process.stdin.on("end", function () {
  displayMessage("This important software is now closing");
});
