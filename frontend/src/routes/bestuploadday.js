import { Stack, HStack, Heading, Flex, Box, Center } from "@chakra-ui/react";
import React from "react";
import Chart from "../components/analytics/best-upload-day";
export default function BestUploadDay() {
  return (
    <Flex>
      <Stack>
        <Box mt={15}>
          <Heading size={"md"}> Based off our video upload data, here is a bar graph to find out the best Day to upload!</Heading>
        </Box>
        <Chart></Chart>
        <Box>
        </Box>
      </Stack>
    </Flex>
  );
}