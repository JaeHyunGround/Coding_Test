const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(".");

input.pop(); // 온점을 기준으로 나눴을 때, 마지막 빈 요소를 제거하기 위함
input.pop(); // 마지막 종료 조건 온점 제거
let answer = [];

input.forEach((line) => {
  let parenthesesArray = [];
  let temp = "";
  for (let i = 0; i < line.length; i++) {
    if (line[i] === "(") parenthesesArray.push("(");
    else if (line[i] === "[") parenthesesArray.push("[");
    else if (line[i] === ")") {
      temp = parenthesesArray.pop();
      if (temp !== "(") {
        answer.push("no");
        return; // 해당 forEach를 끝내고 다음 조건으로 넘어가기 위함
      }
    } else if (line[i] === "]") {
      temp = parenthesesArray.pop();
      if (temp !== "[") {
        answer.push("no");
        return; // 해당 forEach를 끝내고 다음 조건으로 넘어가기 위함
      }
    }
  }

  if (parenthesesArray.length !== 0) {
    answer.push("no");
  } else {
    answer.push("yes");
  }
});

console.log(answer.join("\n"));
