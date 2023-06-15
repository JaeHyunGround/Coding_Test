// 백준 9498

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let test_score = input[0];

if(90 <= test_score && test_score <= 100) {
    console.log("A");
} else if (80 <= test_score && test_score <= 89) {
    console.log("B");
} else if (70 <= test_score && test_score <= 79) {
    console.log("C");
} else if (60 <= test_score && test_score <= 69) {
    console.log("D");
} else {
    console.log("F");
}