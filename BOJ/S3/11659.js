const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const numArray = input.shift().split(" ").map(Number);
  const answer = [];

  let prefixSum = Array.from({ length: N + 1 }).fill(0);

  // 누적합 구하기
  for (let i = 0; i < N; i++) {
    prefixSum[i + 1] = prefixSum[i] + numArray[i];
  }

  for (let i = 0; i < input.length; i++) {
    let [start, end] = input[i].split(" ").map(Number);
    answer.push(prefixSum[end] - prefixSum[start - 1]);
  }

  return answer.join("\n");
}

console.log(solution(input));
