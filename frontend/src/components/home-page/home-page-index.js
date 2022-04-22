import { Stack, Heading, Flex, Box } from "@chakra-ui/react";
import HomePageSearch from "./home-page-search";
import React from "react";
import HomePageSearchResults from "./home-page-search-results";

export default function HomePageIndex() {
  return (
    <Flex>
      <Stack>
        <Box my={1}>
          <Heading fontSize="5xl" fontWeight="bold">
            ComputeTubers
          </Heading>
        </Box>
        <Box my={1}>
          <Heading fontSize="3xl" fontWeight="bold">
            Search for related video titles
          </Heading>

          <HomePageSearch></HomePageSearch>
        </Box>
      </Stack>
    </Flex>
  );
}
