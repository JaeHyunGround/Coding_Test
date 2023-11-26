const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

function solution(input) {
  input.shift();

  const mySet = new Set();

  input.forEach((person) => {
    let [name, state] = person.split(" ");
    if (state === "enter") {
      mySet.add(name);
    } else {
      mySet.delete(name);
    }
  });

  return [...mySet].sort().reverse().join("\n");
}

console.log(solution(input));
