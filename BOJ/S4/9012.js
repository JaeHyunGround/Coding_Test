const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = input.shift();
let answer = [];

input.forEach((line) => {
  const stack = [];

  for (let i = 0; i < line.length; i++) {
    if (line[i] === "(") stack.push("(");
    else if (line[i] === ")") {
      let temp = stack.pop();
      if (temp !== "(") {
        answer.push("NO");
        return; // forEach에서 return은 continue처럼 동작한다. forEach를 끝내고 다음 line으로 넘어가게 해줌
      }
    }
  }
  stack.length === 0 ? answer.push("YES") : answer.push("NO");
});

// console.log(answer.join("\n"));
