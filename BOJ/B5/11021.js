const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const case_num = Number(input[0]);

for (var i = 0; i < case_num; i++) {
    let data = input[i+1].toString().split(" ");
    console.log("Case #" + (i+1) + ": " + (Number(data[0]) + Number(data[1])));
}