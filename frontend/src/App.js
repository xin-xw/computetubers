import React from "react";

// Chakra
import { ChakraProvider, Center, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

import Container from "./components/container";
import HomePageIndex from "./components/home-page/home-page-index";
import HomePageNavBar from "./components/home-page/home-page-nav";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <HomePageNavBar></HomePageNavBar>
      <Container>
        <HomePageIndex></HomePageIndex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
