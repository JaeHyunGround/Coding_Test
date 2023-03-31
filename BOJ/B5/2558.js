const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

var num1 = Number(input[0]);
var num2 = Number(input[1]);

console.log(num1 + num2);