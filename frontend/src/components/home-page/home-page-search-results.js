import {
  Input,
  Flex,
  Stack,
  HStack,
  VStack,
  Center,
  Heading,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import { React, useState, useEffect } from "react";

function HomePageSearchResults(key, title) {
  return (
    <Flex>
      <Box>
        <Heading>{key}</Heading>
        <Text>{title}</Text>
      </Box>
    </Flex>
  );
}

export default HomePageSearchResults;
