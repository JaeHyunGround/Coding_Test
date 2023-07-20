// 백준 2751

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input.shift(); // 맨 앞 케이스 갯수를 나타내는 수를 제거하기 위함.
input.sort((a, b) => a - b); // 오름차순 정렬

console.log(input.join("\n"));

// js로 코테를 칠 경우, 출력하는 과정에서 하나하나 console.log를 찍는 것 보단 하나의 변수에 담아서 한 번만 찍어주는 게 시간 절약에 효과적
// 즉 출력할 땐 console.log() 를 한 번만 쓰도록 하자