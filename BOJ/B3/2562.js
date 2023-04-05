const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let max_num = Number(input[0]); // 최댓값 (초기값은 배열의 1번째 인자로 잡는다.)
let max_num_index = 1; // 최댓값의 인덱스 번호 (초기값은 배열의 1번 인덱스로 잡는다.)

for (var i = 1; i < input.length; i++) {
    if(max_num < Number(input[i])) {
        max_num = Number(input[i]);
        max_num_index = i+1;
    }
}

console.log(max_num);
console.log(max_num_index);