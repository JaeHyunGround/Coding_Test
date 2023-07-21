// 백준 1181

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift(); // 점의 갯수를 나타내는 수 제거

// 중복 제거 : 집합자료형 Set 객체로 만들어 준 후 스프레드 연산자
let arr = [...new Set(input)];

let answer = arr.sort(function(a, b) {
    // if(a.length != b.length) return a.length - b.length;
    // else return a - b;
    // a - b는 숫자 정렬할 때 쓰는 거임 !!!

    if(a.length != b.length) return a.length - b.length;
    else {
        if (a < b) return -1; // 뒤에꺼가 크다면 -1
        else if(a > b) return 1; // 앞에가 크다면 1
        else return 0; // 나머진 0
    }
})

console.log(answer.join("\n"));