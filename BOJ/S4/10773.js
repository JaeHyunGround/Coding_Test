const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input.shift(); // 첫 번째 줄 경우의 갯수를 알려주는 요소 제거
let stack = [];

input.forEach((item) => {
  if (item === 0) stack.pop();
  else stack.push(item);
});

console.log(stack.reduce((acc, cur) => acc + cur, 0));
// 빈 배열에서 초기값 없이 reduce()를 호출하면 오류가 발생
