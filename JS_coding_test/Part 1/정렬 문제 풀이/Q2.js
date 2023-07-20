// 백준 2750

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input.shift(); // 제일 처음에 오는 수는 케이스 수이므로 제외시켜준다.
input.sort((a, b) => a - b);

for (var i = 0; i < input.length; i++) {
    console.log(input[i]);
}