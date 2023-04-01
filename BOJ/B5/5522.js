const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let sum = 0; // 카드게임 총합을 나타내는 변수

for (var i = 0; i < input.length; i++) {
    sum += Number(input[i]);
}

console.log(sum);