import Node from "./Node";

export default class Graph {
  constructor(column, row) {
    this.nodes = [];
    this.column = column;
    this.row = row;
  }

  addNode() {
    let nodePhrase = "";
    for (let i = 0; i < this.column; i++) {
      for (let j = 0; j < this.row; j++)
        nodePhrase += i.toString() + j.toString() + " ";
    }
    nodePhrase = nodePhrase.split(" ");
    this.nodes = nodePhrase.map((node) => new Node(node));
    this.nodes.pop();
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
