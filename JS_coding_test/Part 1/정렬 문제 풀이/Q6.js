// 백준 11651

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift(); // 점의 갯수를 나타내는 수 제거

let arr = [];
for (let i = 0; i < input.length; i++) {
    let cases = {};
    let num = input[i].toString().trim().split(" ").map(Number);
    cases['x'] = num[0];
    cases['y'] = num[1];
    arr.push(cases);
}

let answer_arr = arr.sort(function(a, b) {
    if (a.y == b.y) {
        return a.x - b.x; // y 좌표가 같을 땐 x 좌표 오름차순
    } else {
        return a.y - b.y; // y 좌표를 기준으로 오름차순
    }
});

let answer = [];
for (let j = 0; j < answer_arr.length; j++) {
    answer.push(`${answer_arr[j].x} ${answer_arr[j].y}`);
}
console.log(answer.join('\n'));