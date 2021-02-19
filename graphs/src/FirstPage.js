import React, { useEffect, useState } from "react";
import Graph from "./utils/Graph";
import {
  ChakraProvider,
  HStack,
  VStack,
  Switch,
  Box,
  Text,
  Container,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Header,
} from "@chakra-ui/react";
import "./App.css";
import { useHistory } from "react-router-dom";

const FirstPage = () => {
  const history = useHistory();
  const [boardSize, setBoardSize] = useState(8);
  const [playerOption, setPlayerOption] = useState(false);
  const [pcOption, setPcOption] = useState(false);

  return (
    <ChakraProvider>
      <VStack>
        <Text fontSize="3xl" mt="5%" mb="5%">FFF</Text>
        <VStack>
          <Container d="flex" flexDirection="column">
            <VStack d="flex" flexDirection="column" alignSelf="center">
              <Text alignSelf="center">Player</Text>
              <HStack d="flex">
                <Text>BFS</Text>
                <Switch
                  mx="10px"
                  isChecked={playerOption}
                  onChange={() => {
                    setPlayerOption(!playerOption);
                  }}
                />
                <Text>DFS</Text>
              </HStack>
            </VStack>
            <VStack d="flex" flexDirection="column" alignSelf="center">
              <Text alignSelf="center">PC</Text>
              <HStack d="flex">
                <Text>BFS</Text>
                <Switch
                  mx="10px"
                  isChecked={pcOption}
                  onChange={() => {
                    setPcOption(!pcOption);
                  }}
                />
                <Text>DFS</Text>
              </HStack>
            </VStack>
          </Container>
          <HStack>
            <Text>Tamanho do tabuleiro</Text>
            <NumberInput
              value={boardSize}
              defaultValue={8}
              min={8}
              max={20}
              onChange={(s) => {
                setBoardSize(s);
              }}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
          <Button onClick={() => history.push("/game")}>Próximo</Button>
        </VStack>
      </VStack>
    </ChakraProvider>
  );
};

export default FirstPage;
