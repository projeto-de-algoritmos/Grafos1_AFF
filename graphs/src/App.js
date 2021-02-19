import React, { useEffect, useState } from "react";
import "./App.css";
import Graph from "./utils/Graph";

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const [searchType, setSearchType] = useState(false);
  const [searchTypePC, setSearchTypePC] = useState(false);

  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let initialPosition;

  const graph = new Graph(8, 8);

  useEffect(() => {
    graph.addNode();
    graph.addNeighbor();
    const valueRow = getRandomArbitrary(0, 7);
    const valueColumn = getRandomArbitrary(0, 7);
    initialPosition = valueRow + "," + valueColumn;
    graph.nodes.get(initialPosition).isSelected = true;
    graph.nodes.get(initialPosition).setColor("#000");
  }, []);

  const renderTable = (column) => {
    return [0, 1, 2, 3, 4, 5, 6, 7].map((row) => (
      <div
        style={{
          backgroundColor: graph.nodes.get(`${column},${row}`)?.getColor(),
        }}
        className={"field"}
        id={`t${column},${row}`}
        onClick={() => {
          if (!startGame && `${column},${row}` !== initialPosition) {
            setStartGame(true);
              graph.bfs(`${column},${row}`, "#ff0");
              graph.bfs(initialPosition, "#000");
          }
        }}
        key={`${column},${row}`}
      ></div>
    ));
  };

  return (
    <>
      <h1>FFF (Flood F*cking Fill :P )</h1>
      <div className="main">
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

        <section className="instructions">
          <p>
            {" "}
            Bem vindo ao FFF, o objetivo do jogo é você preencher mais quadrados
            que seu oponente, para preencher basta clicar no quadrado onde você
            quer iniciar o preenchimento e deixar o algoritmo fazer o resto.{" "}
          </p>
          <p>
            {" "}
            Você pode escolher 2 tipos de preenchimentos diferentes, sendo o
            primeiro <i>Preenchimento linear</i>
            onde será preenchido linha por linha e o segundo o{" "}
            <i>Preenchimento por camadas</i> onde será preenchido pontos em
            volta da seleção inicial
          </p>
        </section>
      </div>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Reset
      </button>
    </>
  );
};

export default App;
