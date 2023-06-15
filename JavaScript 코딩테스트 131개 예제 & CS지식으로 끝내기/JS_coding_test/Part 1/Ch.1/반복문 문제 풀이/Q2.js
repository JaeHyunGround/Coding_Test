// 백준 2739

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let answer = "";

for(var i = 1; i <= 9; i++) {
    answer += `${input} * ${i} = ${input * i}\n`;
}

console.log(answer.trim());