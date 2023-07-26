// 백준 10814

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : "JS_coding_test/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift(); // case 갯수 제거
let arr = []; // case들을 담을 배열

// 데이터가 나이, 이름 2가지 이므로 나이순 정렬을 위해 객체화 시켜준다.
// or 2차원 배열을 사용할 수 있다.
for (let i = 0; i < input.length; i++) {
  let one_case = input[i].split(" ");
  let cases = {};

  cases.age = one_case[0];
  cases.name = one_case[1];

  arr.push(cases);

  //   let age = Number(input[i].split(" ")[0]);
  //   let name = input[i].split(" ")[1];
  //   arr.push([age, name]);
}

// 나이 순 정렬 but 나이가 같다면 가입한 순서대로
// 나이가 같지 않은 때만 고려하여 정렬해준다.
// why ? 나이가 같을 땐 이미 가입한 순서대로 정렬이 되어있기 때문 !!
arr.sort(function (a, b) {
  if (a.age !== b.age) return a.age - b.age;
});

let answer = []; // 정답을 담을 배열
for (let j = 0; j < arr.length; j++) {
  answer.push(`${arr[j].age} ${arr[j].name}`);
}

console.log(answer.join("\n"));

// let answer = "";
// for (let x of arr) answer += x[0] + " " + x[1] + "\n";
// console.log(answer)
