const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift(); // 맨 앞 단어 갯수 제거

let set = new Set(input); // 중복값이 있는 배열을 Set 객체로 만들어서 중복을 제거한 후
let new_input = [...set]; // set 객체를 배열로 변환

// 1. 길이순으로 정렬 (오름차순 정렬)
new_input.sort((a, b) => {
    if(a.length > b.length) {
        return 1;
    } else if (a.length < b.length) {
        return -1;
    } else { // 길이가 같을 경우 사전 순 정렬
        if(a > b) {
            return 1;
        } else {
            return -1;
        }
    }
})

console.log(new_input.join("\n"))

// js에서 중복값 제거
// 1. new Set()로 중복 요소가 제거된 객체 생성
// 2. [...~~] 로 객체를 배열로 변환