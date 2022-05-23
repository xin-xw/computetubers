import { Stack, HStack, Heading, Flex, Box, Center } from "@chakra-ui/react";
import React from "react";
import Chart from "../components/analytics/best-upload-time";
export default function BestUploadTime() {
  return (
    <Flex>
      <Stack>
        <Box mt={15}>
          <Heading size={"md"}> Based off our upload time data, here is a bar graph to find out the best time to upload!</Heading>
        </Box>
        <Chart></Chart>
        <Box>
        </Box>
      </Stack>
    </Flex>
  );
}