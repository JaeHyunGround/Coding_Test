const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

let money = BigInt(input[0]); // 가진 돈
let member = BigInt(input[1]); // 돈 받으러 온 생명체
// 엄~~~~~~청난 부자이기 때문에 BigInt를 사용해야 한다.

let Nmoney = (money / member).toString(); // 생명체 하나에게 돌아가는 돈의 양
let left_money = (money % member).toString(); // 분배할 수 없는 남는 돈
// 뒤에 n을 제거하기 위해 toString 사용.

console.log(Nmoney);
console.log(left_money);