// 백준 2908

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

let a = Number(input[0].split("").reverse().join(""));
let b = Number(input[1].split("").reverse().join(""));

(a > b) ? console.log(a) : console.log(b);