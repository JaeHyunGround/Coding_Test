const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

// const [N, T] = input.shift().split(" ").map(Number);

// const times = new Array(1000).fill(0);

// input.forEach((item) => {
//   if (item.length === 1) return;
//   let [from, to] = item.split(" ").map(Number);
//   for (let i = from; i < to; i++) {
//     times[i] += 1;
//   }
// });

// let sum = 0;
// for (let i = 0; i < T; i++) {
//   sum += times[i];
// }

// let max_time = sum;
// let max_from = 0;
// let max_to = T;

// for (i = 1; i < times.length; i++) {
//   sum = sum - times[i - 1] + times[i + T - 1];
//   if (sum > max_time) {
//     max_time = sum;
//     max_from = i;
//     max_to = i + T;
//   }
// }

// console.log(max_from, max_to);

const [N, T] = input.shift().split(" ").map(Number);

const times = new Array(1000).fill(0);
input.forEach((item) => {
  if (item.length === 0) return;
  let [from, to] = item.split(" ").map(Number);
  for (let i = from; i < to; i++) {
    times[i] += 1;
  }
});

let sum = 0;
for (let i = 0; i < T; i++) {
  sum += times[i];
}

let max_sum = sum;
let max_from = 0;
let max_to = T;

for (let j = 1; j < times.length; j++) {
  sum = sum - times[j - 1] + times[j + T - 1];
  if (max_sum < sum) {
    max_sum = sum;
    max_from = j;
    max_to = j + T;
  }
}

console.log(max_from, max_to);
