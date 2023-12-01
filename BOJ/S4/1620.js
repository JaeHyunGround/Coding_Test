const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  let [N, M] = input[0].split(" ").map(Number);
  input.shift();

  const answer = [];

  const questCase = input.splice(N); // 맞춰야 하는 문제
  // input의 현재 상태 => 원본에서 맞춰야 하는 문제 경우가 빠진 나머지
  // splice는 원본 배열을 변경한다 !
  let myMap = new Map(); // 포켓몬 도감

  input.forEach((poketmon, index) => {
    myMap.set(poketmon, index + 1);
  });

  questCase.forEach((quest) => {
    if (myMap.has(quest)) {
      answer.push(myMap.get(quest));
    } else {
      answer.push(input[Number(quest) - 1]);
    }
  });

  return answer.join("\n");
}

console.log(solution(input));
