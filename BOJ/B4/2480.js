const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number);

let set = new Set(input); // 중복 요소 제거
let new_dice = [...set];

let answer = 0;

if (new_dice.length === 1) {
  // 같은 눈 3개가 나오는 경우
  answer = 10000 + input[0] * 1000;
} else if (new_dice.length === 2) {
  // 같은 눈 2개가 나오는 경우
  if (input[0] === input[1]) answer = 1000 + input[0] * 100;
  else if (input[0] === input[2]) answer = 1000 + input[0] * 100;
  else answer = answer = 1000 + input[1] * 100;
} else {
  answer = Math.max(...input) * 100;
}

console.log(answer);
