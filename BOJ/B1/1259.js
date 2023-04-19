const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.pop(); // 맨 뒤 0 제거
let case_num = input.length;
let case_word = "";  // case는 예약어
let case_word_reverse = "";

for (var i = 0; i < case_num; i++) {
    let state = true;

    case_word = input[i].toString().trim().split("");
    case_word_reverse = input[i].toString().trim().split("").reverse();
    
    for (var j = 0; j < case_word.length; j++) {
        if(case_word[j] !== case_word_reverse [j]) {
            state = false;
            break;
        }
    }

    if(state) {
        console.log("yes");
    } else {
        console.log("no");
    }
}