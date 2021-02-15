import Node from "./Node";

export default class Graph {
  constructor(column, row) {
    this.nodes = [];
    this.column = column;
    this.row = row;
    this.neighbor = new Map();
  }

  addNode() {
    let nodePhrase = "";
    for (let i = 0; i < this.column; i++) {
      for (let j = 0; j < this.row; j++)
        nodePhrase += i.toString() +','+ j.toString() + " ";
    }
    nodePhrase = nodePhrase.split(" ");
    this.nodes = nodePhrase.map((node) => new Node(node));
    this.nodes.pop();
  }

  createEdges(){
    this.nodes.forEach(node => {
      const [column, row] = node.split(',');
    });
  }

  addNeighbor(){
    for(let i=0; i<this.column; i++)
      for(let j=0; j< this.row;j++){
        let neighbor = [];
        
        if(j < this.column - 1)
        neighbor.push(`${i},${(j+1)}`);
        
        if(j > 0)
        neighbor.push(`${i},${(j-1)}`);
        
        if(i > 0)
        neighbor.push(`${(i-1)},${(j)}`);
        
        if(i < this.row - 1)
        neighbor.push(`${(i+1)},${(j)}`);
        
        this.neighbor.set(`${i},${j}`, neighbor);
      }
      console.log(this.neighbor);
  }
  // isValid(row, column, length, color) {
  //   if (row < 0 || column < 0) return false;
  //   if (row > length || column > length) return false;
  //   if (this.fields[column][row].isSelected) return false;
  //   return true;
  // }

  // bfs() {}

  // dfs;
}
