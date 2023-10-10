const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [a, b, c, d, e, f] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = [];

for (let x = -999; x <= 999; x++) {
  for (let y = -999; y <= 999; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      answer.push(x, y);
    }
  }
}

console.log(answer.join(" "));

// 문제는 단순히 경우의 수를 완전 탐색하면 풀리는 문제였다...
