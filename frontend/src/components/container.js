import React from "react";
import { Box } from "@chakra-ui/react";

export const Container = (props) => (
  <Box
    w="full"
    mx="auto"
    maxW="3xl"
    minW="3xl"
    px={{ base: "7", md: "8" }}
    // overflow={"auto"}
    {...props}
  />
);

export default Container;
