import { Stack, HStack, Heading, Flex, Box, Center } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../components/search-page/search-bar";

export default function SearchIndex() {
  return (
    <Flex>
      <Stack>
        <Box mt={15}>
          <Heading size={"lg"}>Search</Heading>
        </Box>
        <Box>
          <SearchBar></SearchBar>
        </Box>
      </Stack>
    </Flex>
  );
}
