const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let NbyN_array = new Array(input.length);

// 주어진 input를 2차원 배열로 만들기.
input.forEach((line, i) => {
  NbyN_array[i] = line.split(" ").map(Number);
});

let max = NbyN_array[0][0]; // 최대값을 담을 변수 선언
let row = 0; // 행
let column = 0; // 열

NbyN_array.forEach((line, i) => {
  line.forEach((value, j) => {
    if (value >= max) {
      max = value;
      row = i + 1;
      column = j + 1;
    }
  });
});

console.log(`${max}\n${row} ${column}`);
