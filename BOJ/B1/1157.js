const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().toLowerCase().split("");

// let answer = [];
// let setWord = new Set(input); // 사실 이걸 만들 필요는 없었다.
// let wordForObject = [...setWord]; // 사실 이걸 만들 필요는 없었다.

// 단어를 구성하고 있는 글자를 객체화
// let myMap = new Map();
// for (let i = 0; i < wordForObject.length; i++) {
//   myMap.set(wordForObject[i], 0);
// }

// 단어에서 사용된 글자수 카운트
// for (let j = 0; j < input.length; j++) {
//   let count = myMap.get(input[j]);
//   count += 1;
//   myMap.set(input[j], count);
// }

// ----------------------------------------------------------------------------------------

// for문 2개 돌리는 것을 하나로 줄일 수 있다..! (5 ~ 20을 줄인 것이 25 ~ 32)
let answer = [];
let myMap = new Map();

input.forEach((word) => {
  let count = myMap.get(word) || 0; // myMap에 아직 선언되지 않은 글자라면 count는 0
  myMap.set(word, count + 1); // Map은 중복된 키값이 정의되면 나중에 온 것이 덮어씌움
});

// ----------------------------------------------------------------------------------------

let maxCount = Math.max(...[...myMap.values()]); // Math.max(...array)

// 방법 1 = for문
// for (let k = 0; k < [...myMap.values()].length; k++) {
//   if ([...myMap.values()][k] === maxCount) answer.push([...setWord][k]);
// }

// 방법 2 - forEach
[...myMap.values()].forEach((count, index) => {
  if (count === maxCount) answer.push([...setWord][index]);
  index++;
});

console.log(answer.length === 1 ? answer[0].toUpperCase() : "?");
