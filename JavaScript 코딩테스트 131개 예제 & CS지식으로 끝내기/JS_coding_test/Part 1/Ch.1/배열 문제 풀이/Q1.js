// 백준 10818

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = [];
let nums = input[1].split(" ").map(Number);

let max_num = nums.reduce((a, b) => Math.max(a, b));
let min_num = nums.reduce((a, b) => Math.min(a, b));

// 출력 방법 1
console.log(min_num, max_num);


// 출력 방법 2
answer.push(min_num, max_num);
console.log(answer.join(" "));