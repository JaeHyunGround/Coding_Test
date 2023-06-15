// 백준 2884

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().split(" ").map(Number);

let hour = input[0];
let min = input[1];

let answer = [];

if(min < 45) {

    // 다른 방법
    // hour -= 1;
    // min += 15;
    // min += 15 하면 되더라.... 60에서 남은 시간을 뺴는 건 2번 연산. 15분 더하는 건 1번 연산
    // if (hour <0) hour = 23;

    let left_min = 45 - min;
    if(hour == 0) {
        answer.push(23, (60 - left_min));
    } else {
        answer.push((hour - 1), (60 - left_min));
    }
} else {
    answer.push(hour, (min - 45));
}

console.log(answer.join(" "));

// 핵심 아이디아
// 1. 현재 시각이 주어졌을 때 45분을 감소시킨다.
// 2. 0분보다 작아지면 시가 1 감소한다
// 3. 0시보다 작아지면 23시가 된다