const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

// 두 수가 주어진다고 했기 때문에 2개의 변수를 선언함.
let numA = +input[0].split("").reverse().join("");
let numB = +input[1].split("").reverse().join("");

// 두 수가 같은 경우는 없기 때문에 두 수가 같은 경우는 고려하지 않음.
console.log(numA > numB ? numA : numB);
