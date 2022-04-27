import { Stack, HStack, Heading, Flex, Box, Center } from "@chakra-ui/react";
import React from "react";
import AboutUs from "./home-page-about-us";

export default function HomePageIndex() {
  return (
    <Flex>
      <Stack>
        <Box mt={15}>
          <Heading size={"lg"}>Home</Heading>
        </Box>
        <Box>
          <AboutUs></AboutUs>
        </Box>
      </Stack>
    </Flex>
  );
}
