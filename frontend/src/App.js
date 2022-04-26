import React from "react";

// Chakra
import { ChakraProvider, Center, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import Container from "./components/container";
import HomePageIndex from "./components/home-page/home-page-index";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container>
        <HomePageIndex></HomePageIndex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
