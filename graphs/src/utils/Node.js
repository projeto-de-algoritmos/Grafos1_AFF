export default class Node {
  constructor(position) {
    this.position = position;
    this.color = "rgb(126, 199, 241)";
    this.isSelected = false;
  }
  setColor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}
