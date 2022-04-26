import { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  IconButton,
  Button,
  useColorMode,
  useMediaQuery,
  Spacer,
} from "@chakra-ui/react";
import HomePageSearch from "./home-page-search";

import { CloseIcon, HamburgerIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";

// React Router
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { ColorModeSwitcher } from "../../ColorModeSwitcher";

const HomePageNavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [hamburgerShow, setHamburgerShow] = useState(false);
  const toggleMenu = () => setHamburgerShow(!hamburgerShow);

  return (
    <Flex position="static">
      <Flex
        as="nav"
        pos="sticky"
        align="flex-start"
        justify="space-between"
        wrap="wrap"
        w="85%"
      >
        <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
          {hamburgerShow ? <CloseIcon /> : <HamburgerIcon />}
        </Box>

        <Box
          display={{ base: hamburgerShow ? "block" : "none", md: "block" }}
          flexBasis={{ base: "100%", md: "auto" }}
        >
          <Flex
            align="flex-start"
            justify={["flex-start", "space-between", "flex-end", "flex-end"]}
            direction={["column", "row", "row", "row"]}
            mx={5}
            my={0}
            pt={[4, 4, 0, 0]}
          >
            <Router>
              <Button fontSize="15px" to="/">
                <Link to="/">Home</Link>
              </Button>
            </Router>
          </Flex>
        </Box>
      </Flex>

      <IconButton
        icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        borderRadius="sm"
        variant="outline"
      />
    </Flex>
  );
};

export default HomePageNavBar;
