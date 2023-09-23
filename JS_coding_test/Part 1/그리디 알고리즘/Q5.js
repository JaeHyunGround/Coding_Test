// 백준 16953

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let start_num = Number(input[0]);
let target_num = Number(input[1]);
let count = 1;

while (start_num !== target_num) {
  let case_num = target_num.toString().trim().split("").map(Number);

  if (start_num < target_num && target_num % 2 === 0) {
    target_num = target_num / 2;
    count++;
  } else {
    if (case_num[case_num.length - 1] === 1) {
      case_num.pop();
      target_num = Number(case_num.join(""));
      count++;
    } else {
      count = -1;
      break;
    }
  }
}

console.log(count);

// 나의 아이디어
// 1. 조건이 [2를 곱한다], [1을 수의 가장 오른쪽에 추가한다] 이다.
// 2. 내가 생각한 건 마지막 수에서 2로 나누거나 1을 빼다보면 시작 숫자로 갈 수 있다는 점이다.
// 3. 2번째 테스트 케이스는 시작 숫자가 커지는 경우가 있기 때문에 조건에 start_num < target_num 을 걸어주면서 경우를 걸러냈다.
// 4. join()은 문자열로 합치는 것이기 때문에 Number로 형 변환 하지 않으면 13 "13" 이 다르다고 판별하며 while문을 한 번 더 돈다.
// 그래서 맞는 경우도 틀리는 경우로 판별되는 것이 있었다.
