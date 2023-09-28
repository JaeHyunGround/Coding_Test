const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let total_price = Number(input[0]); // 맞춰야 하는 총합
let arr_price = 0; // 주어진 경우의 합

for (let i = 2; i < input.length; i++) {
  let price_case = input[i].toString().trim().split(" ").map(Number);

  arr_price += price_case[0] * price_case[1];
}

console.log(arr_price === total_price ? "Yes" : "No");
