// 백준 1541

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let group = input.split("-");
let answer = 0;

for (let i = 0; i < group.length; i++) {
  let group_sum = group[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  if (i === 0) answer += group_sum;
  else answer -= group_sum;
}

console.log(answer);

// 문제 접근 방법
// 1. 식 안에 - 가 없는 경우, 따로 처리해줄 필요 x
// 2. -를 기준으로 최대한 많이 묶어주는 것이 좋다 (많은 수를 더해서 앞에 - 해주면
// 최소로 작은 값을 만들 수 있다.)
// 3. - 를 기준으로 그룹을 나눈 뒤, 그룹 내에선 다 더해주고 그룹끼리는 빼주면 된다.
// 왜냐, 우리는 -를 기준으로 그룹을 나눴기 때문 !!!
