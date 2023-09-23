// 백준

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let sugar = Number(input);
let err = -1;

let five = Math.floor(sugar / 5);

while (five >= 0) {
  let left = sugar - five * 5;
  if (left % 3 === 0) {
    err = Math.floor(left / 3) + five;
    break;
  } else {
    five--;
  }
}

console.log(err);
