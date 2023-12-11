const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, V] = input.shift().split(" ").map(Number);
const edges = input.map((v) => v.split(" ").map(Number)); // 간선들
const graph = [...Array(N + 1)].map(() => []);
edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const dfs = (startNode) => {
  const stack = [startNode];
  const visitedNodes = Array(N + 1).fill(false);
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    if (!visitedNodes[node]) {
      visitedNodes[node] = true;
      result.push(node);
      stack.push(...graph[node]);
    }
  }

  return result;
};

const bfs = (startNode) => {
  const queue = [startNode];
  const visitedNodes = Array(N + 1).fill(false);
  const result = [];

  while (queue.length) {
    const node = queue.shift();
    if (!visitedNodes[node]) {
      visitedNodes[node] = true;
      result.push(node);
      queue.push(...graph[node]);
    }
  }

  return result;
};

graph.forEach((v) => v.sort((a, b) => b - a));
console.log(dfs(V).join(" "));

graph.forEach((v) => v.sort((a, b) => a - b));
console.log(bfs(V).join(" "));
