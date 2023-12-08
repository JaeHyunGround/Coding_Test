// 1번 풀이
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [S, N, F, M] = fs.readFileSync(filePath).toString().trim().split("\n");

// S : 상근이가 가지고 있는 카드의 수
// N : 상근이 카드 종류
// F : 상근이가 가지고 있는지 확인해야하는 카드 수
// M : 확인해야 하는 카드 종류

function solution(N, M) {
  const newN = N.split(" ")
    .map(Number)
    .sort((a, b) => a - b); // 오름차순 정렬

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

  const answer = M.split(" ").map((num) => binarySearch(newN, Number(num)));

  return answer.join(" ");
}

console.log(solution(N, M));

// 2번 풀이
// const fs = require("fs");
// const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("\n");

// let [N, S, M, F] = input.map((v) => v.split(" ").map(Number));
// S.sort((a, b) => a - b);

// function binarySearch(array, findValue) {
//   let left = 0;
//   let right = array.length - 1;
//   let mid = Math.floor((left + right) / 2);

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

// const result = F.map((num) => binarySearch(S, num));
// console.log(result.join(" "));
