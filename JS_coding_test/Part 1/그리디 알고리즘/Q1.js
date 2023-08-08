// 백준 11047

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let cases = input.shift(); // 첫 줄에 나와있는 데이터를 저장
let case_won = cases.toString().split(" ").map(Number)[1]; // 만들어야 하는 돈의 합

let answer = 0;
let money = input.map(Number).reverse();

while (case_won !== 0) {
  for (let i = 0; i < money.length; i++) {
    if (money[i] <= case_won) {
      answer += Math.floor(case_won / money[i]);
      case_won -= money[i] * Math.floor(case_won / money[i]);
    }
  }
}

console.log(answer);

// 주어진 돈의 관계가 배수 관계이므로, 큰 단위의 돈에서 부터 만들어야하는 값을 만들어가면 최소 갯수로 만들 수 있다.
// 가장 큰 화폐 단위부터 거슬러준다 !!
