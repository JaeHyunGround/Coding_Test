const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// 배열의 첫 번째 요소를 제거할 때 .shift()
input.shift();

const answer = input.sort((a, b) => {
    return a - b; // 오름차순 (b - a 는 내림차순)
})

for (var i = 0; i < answer.length; i++) {
    console.log(answer[i]);
}