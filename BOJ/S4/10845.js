const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "BOJ/input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  push(value) {
    this.queue[this.rear++] = value;
  }

  pop() {
    if (this.front === this.rear) {
      return -1;
    } else {
      const value = this.queue[this.front];
      delete this.queue[this.front];
      this.front++;
      return value;
    }
  }

  size() {
    return this.rear - this.front;
  }

  empty() {
    if (this.rear === this.front) {
      return 1;
    } else {
      return 0;
    }
  }

  queueFront() {
    if (this.front === this.rear) {
      return -1;
    } else {
      return this.queue[this.front];
    }
  }

  queueBack() {
    if (this.front === this.rear) {
      return -1;
    } else {
      return this.queue[this.queue.length - 1];
    }
  }
}

const queue = new Queue();
const answer = [];

input.forEach((line) => {
  let cases = line.split(" ");
  switch (cases[0]) {
    case "push":
      queue.push(cases[1]);
      break;
    case "pop":
      answer.push(queue.pop());
      break;
    case "size":
      answer.push(queue.size());
      break;
    case "empty":
      answer.push(queue.empty());
      break;
    case "front":
      answer.push(queue.queueFront());
      break;
    case "back":
      answer.push(queue.queueBack());
      break;
  }
});

console.log(answer.join("\n"));
