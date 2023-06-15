// 백준 11720

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let answer = 0;
let nums_arr = input[1].split("").map(Number);

for (var i = 0; i < input[0]; i++) {
    answer += nums_arr[i];
}

console.log(answer)