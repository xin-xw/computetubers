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
export default function NumTagsCorrelateView() {
  const [avgNumTags, setAvgNumTags] = useState("");
  const [btnClicked, setBtnClicked] = useState(false);

  function handleFetch() {
    const backend_avg_num_tags_url = "http://127.0.0.1:8000/average-tags/";
    axios.get(backend_avg_num_tags_url).then(function (response) {
      setAvgNumTags(response.data);
      console.log(avgNumTags);
    });
    setBtnClicked(true);
  }

  return (
    <Flex>
      <VStack as={"column"}>
        <Box mt={15}>
          <Heading size={"lg"}>
            Curious about the average number of tags amongst trending videos?
          </Heading>
        </Box>

        <Box my={10}>
          <Button variant={"solid"} onClick={handleFetch}>
            <Text>Click to fetch the most updated data</Text>
          </Button>
        </Box>

        <Box mt={20}>
          {btnClicked ? (
            <Text align={"center"}>
              Based on our data, we found that the average number of tags
              amongst trending videos is:{" "}
              <Heading as={"span"} size="md">
                {avgNumTags}
              </Heading>
            </Text>
          ) : (
            ""
          )}
        </Box>
      </VStack>
    </Flex>
  );
}
