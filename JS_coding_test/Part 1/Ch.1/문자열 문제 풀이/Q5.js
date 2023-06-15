// 백준 1152

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split(" ");

if(input == "") {
    console.log(0)
} else {
    console.log(input.length)
}