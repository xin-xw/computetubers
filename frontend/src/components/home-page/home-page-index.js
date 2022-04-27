import { Stack, HStack, Heading, Flex, Box, Center } from "@chakra-ui/react";
import HomePageSearch from "../search-components/search-bar";
import React from "react";
import HomePageNavBar from "./home-page-nav";

export default function HomePageIndex() {
  return (
    <Flex>
      <Stack>
        <Box mt={15}>
          <Heading size={"md"}>Home</Heading>
        </Box>
      </Stack>
    </Flex>
  );
}
