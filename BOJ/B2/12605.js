const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const answerArr = [];
  const cases = Number(input[0]);

  for (let i = 1; i <= cases; i++) {
    answerArr.push(`Case #${i}: ${input[i].split(" ").reverse().join(" ")}`);
  }

  return answerArr.join("\n");
}

console.log(solution(input));
