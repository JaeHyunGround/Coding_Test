// 백준 18870

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// let input_arr = input[1].toString().trim().split(" ");

// let arr = [...new Set(input_arr)]; // 중복 제거
// let sort_arr = arr.sort((a, b) => a - b);

// let answer = [];
// for (let i = 0; i < input_arr.length; i++) {
//     answer.push(sort_arr.indexOf(input_arr[i]));
// }

// console.log(answer.join(" "));

// 이 방법은 접근은 좋았으나 시간 초과...

// 구글링 결과 set과 Map(매핑)을 사용하는 것이 핵심 !!
let input_arr = input[1].toString().trim().split(" ").map(Number);

let arr = [...new Set(input_arr)]; // 중복 제거
arr.sort((a, b) => a - b);

let myMap = new Map(); // 매핑 Map 객체는 키-값 Map 객체에 값 삽입 : set, 값 가져오기 : get
for (let i = 0; i < arr.length; i++) {
    myMap.set(arr[i], i);
}

answer = "";
for(let x of input_arr) answer += myMap.get(x) + " ";

console.log(answer);