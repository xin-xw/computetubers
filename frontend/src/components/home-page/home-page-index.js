import { Stack, HStack, Heading, Flex, Box, Center } from "@chakra-ui/react";
import HomePageSearch from "./home-page-search";
import React from "react";
import HomePageNavBar from "./home-page-nav";

export default function HomePageIndex() {
  return (
    <Flex>
      <Stack>
        <Box mt={15}>
          <HomePageSearch></HomePageSearch>
        </Box>
      </Stack>
    </Flex>
  );
}
