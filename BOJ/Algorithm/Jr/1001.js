const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/Algorithm/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");


var answer = +(input[0] - input[1]);
console.log(answer);