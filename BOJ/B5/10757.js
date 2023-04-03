const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

const num1 = BigInt(input[0]);
const num2 = BigInt(input[1]);

let sum = (num1 + num2).toString(); // 맨 뒤에 n을 없애주기 위해

// 큰 수의 연산 ? => BigInt로 받은 후 연산 결과를 toString()로 바꾼다 !!

console.log(sum);