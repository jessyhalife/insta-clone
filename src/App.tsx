import React from "react";
import "./App.css";
import { Container } from "@chakra-ui/layout";

import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <Container
      minWidth="100%"
      padding={0}
      backgroundColor="gray.50"
      height="100%"
    >
      <Header />
      <Content />
    </Container>
  );
}

export default App;
