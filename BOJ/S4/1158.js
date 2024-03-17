const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, K] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const circle = Array.from({ length: N }, (v, i) => i + 1);
// const circle = Array(N).fill().map((v, i) => i + 1);

const answer = [];
let count = 1;
let count_index = 0;

while (circle.length !== 0) {
  if (count_index === circle.length) count_index = 0;

  if (count === K) {
    answer.push(circle[count_index]);
    circle.splice(count_index, 1);
    count = 1;
  } else {
    count++;
    count_index++;
  }
}

console.log(`<${answer.join(", ")}>`);
