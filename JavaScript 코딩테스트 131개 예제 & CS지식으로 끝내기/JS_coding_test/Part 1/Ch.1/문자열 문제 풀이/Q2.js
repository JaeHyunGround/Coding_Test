// 백준 2675

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const test_case = input[0];

for (var i = 1; i <= test_case; i++) {
    let cases = input[i].trim().split(" ");
    let repeat = cases[0];
    let word = cases[1].trim().split("");

    let answer = ""

    for (var j = 0; j < word.length; j++) {
        for(var k = 0; k < repeat; k++) {
            answer += word[j];
        }
    }

    console.log(answer);
}