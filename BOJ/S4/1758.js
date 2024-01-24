const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function solution(input) {
  const sortLine = input.sort((a, b) => b - a); // 팁을 많이 주는 순서대로 정렬
  let answer = 0;

  sortLine.forEach((line, index) => {
    if (line - index >= 0) {
      answer += line - index;
    }
  });

  return answer;
}

console.log(solution(input));
