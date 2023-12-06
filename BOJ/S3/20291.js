const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  const test_case = input.shift();

  const myMap = new Map();
  input.forEach((line) => {
    const fileExtension = line.split(".")[1].trim();

    if (!myMap.has(fileExtension)) {
      myMap.set(fileExtension, 1);
    } else {
      myMap.set(fileExtension, myMap.get(fileExtension) + 1);
    }
  });

  const answer = [...myMap.keys()]
    .sort()
    .map((item) => `${item} ${myMap.get(item)}`)
    .join("\n");

  return answer;
}

console.log(solution(input));
