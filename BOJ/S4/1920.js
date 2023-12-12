// 풀이 #2
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, A, M, X] = input.map((item) => item.split(" ").map(Number));

A.sort((a, b) => a - b);

function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (array[mid] === findValue) return 1;

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return 0;
}

const answer = X.map((x) => binarySearch(A, x));

console.log(answer.join("\n"));

// 풀이 #1
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const [N, A, M, B] = input.map((v) => v.split(" ").map((x) => Number(x)));

// A.sort((a, b) => a - b);

// function binarySearch(array, findValue) {
//   let left = 0;
//   let right = array.length - 1;
//   let mid = Math.floor((left + right) / 2);

//   // left와 right가 같아지면 탐색이 끝남
//   while (left <= right) {
//     if (array[mid] === findValue) {
//       return 1;
//     }

//     if (array[mid] < findValue) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }

//     mid = Math.floor((left + right) / 2);
//   }

//   return 0;
// }

// const result = B.map((num) => binarySearch(A, num));

// console.log(result.join("\n"));
