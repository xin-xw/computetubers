import React from "react";
import { Box } from "@chakra-ui/react";

export const Container = (props) => (
  <Box
    w="min-content"
    mx="auto"
    px={{ base: "7", md: "8" }}
    // overflow={"auto"}
    {...props}
  />
);

export default Container;
