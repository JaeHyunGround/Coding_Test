const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = +input.shift();
const M = +input.shift();

const graph = [...Array(N + 1)].map(() => []);
const edges = input.map((line) => line.split(" ").map(Number));
edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const dfs = (startNode) => {
  const stack = [startNode]; // 탐색 해야 할 노드
  const visitedNodes = []; // 탐색을 마친 노드

  while (stack.length) {
    const node = stack.pop();
    if (!visitedNodes.includes(node)) {
      visitedNodes.push(node);
      stack.push(...graph[node]);
    }
  }

  return visitedNodes;
};

console.log(dfs(1).length - 1);
