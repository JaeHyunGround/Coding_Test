const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();
const stack = [];
const answer = [];

input.forEach((line) => {
  let cases = line.split(" ");

  switch (cases[0]) {
    case "push":
      stack.push(Number(cases[1]));
      break;
    case "pop":
      if (stack.length === 0) {
        answer.push(-1);
      } else {
        let temp = stack.pop();
        answer.push(temp);
      }
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      if (stack.length === 0) {
        answer.push(1);
      } else {
        answer.push(0);
      }
      break;
    case "top":
      if (stack.length === 0) {
        answer.push(-1);
      } else {
        answer.push(stack[stack.length - 1]);
      }
      break;
  }
});

console.log(answer.join("\n"));
