const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim(" ");
// 문자열을 입력 받을 땐 .trim() 으로 받자 !
// trim() : 문자열 양 끝의 공백을 제거한 문자열을 반환해줌.

console.log(input + "??!");