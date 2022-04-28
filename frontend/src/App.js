import React from "react";

// Chakra
import { ChakraProvider, Center } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/container";
import HomePageIndex from "./components/home-page/home-page-index";
import HomePageNavBar from "./components/home-page/home-page-nav";
import SearchIndex from "./routes/search";
import InsertIndex from "./routes/insert";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <HomePageNavBar></HomePageNavBar>
        <Container>
          <Routes>
            <Route path="/" element={<HomePageIndex></HomePageIndex>} />
            <Route path="search" element={<SearchIndex></SearchIndex>} />
            <Route path="insert" element={<InsertIndex />} />
          </Routes>
        </Container>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
