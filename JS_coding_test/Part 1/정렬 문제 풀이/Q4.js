// 백준 11004

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].toString().trim().split(" ").map(Number); // n : 숫자 갯수, k : 찾아야 할 위치
let nums = input[1].toString().trim().split(" ").map(Number); // 정렬 해야 할 숫자

nums.sort((a, b) => a - b); // 오름차순 정렬

console.log(nums[k - 1]);
