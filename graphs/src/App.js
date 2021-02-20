import React, { useEffect, useState } from "react";
import Graph from "./utils/Graph";
import {
  ChakraProvider,
  Button,
  Box,
  Text,
  HStack,
  VStack,
  Switch,
} from "@chakra-ui/react";
import "./App.css";

const App = () => {
  const [playerOption, setPlayerOption] = useState(false);
  const [pcOption, setPcOption] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [initialPosition, setInitialPosition] = useState("0,0");

  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {
    const valueRow = getRandomArbitrary(0, 7);
    const valueColumn = getRandomArbitrary(0, 7);
    setInitialPosition(valueRow + "," + valueColumn);
  }, []);

  const renderColumn = (row, graph, initialPosition) => {
    return [0, 1, 2, 3, 4, 5, 6, 7].map((column) => (
      <Box
        border="1px"
        style={{
          backgroundColor: graph.nodes.get(`${column},${row}`)?.getColor(),
        }}
        className={"field"}
        id={`t${column},${row}`}
        onClick={async () => {
          if (!startGame && `${column},${row}` !== initialPosition) {
            setStartGame(true);
            if (playerOption) graph.dfs(`${column},${row}`, "#ff0");
            else graph.bfs(`${column},${row}`, "#ff0");
            if (pcOption) graph.dfs(initialPosition, "#000");
            else graph.bfs(initialPosition, "#000");
          }
        }}
        key={`${column},${row}`}
      ></Box>
    ));
  };

  const renderTable = () => {
    const graph = new Graph(8, 8);

    graph.addNode();
    graph.addNeighbor();

    graph.nodes.get(initialPosition).isSelected = true;
    graph.nodes.get(initialPosition).setColor("#000");

    return [0, 1, 2, 3, 4, 5, 6, 7].map((column, index) => (
      <Box className="cross" key={index}>
        {renderColumn(column, graph, initialPosition)}
      </Box>
    ));
  };

  return (
    <ChakraProvider>
      <Text fontSize="3xl" align="center" mb="1%">
        FFF (Flood F*cking Fill :P )
      </Text>
      <VStack>
        <Box d="flex" flexDirection="column">
          <VStack d="flex" flexDirection="column" alignSelf="center" mb="10%">
            <Text alignSelf="center">Player</Text>
            <HStack d="flex">
              <Text>BFS</Text>
              <Switch
                isDisabled={startGame}
                mx="10px"
                onChange={(e) => {
                  setPlayerOption(e.target.checked);
                }}
              />
              <Text>DFS</Text>
            </HStack>
            <Text alignSelf="center">PC</Text>
            <HStack d="flex">
              <Text>BFS</Text>
              <Switch
                isDisabled={startGame}
                mx="10px"
                onChange={(e) => {
                  setPcOption(e.target.checked);
                }}
              />
              <Text>DFS</Text>
            </HStack>
          </VStack>
        </Box>
      </VStack>

      <VStack className="main">
        <Box className="board" mb="1%">{renderTable()}</Box>

        <Box className="instructions">
          <Text>
            {" "}
            Bem vindo ao FFF, o objetivo do jogo é você preencher mais quadrados
            que seu oponente, para preencher basta clicar no quadrado onde você
            quer iniciar o preenchimento e deixar o algoritmo fazer o resto.{" "}
          </Text>
          <Text>
            {" "}
            Você pode escolher 2 tipos de preenchimentos diferentes, sendo o
            primeiro <i>Preenchimento linear </i>
            onde será preenchido linha por linha e o segundo o{" "}
            <i>Preenchimento por camadas</i> onde será preenchido pontos em
            volta da seleção inicial
          </Text>
        </Box>
        <Button
          onClick={() => {
            window.location.reload();
          }}
        >
          Reset
        </Button>
      </VStack>
    </ChakraProvider>
  );
};

export default App;
