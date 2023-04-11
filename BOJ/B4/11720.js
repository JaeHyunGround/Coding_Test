const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let cases = Number(input[0]);
let nums = input[1].toString().split("");
let answer = 0;

for (var i = 0; i < nums.length; i++) {
    answer += Number(nums[i]);
}

console.log(answer);