import { Stack, HStack, Heading, Flex, Box, Center } from "@chakra-ui/react";
import React from "react";
import Chart from "../components/analytics/likes-vs-views";
export default function LikesvsViews() {
  return (
    <Flex>
      <Stack>
        <Box mt={15}>
          <Heading size={"md"}>Here is a graph on how the number of likes correlate to views</Heading>
        </Box>
        <Chart></Chart>
        <Box>
        </Box>
      </Stack>
    </Flex>
  );
}
