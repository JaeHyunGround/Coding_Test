const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift(); // 맨 앞 케이스 갯수 제거
let newInput = [...new Set(input)];

let answer = newInput.sort((a, b) => {
  // 길이 오름차순
  if (a.length !== b.length) return a.length - b.length; // 숫자 오름차순 정렬
  else {
    // 길이가 같은 경우 사전순
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
    // 문자열 오름차순 정렬
  }
});

console.log(answer.join("\n"));
