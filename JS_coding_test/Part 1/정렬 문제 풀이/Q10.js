// 백준 1427

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("").map(Number);

console.log(input.sort((a, b) => b - a).join(""));
