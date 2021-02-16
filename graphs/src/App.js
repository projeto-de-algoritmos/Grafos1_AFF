import React, { useEffect, useState } from "react";
import "./App.css";
import Graph from './utils/Graph';

const App = () => {
  const [fieldSelected, setFieldSelected] = useState(null);
  const [color, setColor] = useState(null);

  const graph = new Graph(8,8);
  useEffect(()=>{
    graph.addNode();
    graph.addNeighbor();
  });


  const renderTable = (column) => {
    return [0,1, 2, 3, 4, 5, 6, 7].map((row) => (
      <div
      style={{backgroundColor: graph.nodes.get(`${column},${row}`)?.getColor()}}
        className={ "field" }
        id={`t${column},${row}`}
        onClick={() => {
          setFieldSelected(`${column},${row}`);
          graph.dfsR(`${column},${row}`);
        }}
        key={`${column},${row}`}
      ></div>
    ));
  };

  return (
    <>
      <h1>FFF (Flood F*cking Fill :P )</h1>
      <section className="board">
        <div className="cross">{renderTable(0)}</div>
        <div className="cross">{renderTable(1)}</div>
        <div className="cross">{renderTable(2)}</div>
        <div className="cross">{renderTable(3)}</div>
        <div className="cross">{renderTable(4)}</div>
        <div className="cross">{renderTable(5)}</div>
        <div className="cross">{renderTable(6)}</div>
        <div className="cross">{renderTable(7)}</div>
      </section>
    </>
  );
};

export default App;

