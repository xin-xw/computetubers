import { Stack, HStack, Heading, Flex, Box, Center } from "@chakra-ui/react";
import HomePageSearch from "./home-page-search";
import React from "react";
import HomePageSearchResults from "./home-page-search-results";
import HomePageInsert from "./home-page-insert";
import HomePageNavBar from "./home-page-nav-bar";

export default function HomePageIndex() {
  return (
    <Flex>
      <Stack>
        <Box mt={30}>
          <HomePageNavBar></HomePageNavBar>
        </Box>
        <Box my={1}>
          <Center>
            <HomePageSearch></HomePageSearch>
          </Center>
        </Box>
      </Stack>
    </Flex>
  );
}
