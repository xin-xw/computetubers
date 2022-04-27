import { Stack, HStack, Heading, Flex, Box, Center } from "@chakra-ui/react";
import React from "react";
import SearchBar from "../components/search-components/search-bar";

export default function SearchIndex() {
  return (
    <Flex>
      <Stack>
        <Box mt={15}>
          <SearchBar></SearchBar>
        </Box>
      </Stack>
    </Flex>
  );
}
