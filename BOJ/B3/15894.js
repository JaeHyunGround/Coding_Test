const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let n = Number(fs.readFileSync(filePath).toString());

console.log(n * 4);

// 규칙
// 1 -> 4
// 2 -> 8
// 3 -> 12
// => 주어진 n에 4를 곱하면 답이 나온다 !!
