// 백준 1789

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(num) {
  let sum = 0;
  let answer = 0;

  while (sum <= num) {
    answer += 1;
    sum += answer;
  }

  return answer - 1;
}

console.log(solution(input));
