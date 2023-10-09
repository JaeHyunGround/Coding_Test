const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = "";

input.forEach((test_case) => {
  let cases = test_case.split(" ").map(Number);
  if (cases[0] === 0 && cases[1] === 0) {
    console.log(answer.slice(0, answer.length - 1)); // 마지막 0 0 순서라면 문자열 끝에 있는 \n 제거
    return;
  } else {
    if (cases[0] % cases[1] === 0) answer += "multiple\n";
    else if (cases[1] % cases[0] === 0) answer += "factor\n";
    else answer += "neither\n";
  }
});
