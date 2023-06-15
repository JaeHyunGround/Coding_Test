// 백준 15552

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let case_num = input[0]
let answer = "";

for (var i = 1; i <= case_num; i++) {
    let sum_num = input[i].split(" ").map(Number);
    answer += sum_num[0] + sum_num[1] + "\n";
}

console.log(answer);

// 빠른 출력 => 하나의 문자열 변수에 정보를 담은 뒤 한꺼번에 문자열을 출력