const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let circle = Array.from({ length: N }, (v, i) => i + 1);

let counter = 0;
let index = 0;
let target = 0;
const answer = [];

while (circle.length !== 0) {
  if (index > circle.length - 1) index = 0;
  if ((counter + 1) % K === 0) {
    target = circle.splice(circle.indexOf(circle[index]), 1)[0];
    answer.push(target);
    counter = 0;
  } else {
    counter++;
    index++;
  }
}

console.log(`<${answer.join(", ")}>`);
