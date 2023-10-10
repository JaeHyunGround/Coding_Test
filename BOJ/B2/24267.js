const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim();

const answer =
  (BigInt(input) * BigInt(input - 1) * BigInt(input - 2)) / BigInt(6);

console.log(`${answer}\n${3}`);
