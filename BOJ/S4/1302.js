const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// input.shift();
// input.sort();

// let myObj = {};

// input.forEach((book) => {
//   if (myObj[book]) myObj[book]++;
//   else myObj[book] = 1;
// });

// let max = Math.max(...Object.values(myObj));

// console.log(Object.keys(myObj).find((key) => myObj[key] === max));
// // find 메서드는 처음 찾은 것을 반환

function solution(inputArray) {
  inputArray.shift();
  inputArray.sort();

  let myObj = {};

  inputArray.forEach((book) => {
    if (myObj[book]) myObj[book]++;
    else myObj[book] = 1;
  });

  let max = Math.max(...Object.values(myObj));

  return Object.keys(myObj).find((key) => myObj[key] === max);
  // find 메서드는 처음 찾은 것을 반환
}

console.log(solution(input));
