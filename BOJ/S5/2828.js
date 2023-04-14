const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
// .trim()을 안해줘서 틀렸다......

let basket = Number(input[0].toString().split(" ")[1]);
let move = Number(0); // 움직인 횟수

let start = Number(1);
let end = basket;

for (var i = 2; i < input.length; i++) {
    if (Number(input[i]) < start || Number(input[i]) > end) {
        if(Number(input[i]) < start) {
            move += (start - Number(input[i]));
            end -= (start - Number(input[i]))
            start = Number(input[i]);
        } else if (Number(input[i]) > end) {
            move += (Number(input[i]) - end);
            start += (Number(input[i]) - end);
            end = Number(input[i]);
        }
    }
}

console.log(move);