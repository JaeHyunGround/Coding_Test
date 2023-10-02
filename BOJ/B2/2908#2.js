const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

// 풀이 1
// 두 수가 주어진다고 했기 때문에 2개의 변수를 선언함.
// let numA = +input[0].split("").reverse().join("");
// let numB = +input[1].split("").reverse().join("");

// 두 수가 같은 경우는 없기 때문에 두 수가 같은 경우는 고려하지 않음.
// console.log(numA > numB ? numA : numB);

// 풀이 2
// 몇 개의 수가 들어오든 문제를 처리할 수 있도록 코드를 다시 짜봄.

let reverse_num = []; // 역순으로 읽은 수의 크기를 비교하기 위해 새로운 배열 생성

for (let x of input) {
  reverse_num.push(+x.split("").reverse().join(""));
}

// 오름차순으로 정렬하면 제일 큰 수는 항상 배열의 마지막 인덱스에 존재한다.
console.log(reverse_num.sort((a, b) => a - b)[reverse_num.length - 1]);
