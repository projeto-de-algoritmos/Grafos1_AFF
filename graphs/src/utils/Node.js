export default class Node {
  constructor(position) {
    this.position = position;
    this.color = null;
    this.isSelected = false;
  }
  setColor(color) {
    if(this.color===null){
      console.log(this.position);
      this.color = color;
      const myDiv = document.getElementById('t'+this.position);
      myDiv.style.backgroundColor = color;
      return true;
    }
    return false;
  }
  getColor() {
    return this.color;
  }
}
