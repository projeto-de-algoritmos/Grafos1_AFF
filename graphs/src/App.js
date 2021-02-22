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
  const [counter, setCounter] = useState(0);
  const [counterPC, setCounterPC] = useState(0);

  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  useEffect(() => {}, []);

  useEffect(() => {
    const valueRow = getRandomArbitrary(0, 7);
    const valueColumn = getRandomArbitrary(0, 7);
    setInitialPosition(valueRow + "," + valueColumn);
  }, []);

  const renderColumn = (row, graph, initialPosition) => {
    return [0, 1, 2, 3, 4, 5, 6, 7].map((column) => (
      <Box
        border="1px"
        className={"field"}
        id={`t${column},${row}`}
        onClick={async () => {
          if (!startGame && `${column},${row}` !== initialPosition) {
            setStartGame(true);
            if (playerOption)
              graph.dfs(`${column},${row}`, "#ff0").then((e) => {
                setCounter(e);
                setCounterPC(64 - e);
              });
            else
              graph.bfs(`${column},${row}`, "#ff0").then((e) => {
                setCounter(e);
                setCounterPC(64 - e);
              });
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
      <VStack className="body">
        <HStack>
        <VStack className="left-box">
          <Text className="main-title">
          F*cking Flood Fill (FFF)
          </Text>
          <VStack className="options-container">
            <Text className="card-title">Opções</Text>
            <VStack className="options-items">
            <Text className="options-font">Player</Text>
            <HStack>
              <Text>BFS</Text>
              <Switch
                isDisabled={startGame}
                mx="0.8rem"
                size="lg"
                onChange={(e) => {
                  setPlayerOption(e.target.checked);
                }}
              />
              <Text>DFS</Text>
            </HStack>
           
            <Text className="options-font">PC</Text>
            <HStack>
              <Text>BFS</Text>
              <Switch
                isDisabled={startGame}
                mx="0.8rem"
                size="lg"
                onChange={(e) => {
                  setPcOption(e.target.checked);
                }}
              />
              <Text>DFS</Text>
            </HStack>
            </VStack>
           
        </VStack>
          <VStack className="options-container">
            <Text className="card-title">Instruções</Text>
          <Text>
            {" "}
            1. Você pode escolher 2 tipos de preenchimentos diferentes, sendo o
            primeiro <i><b>Preenchimento linear</b></i>,
            onde será preenchido linha por linha ou coluna por coluna, e o segundo o{" "}
            <b><i>Preenchimento por camadas</i></b> onde será preenchido pontos em
            volta da seleção inicial<br/><br/>
            2. Para iniciar o jogo basta você clicar em um quadrado inicial
          </Text>
          </VStack>

        </VStack>

      <VStack className="main">
          <Text className="initial-text">
            {" "}
            Bem vindo ao FFF, o objetivo do jogo é você preencher mais quadrados
            que seu oponente, para preencher basta clicar no quadrado onde você
            quer iniciar o preenchimento e deixar o algoritmo fazer o resto.{" "}
          </Text>
          <VStack className="score-container">
          <Text className="score-title">
            Pontuação
          </Text>
          <Box className="score">
            <Text >Player: {counter}</Text>
            <Text >PC: {counterPC}</Text>
          </Box>
          </VStack>
        <Box className="board" mb="1%">
          {renderTable()}
        </Box>

        <Button
        className="reset-button"
        colorScheme="green"
        variant="solid"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reiniciar jogo
        </Button>
      </VStack>
      </HStack>
      </VStack>
      
    </ChakraProvider>
  );
};

export default App;
