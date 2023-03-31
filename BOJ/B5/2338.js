const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num1 = BigInt(input[0]);
let num2 = BigInt(input[1]);

console.log((num1 + num2).toString());
console.log((num1 - num2).toString());
console.log((num1 * num2).toString());

// 이 문제 또한 긴자리 계산 이므로 (1000 자리가 넘지 않는 큰 수)
// BigInt와 뒤에 n을 없애주기 위해 toString()를 사용 해 주었다.