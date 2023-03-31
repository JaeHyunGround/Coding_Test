const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let answer = [];

const [king, queen, look, bishop, knight, pawn] = [1, 1, 2, 2, 2, 8]; // 체스에 필요한 피스 갯수
let [D_king, D_queen, D_look, D_bishop, D_knight, D_pawn] = input; // 동혁이가 가지고 있는 체스 피스 갯수

answer.push(king - D_king, queen - D_queen, look - D_look, bishop - D_bishop, knight - D_knight, pawn - D_pawn);

console.log(answer.join(" "));

// join() : 배열의 모든 값들을 연결한 문자열을 리턴한다. 파라미터로 들어가는 것이 구분자 !!