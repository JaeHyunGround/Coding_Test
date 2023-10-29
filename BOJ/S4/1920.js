const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, A, M, B] = input.map((v) => v.split(" ").map((x) => Number(x)));

A.sort((a, b) => a - b);

function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);

  // left와 right가 같아지면 탐색이 끝남
  while (left <= right) {
    if (array[mid] === findValue) {
      return 1;
    }

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return 0;
}

const result = B.map((num) => binarySearch(A, num));

console.log(result.join("\n"));

// forEach로 작성했을 때 시간 초과가 났다
// 최악의 경우 N, M  모두 100000개가 나오면 경우의 수를 모두 찾아야 하기 때문에 !

// 따라서 나온 해결안이 이진 탐색 방법
// 정렬되어 있는 배열을 가지고 범위를 절반씩 좁혀가며 경우의 수를 좁혀가는 것이다.
