const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// 최고 점수 뽑아서 map으로 새로운 배열을 만든 후 평균 계산해서 답을 출력하자 !!

let exam_num = Number(input[0]); // 시험 갯수
let exam_point = input[1].toString().split(" "); // 시험 점수
let max_point = Number(exam_point[0]); // 시험의 최고 점수 

//시험의 최고점 도출
for (var i = 1; i < exam_num; i++) {
    if(Number(exam_point[i]) > max_point) {
        max_point = Number(exam_point[i]);
    }
}

let new_exam_point = exam_point.map((point) => (point / max_point ) * 100);

// js .reduce() : 배열의 각 요소를 더해서 누적값을 도출해낸다.
const answer = new_exam_point.reduce((a, b) => a + b) / exam_num;
console.log(answer);
