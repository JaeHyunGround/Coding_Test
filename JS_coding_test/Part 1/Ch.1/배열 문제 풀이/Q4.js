// 백준 4344

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let case_num = input[0];

for(var i = 1; i <= case_num; i++) {

    let over_student_num = 0;

    let students_arr = input[i].split(" ").map(Number);
    let students_num = students_arr.shift(); // .shift() : 배열 맨 앞에 요소 꺼냄. 원본 배열 건드림
    let students_avg = students_arr.reduce((a, b) => a + b) / students_num;

    for (var j = 0; j < students_num; j++) {
        if(students_arr[j] > students_avg) {
            over_student_num++;
        }
    }
    // toFixed() = 인자로 들어가는 수의 자리 만큼 소수점 표시
    console.log(((over_student_num / students_num) * 100).toFixed(3) + "%");
}