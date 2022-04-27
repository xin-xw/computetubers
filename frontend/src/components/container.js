import React from "react";
import { Box } from "@chakra-ui/react";

export const Container = (props) => (
  <Box
    w="fit-content"
    mx="auto"
    maxW={"900px"}
    px={{ base: "7", md: "8" }}
    // overflow={"auto"}
    {...props}
  />
);

export default Container;
