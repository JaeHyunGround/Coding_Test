// 백준 2525

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 문제 접근 방법
// 1. 입력으로 주어진 시각을 "분" 형태로 바꿔라
// 2. 분이 주어졌을 때 시각을 알려주는 기능을 작성하기

let hour = input[0].toString().trim().split(" ").map(Number)[0];
let min = input[0].toString().trim().split(" ").map(Number)[1];
let make_time = Number(input[1]);

let answer_all_min = ((hour * 60) + min + make_time) % 1440; 
// 하루를 초과할 수 있기 때문에 1440으로 나눈 나머지를 구해준다
// 24시간 = 1440분

let answer_hour = parseInt(answer_all_min / 60);
let answer_min = answer_all_min % 60;

console.log(answer_hour + " " + answer_min);