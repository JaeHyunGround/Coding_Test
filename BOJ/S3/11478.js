const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split();

// 완전 탐색, 브루스 포스를 이용한 풀이

let string = input[0];
let answer_arr = [];

for (let i = 1; i <= string.length; i++) {
  for (let j = 0; j <= string.length - i; j++) {
    answer_arr.push(string.slice(j, j + i));
  }
}

console.log(new Set(answer_arr).size);
