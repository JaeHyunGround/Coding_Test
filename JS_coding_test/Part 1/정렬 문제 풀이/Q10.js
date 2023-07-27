// 백준 1427

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("").map(Number);

console.log(input.sort((a, b) => b - a).join(""));

// 각 자리수마다 숫자를 확인해서 그 빈도수를 센 다음, 숫자를 빈도수 만큼 출력한다 !!
// const fs = require("fs");
// const filePath =
//   process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
// let input = fs.readFileSync(filePath).toString().trim().split("n");

// let n = input[0]
// let cnt = Array(10).fill(0);

// for (let x of n) {
//     cnt[Number(x)]++;
// }

// let answer = "";
// for (let i = 9: i >= 0; i--) {
//     for(let j = 0; j < cnt[i]; j++) answer += i + ""
// }

// console.log(answer)
