const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(Number);

input.pop();

// 소수인지를 판별하는 함수
const isPrime = (num) => {
  if (num < 2) return false; // 1는 소수가 아니다.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // 2부터 자기 자신의 제곱근까지 판별해도 된다.
    if (num % i === 0) return false;
  }

  return true;
};

let answer = input
  .map((num) => {
    let count = 0;
    for (let i = num + 1; i <= num * 2; i++) {
      if (isPrime(i)) count++;
    }
    return count;
  })
  .join("\n");

console.log(answer);
