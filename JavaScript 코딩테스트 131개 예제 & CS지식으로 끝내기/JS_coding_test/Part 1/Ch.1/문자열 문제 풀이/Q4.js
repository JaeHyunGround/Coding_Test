// 백준 1316

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let answer = 0;

for (let i = 1; i <= n; i++ ) {
    let data = input[i];
    if(check(data)) answer += 1;
}

console.log(answer)

// has 는 set 객체 메서드
function check(data) {
    let setData = new Set(data[0]);
    for (let i = 0; i < data.length - 1; i++) {
        if(data[i] != data[i + 1]) {
            if(setData.has(data[i + 1])) {
                return false;
            }
            else {
            setData.add(data[i + 1]);
            }
        }
    }
    return true;
}