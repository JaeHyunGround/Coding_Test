const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [N, S, M, F] = fs.readFileSync(filePath).toString().trim().split("\n");

const sortS = S.split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const myMap = new Map();
sortS.forEach((num) => {
  if (myMap.get(num)) myMap.set(num, myMap.get(num) + 1);
  else myMap.set(num, 1);
});

function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    if (array[mid] === findValue) return myMap.get(findValue);

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return 0;
}

const answer = F.split(" ").map((findNum) =>
  binarySearch(sortS, Number(findNum))
);

console.log(answer.join(" "));
