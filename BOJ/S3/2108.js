const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = [];

let sortInput = input.sort((a, b) => a - b);

let myMap = new Map();
sortInput.forEach((line) => {
  if (myMap.has(line)) {
    myMap.set(line, myMap.get(line) + 1);
  } else {
    myMap.set(line, 1);
  }
});

for (let i = 0; i < 4; i++) {
  switch (i) {
    case 0:
      let sum = 0;
      for (let i = 0; i < N; i++) {
        sum += input[i];
      }
      answer.push(Math.round(sum / N));
      break;
    case 1:
      answer.push(sortInput[Math.ceil(N / 2) - 1]);
      break;
    case 2:
      let maxValue = 0;
      let answerCase2 = [];
      myMap.forEach((value, key) => {
        if (maxValue < value) {
          maxValue = value;
          answerCase2 = [];
          answerCase2.push(key);
        } else if (maxValue === myMap.get(key)) {
          answerCase2.push(key);
        }
      });
      answerCase2.length === 1
        ? answer.push(answerCase2[0])
        : answer.push(answerCase2[1]);
      break;
    case 3:
      answer.push(Math.max(...input) - Math.min(...input));
      break;
  }
}

console.log(answer.join("\n"));
