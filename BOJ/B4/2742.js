const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString();


let answer  = "";

for (var i = Number(input); i > 0; i--) {
    answer += i + "\n";
}
//출력을 하나하나 해주면 시간 초과가 난다...
// 문자열에 결괏값과 \n 문자를 넣어 마지막에 출력 해줘야 한다.

console.log(answer);