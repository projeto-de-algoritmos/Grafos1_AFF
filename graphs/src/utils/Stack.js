export default class Stack {
  constructor() {
    this.stack = [];
  }
  length() {
    return this.stack.length;
  }
  removeFromTop() {
    return this.stack.pop();
  }
  stack(value) {
    this.stack.push(value);
  }
}
