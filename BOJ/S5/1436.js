const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let title = 666;

while (true) {
  if (title.toString().includes("666")) {
    input -= 1;
    if (input == 0) break;
  }

  title += 1;
}

console.log(title);
