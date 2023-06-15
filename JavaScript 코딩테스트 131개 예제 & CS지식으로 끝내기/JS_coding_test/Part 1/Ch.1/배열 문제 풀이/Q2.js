// 백준 2562

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let max_num = input.reduce((a, b) => Math.max(a, b));
let max_num_index = input.indexOf(max_num);

console.log(max_num + "\n" + (max_num_index + 1));