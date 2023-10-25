const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("");

// 올바른 괄호열인지 체크
function checkPossiable(string_array) {
  const stack = [];
  let temp = "";

  string_array.forEach((item) => {
    if (item === "(") stack.push("(");
    else if (item === "[") stack.push("[");
    else if (item === ")") {
      temp = stack.pop();
      if (temp !== "(") return false;
    } else if (item === "]") {
      temp = stack.pop();
      if (temp !== "[") return false;
    }
  });

  return stack.length === 0;
}

function solution(string_array) {
  if (!checkPossiable(string_array)) {
    return 0;
  }
}

solution(input);
