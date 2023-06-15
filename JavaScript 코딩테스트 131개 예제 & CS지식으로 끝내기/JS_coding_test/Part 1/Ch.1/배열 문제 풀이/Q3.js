// 백준 3052

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

// Set 집합 객체로 만든 후 스프레드 연산을 통해 배열로 변환시키기
let div_nums_obj = new Set(input.map((item) => item % 42));
let div_nums_arr = [...div_nums_obj]

console.log(div_nums_arr.length);
// 또는 console.log(div_nums_obj.size);