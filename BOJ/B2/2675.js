const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let tese_case = Number(input[0]); // 테스트 케이스 수
let each_case = []; // 각각의 케이스
let each_case_char = []; // 각 케이스의 문자를 담기 위함.
let repeat_num = 0; // 문자 반복 횟수

for (var i = 1; i <= tese_case; i++) {
    let answer = [];
    each_case = input[i].toString().split(" ");
    repeat_num = Number(each_case[0]);
    each_case_char = each_case[1].toString().split("");

    for (var j = 0; j < each_case_char.length; j++) {
        for (var k = 0; k < repeat_num; k++) {
            answer.push(each_case_char[j]);
        }
    }
    console.log(answer.join(""));
}