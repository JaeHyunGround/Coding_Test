const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let basket = Array.from(
  { length: input[0].split(" ").map(Number)[0] },
  (_, i) => i + 1 // 1부터 N까지 자연수를 나열한 배열 생성 (규칙적인 수 나열)
);

for (let i = 1; i <= input[0].split(" ").map(Number)[1]; i++) {
  let count = 0; // 역순으로 나열한 바구니를 원래 바구니 배열에 넣기 위해 선언
  let cases = input[i].split(" ").map(Number); // 역순으로 바꾸는 경우를 하나씩 가져온다.

  let basket_reverse = basket.slice(cases[0] - 1, cases[1]).reverse(); // 경우에 따라 바구니 순서를 역순으로 나열한 것

  for (let j = cases[0] - 1; j < cases[1]; j++) {
    basket[j] = basket_reverse[count]; // count 변수를 사용하여 원래 바구니 배열 위치에 역순으로 나열한 바구니 순서를 순차적으로 넣을 수 있다.
    count++;
  }
}

console.log(basket.join(" "));

// 핵심 개념 : slice(), 규칙적인 수를 나열한 배열 생성
// 이 문제에서 slice(), 규칙적인 수를 나열한 배열 생성을 핵심 개념으로 사용했다.

// 규칙적인 수를 나열한 배열 생성 : 폼 자체를 외우자 !
// slice() : slice(x, y) => x이상 y미만의 인덱스 요소를 가져온다. 원본 배열은 바뀌지 않음.
