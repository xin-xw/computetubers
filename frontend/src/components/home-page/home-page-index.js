import { Stack, HStack, Heading, Flex, Box, Center } from "@chakra-ui/react";
import React from "react";
import AboutUs from "./home-page-about-us";

export default function HomePageIndex() {
  return (
    <Flex>
      <Stack>
        <Center>
          <Box mt={15} my={5}>
            <Heading size={"lg"}>Home</Heading>
          </Box>
        </Center>
        <Box>
          <AboutUs></AboutUs>
        </Box>
      </Stack>
    </Flex>
  );
}
