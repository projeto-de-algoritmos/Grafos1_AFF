import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [fieldSelected, setFieldSelected] = useState(null);

  const renderTable = (column) => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map((row, index) => (
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
        key={index.toString() + column.toString()}
      ></div>
    ));
  };

  return (
    <>
      <h1>FFF (Flood Fuck*ng Fill)</h1>
      <section className="board">
        <div className="cross">{renderTable(1)}</div>
        <div className="cross">{renderTable(2)}</div>
        <div className="cross">{renderTable(3)}</div>
        <div className="cross">{renderTable(4)}</div>
        <div className="cross">{renderTable(5)}</div>
        <div className="cross">{renderTable(6)}</div>
        <div className="cross">{renderTable(7)}</div>
        <div className="cross">{renderTable(8)}</div>
      </section>
    </>
  );
};

export default App;
