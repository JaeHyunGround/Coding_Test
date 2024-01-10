const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

[n, distances, cities] = input;
n = +n;
distances = distances.split(" ").map((i) => BigInt(i));
cities = cities.split(" ").map((i) => BigInt(i));

function solution(n, distance, cities) {
  let answer = 0n;
  let nowOliPrice = cities[0];

  for (let i = 0; i < distances.length; i++) {
    answer += nowOliPrice * distances[i];

    if (nowOliPrice > cities[i + 1]) nowOliPrice = cities[i + 1];
  }

  return String(answer);
}

console.log(solution(n, distances, cities));
