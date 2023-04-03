const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let num1 = Number(input[0]);
let num2 = Number(input[1]);
let num3 = Number(input[2]);

console.log((num1 + num2) % num3);
console.log(((num1 % num3) + (num2 % num3)) % num3);
console.log((num1 * num2) % num3);
console.log(((num1 % num3) * (num2 % num3)) % num3);