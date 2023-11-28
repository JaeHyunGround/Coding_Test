const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  input.shift();
  const answerArray = [];

  const mySet = new Set();
  input.forEach((line) => {
    if (!mySet.has(line)) {
      mySet.add(line);
    } else {
      answerArray.push(line);
    }
  });

  return answerArray;
}

const answer = solution(input);

console.log(answer.length);
console.log(answer.sort().join("\n"));
