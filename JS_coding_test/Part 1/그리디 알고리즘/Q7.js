// 백준 1946

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = Number(input[0]);
let line = 1;

for (let tc = 0; tc < testCase; tc++) {
  let n = Number(input[line]);
  let arr = [];
  for (let i = line + 1; i <= line + n; i++) {
    let data = input[i].split(" ").map(Number);
    arr.push(data);
  }
  arr.sort((x, y) => x[0] - y[0]);
  let count = 0;
  let minValue = 100001;

  for ([x, y] of arr) {
    if (y < minValue) {
      minValue = y;
      count++;
    }
  }
  console.log(count);
  line = line + n + 1;
}
