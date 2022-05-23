import {
  Stack,
  HStack,
  Heading,
  Flex,
  Box,
  Center,
  Hstack,
} from "@chakra-ui/react";
import React from "react";
import AboutUs from "./home-page-about-us";
import HomePageTrendingTags from "./home-page-trending-tags";
import HomePageTrendingTitles from "./home-page-trending-titles";
import Chart from "../analytics/likes-vs-views";

export default function HomePageIndex() {
  return (
    <Flex>
      <Stack>
        <Box mt={15} my={5}>
          <Heading size={"lg"} textAlign="center">
          </Heading>
          </Box>
          <HomePageTrendingTags></HomePageTrendingTags>
          <HomePageTrendingTitles></HomePageTrendingTitles>
        <Box>
          <AboutUs></AboutUs>
        </Box>
      </Stack>
    </Flex>
  );
}
