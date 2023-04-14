const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

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

let num1 = input[0].toString().split("").reverse().join("");
let num2 = input[1].toString().split("").reverse().join("");

const answer = [num1, num2].sort(); // 오름차순 정렬
console.log(answer[1]); // 큰 값은 인덱스 1번에 존재하니 answer[1] 출력