// 백준 16953

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let start_num = Number(input[0]);
let target_num = Number(input[1]);
let count = 1;

while (start_num !== target_num) {
  let case_num = target_num.toString().trim().split("").map(Number);

  if (start_num < target_num && target_num % 2 === 0) {
    target_num = target_num / 2;
    count++;
  } else {
    if (case_num[case_num.length - 1] === 1) {
      case_num.pop();
      target_num = Number(case_num.join(""));
      count++;
    } else {
      count = -1;
      break;
    }
  }
}

console.log(count);
