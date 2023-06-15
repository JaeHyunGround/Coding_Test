// 백준 10869

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

console.log(input[0] + input[1]);
console.log(input[0] - input[1]);
console.log(input[0] * input[1]);
console.log(parseInt(input[0] / input[1])); // 몫을 구하기 위해선 parseInt로 실수화 하자
console.log(input[0] % input[1]);