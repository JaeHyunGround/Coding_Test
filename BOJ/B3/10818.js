const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const test_case = Number(input[0]);
let nums = input[1].toString().split(" ");

// 최댓값, 최솟값의 초가값 설정
let max_num = Number(nums[0]);
let min_num = Number(nums[0]);

let answer = [];

// 최댓값, 최솟값 구하기
for (var i = 1; i < nums.length; i++) {
    if (Number(nums[i]) > max_num) {
        max_num = nums[i];
    }
    if (Number(nums[i]) < min_num) {
        min_num = nums[i];
    }
}

answer.push(min_num, max_num);
console.log(answer.join(" "));