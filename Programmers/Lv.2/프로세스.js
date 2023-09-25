// 큐는 shift() 사용 금지 !!!!!!!
// 큐를 배열로 구현했을 때 front, rear이 무한정 늘어나는 단점이 존재하긴 하지만 연결리스트로 구현하는 것보단 간단하다.
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // 큐에서 빼야할 것을 임의의 변수에 담아둔 후 delete. 그 후 임의의 변수에 담아둔 것을 return
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  // 큐의 맨 앞에있는 요소 반환 (front)
  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);

  let cnt = 0;

  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[cnt]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      cnt += 1;
      if (location === value[1]) {
        return cnt;
      }
    }
  }
}
