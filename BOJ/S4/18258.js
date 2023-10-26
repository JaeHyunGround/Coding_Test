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

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    if (this.front === this.rear) {
      return -1;
    } else {
      const value = this.queue[this.front];
      delete this.queue[this.front];
      this.front += 1;
      return value;
    }
  }

  empty() {
    if (this.front === this.rear) {
      return 1;
    } else {
      return 0;
    }
  }

  size() {
    return this.rear - this.front;
  }

  isFront() {
    if (this.front !== this.rear) {
      return this.queue[this.front];
    } else {
      return -1;
    }
  }

  isBack() {
    if (this.front !== this.rear) {
      return this.queue[this.queue.length - 1];
    } else {
      return -1;
    }
  }
}

const queue = new Queue();
let answer = [];

input.forEach((input) => {
  let cases = input.split(" ");
  switch (cases[0]) {
    case "push":
      queue.enqueue(Number(cases[1]));
      break;
    case "pop":
      answer.push(queue.dequeue());
      break;
    case "size":
      answer.push(queue.size());
      break;
    case "empty":
      answer.push(queue.empty());
      break;
    case "front":
      answer.push(queue.isFront());
      break;
    case "back":
      answer.push(queue.isBack());
      break;
  }
});

console.log(answer.join("\n"));
