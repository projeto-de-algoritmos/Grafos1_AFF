export default class Node {
  constructor(position) {
    this.position = position;
    this.color = "rgb(126, 199, 241)";
    this.isSelected = false;
  }
  setColor(color) {
    if(this.color==="rgb(126, 199, 241)"){
      this.color = color;
      const myDiv = document.getElementById('t'+this.position);
      myDiv.style.backgroundColor = color;
    }
  }
  getColor() {
    return this.color;
  }
}
