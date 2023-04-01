const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

if(input[0].length >= input[1].length) {
    console.log("go");
} else {
    console.log("no");
}
