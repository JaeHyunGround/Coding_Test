// 백준 11399

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const cases = input.shift(); // 제일 처음 주어지는 사람 경우 수를 뽑아놓음

// 돈을 인출하는데 필요한 시간을 오름차순 정렬함.
let times = input
  .toString()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let answer = 0;

for (let i = 0; i < times.length; i++) {
  for (let j = 0; j <= i; j++) {
    answer += times[j];
  }
}

console.log(answer);
