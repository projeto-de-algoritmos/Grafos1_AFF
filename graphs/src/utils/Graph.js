import Node from "./Node";
export default class Graph {
  constructor(column, row) {
    this.nodes = new Map();
    this.column = column;
    this.row = row;
    this.neighbor = new Map();
    this.total = 0;
  }
  timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  addNode() {
    let nodePhrase = "";
    for (let i = 0; i < this.column; i++) {
      for (let j = 0; j < this.row; j++)
        nodePhrase += i.toString() + "," + j.toString() + " ";
    }
    nodePhrase = nodePhrase.split(" ");
    nodePhrase.map((node) => this.nodes.set(node, new Node(node)));
  }

  addNeighbor() {
    for (let i = 0; i < this.column; i++)
      for (let j = 0; j < this.row; j++) {
        let neighbor = [];
        if (j < this.column - 1) neighbor.push(`${i},${j + 1}`);
        if (j > 0) neighbor.push(`${i},${j - 1}`);
        if (i > 0) neighbor.push(`${i - 1},${j}`);
        if (i < this.row - 1) neighbor.push(`${i + 1},${j}`);
        this.neighbor.set(`${i},${j}`, neighbor);
      }
  }

  async bfs(start, color) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    if (!this.nodes.get(start).isSelected) {
      this.nodes.get(start).setColor(color);
      this.nodes.get(start).isSelected = true;
    }

    while (queue.length > 0) {
      const edges = queue.shift();
      const neighbors = this.neighbor.get(edges);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor) && !this.nodes.get(neighbor).isSelected) {
          await this.timeout(300);
          visited.add(neighbor);
          if (this.nodes.get(neighbor).setColor(color)) {
            this.nodes.get(neighbor).isSelected = true;
            queue.push(neighbor);
          }
        }
      }
    }
  }

  async dfsR(start, color, visited = new Set()) {
    visited.add(start);
    await this.timeout(300);
    if (!this.nodes.get(start).isSelected) {
      this.nodes.get(start).isSelected = true;
      this.nodes.get(start).setColor(color);
    }
    const neighbors = this.neighbor.get(start);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor) && !this.nodes.get(neighbor).isSelected) {
        this.nodes.get(neighbor).isSelected = true;
        if (this.nodes.get(neighbor).setColor(color)) 
          await this.dfsR(neighbor, color, visited);
      }
    }
  }
}
