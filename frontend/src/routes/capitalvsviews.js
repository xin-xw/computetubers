import { Stack, HStack, Heading, Flex, Box, Center } from "@chakra-ui/react";
import React from "react";
import Chart from "../components/analytics/capital-vs-views";
export default function CapitalvsViews() {
  return (
    <Flex>
      <Stack>
        <Box mt={15}>
          <Heading size={"md"}>Here is a graph on how the number of capitals in the title correlate to views</Heading>
        </Box>
        <Chart></Chart>
        <Box>
        </Box>
      </Stack>
    </Flex>
  );
}
