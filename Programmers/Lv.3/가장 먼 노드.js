// 핵심 키워드 : "노드", "간선", "최단 경로"
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}

function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);

  // 양방향 간선이기 때문
  for ([src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1; // 1번 노드 -> 1번 노드 길이는 1이기 때문

  // 각 정점의 거리를 구해야하기 떄문에 너비 우선 탐색인 BFS 구현 (간선 순회)
  // BFS는 큐를 이용하여 구할 수 있다.
  const queue = new Queue();
  queue.enqueue(1);
  while (!queue.isEmpty()) {
    const src = queue.dequeue();
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }

  const max = Math.max(...distance);
  return distance.filter((item) => item === max).length;
}
