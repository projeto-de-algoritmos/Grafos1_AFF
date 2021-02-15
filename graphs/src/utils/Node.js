export default class Node {
    constructor(position) {
        this.position = position;
        this.isSelected = false;
        this.selectedColor = null;
    }
    addNeighbor(){
        this.neighbor.set(this.position, []);
    }
}