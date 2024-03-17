const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = input.shift();
const answer = [];

for (let i = 0; i < testCase * 3; i += 3) {
  let answerCount = 0;
  let sortA = input[i + 1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  let sortB = input[i + 2]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  sortA.forEach((a) => {
    for (let j = 0; j < sortB.length; j++) {
      if (a > sortB[j]) {
        answerCount += sortB.length - j;
        break;
      }
    }
  });

  answer.push(answerCount);
}

console.log(answer.join("\n"));
