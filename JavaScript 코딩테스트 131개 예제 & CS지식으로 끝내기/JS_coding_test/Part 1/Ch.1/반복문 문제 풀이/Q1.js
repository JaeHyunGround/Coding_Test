// 백준 8393

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let answer = 0;

for(var i = 1; i <= input; i++) {
    answer += i;
}

console.log(answer)


// 방법 2 : 등차수열의 합 공식 이용
// 첫 번째 항이 a, 마지막 항이 l 일 때 총 합은 N(a + l) / 2 (N은 항의 갯수)