const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim();

let words = input.toString().split(" ")

console.log(words[0] === "" ? 0: words.length);
// 빈 값에 들어오는 테스트 케이스를 생각 해야한다.
// 따라서 조건문으로 빈 값이 들어올 떄를 걸러줘야 한다.