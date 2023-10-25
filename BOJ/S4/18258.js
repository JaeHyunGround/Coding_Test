const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// // pop, shift 등 배열로 구현하면 시간초과 난다 !!!!!

// input.shift(); // 제일 첫 번째 요소인 명령의 수 제거

// // 큐는 배열로 구현하면 좋진 않다. 하지만 이 문제에선 배열로 구현해본다.
// // 큐는 연결 리스트로 구현하는 것이 좋음

// let queue = [];
// let answer = [];

// const push = (queue, num) => {
//   queue.push(num);
// };

// const pop = (queue) => {
//   let temp = queue.shift();
//   if (temp) answer.push(temp);
//   else answer.push(-1);
// };

// const size = (queue) => {
//   answer.push(queue.length);
// };

// const empty = (queue) => {
//   if (queue.length === 0) answer.push(1);
//   else answer.push(0);
// };

// const front = (queue) => {
//   if (queue[0]) answer.push(queue[0]);
//   else answer.push(-1);
// };

// const back = (queue) => {
//   if (queue[queue.length - 1]) answer.push(queue[queue.length - 1]);
//   else answer.push(-1);
// };

// input.forEach((input) => {
//   let cases = input.split(" ");
//   switch (cases[0]) {
//     case "push":
//       push(queue, cases[1]);
//       break;
//     case "pop":
//       pop(queue);
//       break;
//     case "size":
//       size(queue);
//       break;
//     case "empty":
//       empty(queue);
//       break;
//     case "front":
//       front(queue);
//       break;
//     case "back":
//       back(queue);
//       break;
//   }
// });

// console.log(answer.join("\n"));
