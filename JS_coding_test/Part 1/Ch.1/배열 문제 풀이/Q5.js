// 백준 1546

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let test_num = input[0];
let test_point_arr = input[1].trim().split(" ").map(Number);

// 최고점
let max_point = test_point_arr.reduce((a, b) => Math.max(a, b));

let change_point_arr = test_point_arr.map((item) => (item / max_point) * 100)

console.log(change_point_arr.reduce((a, b) => a + b) / test_num)