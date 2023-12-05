const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const finish = input.shift(); // 완주한 인원

  const myMap = new Map();
  input.forEach((people) => {
    if (!myMap.has(people)) {
      myMap.set(people, 1);
    } else {
      myMap.delete(people);
    }
  });

  return [...myMap.keys()];
  // 반환되는 값은 객체 형태이고, 객체는 이터러블이기 때문에 스프레드 연산자 사용 가능
}

console.log(solution(input).join("\n"));
