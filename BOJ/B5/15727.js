const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString();

const location = Number(input);

console.log(Math.ceil(input / 5));
// Math.ceil : 소수점 올림. 정수를 반환. 소수점이 생기면 무조건 올린다.