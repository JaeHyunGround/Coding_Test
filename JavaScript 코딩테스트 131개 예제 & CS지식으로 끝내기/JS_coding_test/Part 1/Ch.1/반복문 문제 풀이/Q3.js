// 백준 2438

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let answer = "";

for (var i = 1; i <= input; i++) {
    for (var j = 0; j < i; j++) {
        answer += "*"
    }
    answer += "\n"
}

console.log(answer)