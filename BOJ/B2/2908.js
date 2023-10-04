const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

// 풀이 1
// let num1 = input[0].toString().split("").reverse();
// let num2 = input[1].toString().split("").reverse();

// if(Number(num1[0]) > Number(num2[0])) {
//     console.log(num1.join(""));
// } else if (Number(num1[0]) < Number(num2[0])) {
//     console.log(num2.join(""));
// } else {
//     if(Number(num1[1]) > Number(num2[1])) {
//         console.log(num1.join(""));
//     } else if (Number(num1[1]) < Number(num2[1])) {
//         console.log(num2.join(""));
//     } else {
//         if(Number(num1[2]) > Number(num2[2])) {
//             console.log(num1.join(""));
//         } else if (Number(num1[2]) < Number(num2[2])) {
//             console.log(num2.join(""));
//         }
//     }
// }

// 풀이 2
// let num1 = input[0].toString().split("").reverse().join("");
// let num2 = input[1].toString().split("").reverse().join("");

// const answer = [num1, num2].sort((a, b) => a - b); // 오름차순 정렬
// console.log(answer[1]); // 큰 값은 인덱스 1번에 존재하니 answer[1] 출력

// 풀이 3
// map 함수로 중복되는 코드를 줄인다 !! - 스터디 개선점
// 기존 2개의 풀이느 input이 2개 이상이면 쓸 수가 없는 코드였다.
let answer = input
  .map((num) => num.toString().split("").reverse().join(""))
  .sort((a, b) => a - b);
console.log(answer[answer.length - 1]);
