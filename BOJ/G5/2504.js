const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [strings] = input;

function solution(strings) {
  const string = strings.split("");
  const stack = [];

  if (!checkPossiable(string)) {
    return 0;
  }

  for (let i = 0; i < string.length; i++) {
    let top = stack[stack.length - 1];
    const cur = string[i];

    if (cur === "(" || cur === "[") {
      stack.push(cur);
    } else if (cur === ")" || cur === "]") {
      const reverse = cur === ")" ? "(" : "[";
      const point = reverse === "(" ? 2 : 3;

      if (top === reverse) {
        stack.pop();
        stack.push(point);
      } else {
        let temp = 0;
        while (1) {
          const pop = stack.pop();
          if (typeof pop === "number") {
            temp += pop;
          } else if (pop === reverse) {
            stack.push(temp * point);
            break;
          }
        }
      }
    }
  }

  return stack.reduce((acc, cur) => acc + cur);
}

// 올바른 괄호열인지 체크
function checkPossiable(string) {
  const stack = [];
  let temp = "";

  // 중간에 멈추는 등 기대하는 결과를 얻기 위해서는 그냥 for문을 사용하자.
  // string.forEach((item) => {
  //   if (item === "(") stack.push("(");
  //   else if (item === "[") stack.push("[");
  //   else if (item === ")") {
  //     temp = stack.pop();
  //     if (temp !== "(") return false;
  //   } else if (item === "]") {
  //     temp = stack.pop();
  //     if (temp !== "[") return false;
  //   }
  // });

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") stack.push("(");
    else if (string[i] === "[") stack.push("[");
    else if (string[i] === ")") {
      temp = stack.pop();
      if (temp !== "(") return false;
    } else if (string[i] === "]") {
      temp = stack.pop();
      if (temp !== "[") return false;
    }
  }

  return stack.length ? false : true;
}

const answer = solution(strings);
console.log(answer);
