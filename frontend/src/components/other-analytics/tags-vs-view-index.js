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

import TagViewChart from "./tags-vs-views";
export default function TagsVsViewIndex() {
  const [btnClicked, setBtnClicked] = useState(false);
  const [displayChart, setDisplayChart] = useState(false);
  function handleFetch() {
    const backend_avg_num_tags_url = "http://127.0.0.1:8000/average-tags/";
    axios.get(backend_avg_num_tags_url).then(function (response) {});
    setBtnClicked(true);
  }

  function handleDisplayChart() {
    setDisplayChart(true);
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
          <Button variant={"solid"} onClick={handleDisplayChart} my={5}>
            <Text>Click to load the data</Text>
          </Button>
          {displayChart === true ? <TagViewChart></TagViewChart> : ""}
        </Box>

        <Box mt={20}></Box>
      </VStack>
    </Flex>
  );
}
