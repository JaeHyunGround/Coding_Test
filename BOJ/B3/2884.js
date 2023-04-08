const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let hour = Number(input[0]);
let min = Number(input[1]);

let answer = [];

if(min < 45) {
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