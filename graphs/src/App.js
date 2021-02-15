import React, { useEffect, useState } from "react";
import "./App.css";
import Graph from './utils/Graph';

const App = () => {
  const [fieldSelected, setFieldSelected] = useState(null);
  const graph = new Graph(8,8);

  const renderTable = (column) => {
    return [0,1, 2, 3, 4, 5, 6, 7].map((row) => (
      <div
        className={
          fieldSelected !== row.toString() + column.toString()
            ? "field"
            : "fieldSelected"
        }
        onClick={() => {
          setFieldSelected(row.toString() + column.toString());
          console.log(column, row);
        }}
        key={column.toString() + row.toString() }
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
      <div
      style={{backgroundColor: "#000", width: "50px", height:"50px"}}
        
        onClick={() => {
          graph.addNode();
          graph.addNeighbor();
        }}
        
      ></div>
    </>
  );
};

export default App;

