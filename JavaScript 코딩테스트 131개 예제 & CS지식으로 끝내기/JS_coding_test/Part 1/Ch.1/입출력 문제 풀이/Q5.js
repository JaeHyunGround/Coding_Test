// 백준 2588

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

let num1 = input[0];
let num2 = input[1];

let mulNum = num2.toString().split("").map(Number);

let num3 = num1 * mulNum[2];
let num4 = num1 * mulNum[1];
let num5 = num1 * mulNum[0];

let num6 = num1 * num2;

console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);