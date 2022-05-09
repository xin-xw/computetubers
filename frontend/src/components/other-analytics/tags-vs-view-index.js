import {
  Stack,
  VStack,
  HStack,
  Heading,
  Flex,
  Box,
  Center,
  Text,
  Button,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
export default function TagsVsViewIndex() {
  const [btnClicked, setBtnClicked] = useState(false);

  function handleFetch() {
    const backend_avg_num_tags_url = "http://127.0.0.1:8000/average-tags/";
    axios.get(backend_avg_num_tags_url).then(function (response) {});
    setBtnClicked(true);
  }

  return (
    <Flex>
      <VStack as={"column"}>
        <Box mt={15}>
          <Heading size={"lg"}>
            Here's the relationship between the number of tags versus view count
          </Heading>
        </Box>

        <Box my={10}>
          <Button variant={"solid"} onClick={handleFetch} my={5}>
            <Text>Click to load the data</Text>
          </Button>
        </Box>

        <Box mt={20}></Box>
      </VStack>
    </Flex>
  );
}
