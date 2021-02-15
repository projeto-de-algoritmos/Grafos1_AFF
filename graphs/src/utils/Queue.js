export default class Queue {
  constructor() {
    this.queue = [];
  }
  length() {
    return this.queue.length;
  }
  dequeue() {
    return this.queue.shift();
  }
  enqueue(value) {
    this.queue.push(value);
  }
}
