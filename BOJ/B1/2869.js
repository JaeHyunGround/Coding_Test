const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let [A, B, V] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 시간 초과된 코드
// 단순히 반복문만 돌리게 되면 시간 복잡도로 인해 시간 초과가 난다.
// let answer = 0;

// while (V > 0) {
//   V -= A;
//   answer++;

//   if (V > 0) {
//     V += B;
//   }
// }

// console.log(answer);

// 풀이 2
// 단순히 올라가야 할 높이 / 하루에 이동하는 거리 를 해주면 된다.
// 하지만 마지막 날에 미끄러지는 거리는 안 가도 되기 때문에 (정상을 도달한다면 멈추기 때문)
// 올라가야 할 높이 - 미끄러지는 거리 / 하루에 이동하는 거리 를 해주면 된다. 소수점이 나온다면 올림해준다.

console.log(Math.ceil((V - B) / (V - A)));
