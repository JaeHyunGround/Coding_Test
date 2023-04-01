const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

// Math.abs() : 주어진 숫자의 절댓값을 리턴한다.
console.log(Math.abs(input[0] - input[1]));