import { Stack, HStack, Heading, Flex, Box, Center } from "@chakra-ui/react";
import React from "react";
import BarChart from "../components/analytics/dislikes-vs-views";
export default function DislikesvsViews() {
  return (
    <Flex>
      <Stack>
        <Box mt={15}>
          <Heading size={"md"}>Here is a graph on how the number of dislikes correlate to views</Heading>
        </Box>
        <BarChart></BarChart>
        <Box>
        </Box>
      </Stack>
    </Flex>
  );
}
