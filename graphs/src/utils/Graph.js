import Node from "./Node";

export default class Graph {
  constructor(column, row) {
    this.nodes = new Map();
    this.column = column;
    this.row = row;
    this.neighbor = new Map();
  }
   timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
}

  addNode() {
    let nodePhrase = "";
    for (let i = 0; i < this.column; i++) {
      for (let j = 0; j < this.row; j++)
        nodePhrase += i.toString() + "," + j.toString() + " ";
    }
    nodePhrase = nodePhrase.split(" ");
    nodePhrase.map((node) => this.nodes.set(node, new Node(node)));
    // console.log(this.nodes);
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
      console.log(this.neighbor);
  }

  async bfs(start) {
    const visited = new Set();
    const queue = [start];
    visited.add(start);
    this.nodes.get(start)?.setColor("#ff0");
    const myDiv = document.getElementById('t'+this.nodes.get(start).position);
    myDiv.style.backgroundColor = "#ff0";

    while (queue.length > 0) {
      const edges = queue.shift();
      const neighbors = this.neighbor.get(edges);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          await this.timeout(300);
            visited.add(neighbor);
            this.nodes.get(neighbor)?.setColor("#ff0");
            const myDiv = document.getElementById('t'+this.nodes.get(neighbor).position);
            myDiv.style.backgroundColor = "#ff0";
            queue.push(neighbor);
          
        }
      }
    }
  }

  // async dfs(start) {
  //   const visited = new Set();
  //   const stack = [start];
  //   visited.add(start);
  //   this.nodes.get(start)?.setColor("#ff0");
  //   const myDiv = document.getElementById('t'+this.nodes.get(start).position);
  //   myDiv.style.backgroundColor = "#ff0";

  //   while (stack.length > 0) {
  //     const edges = stack.pop();
  //     const neighbors = this.neighbor.get(edges);
  //     console.log(visited);
  //     for (const neighbor of neighbors) {
  //       if (!visited.has(neighbor)) {
  //         await this.timeout(300);
  //           visited.add(neighbor);
  //           this.nodes.get(neighbor)?.setColor("#ff0");
  //           const myDiv = document.getElementById('t'+this.nodes.get(neighbor).position);
  //           myDiv.style.backgroundColor = "#ff0";
  //           stack.push(neighbor);
          
  //       }
  //     }
  //   }
  // }

  async dfsR(start, visited = new Set()) {
    visited.add(start);
    const neighbors = this.neighbor.get(start);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
          console.log(`${start}: ${neighbor}`);
          this.nodes.get(start).setColor("#ff0");
          const myDiv = document.getElementById('t'+this.nodes.get(start).position);
          myDiv.style.backgroundColor = "#ff0";
          
          await this.dfsR(neighbor, visited);
        }
    }
}

 
}
