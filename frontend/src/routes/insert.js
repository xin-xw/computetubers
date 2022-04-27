import { Stack, HStack, Heading, Flex, Box, Center } from "@chakra-ui/react";
import React from "react";
import InsertForm from "../components/insert-page/insert-form";
export default function InsertIndex() {
  return (
    <Flex>
      <Stack>
        <Box mt={15}>
          <Heading size={"lg"}>Insert Video to Database</Heading>
        </Box>
        <Box>
          <InsertForm></InsertForm>
        </Box>
      </Stack>
    </Flex>
  );
}
