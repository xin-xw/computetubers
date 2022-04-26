import {
  Input,
  Flex,
  Stack,
  HStack,
  VStack,
  Center,
  Heading,
  Text,
  Button,
  List,
  Spacer,
  Image,
  ListItem,
  Box,
} from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import SearchUpdate from "./modal/search-update";
import SearchDelete from "./modal/search-delete";

const HomePageSearchResults = ({
  key,
  video_id,
  video_title,
  channel_title,
  video_likes,
  video_dislikes,
  video_view_count,
  video_comment_count,
  video_trending_date,
  video_thumbnail,
}) => {
  return (
    <HStack
      p={2}
      borderWidth="2px"
      borderRadius="sm"
      overflow={"hidden"}
      textAlign="left"
      align="start"
      spacing={3}
      transition="all 0.2s"
      transition-timing-function="spring(3 100 10 10)"
      _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
    >
      <Box p={2} position="relative" overflow={"hidden"}>
        <Box mb={3}>
          <HStack>
            <Image
              height="60px"
              width="60px"
              layout="fixed"
              src={video_thumbnail}
              alt={video_title}
              mx={5}
            ></Image>
            <VStack>
              <Box>
                <Text fontWeight="bold" fontSize="md">
                  Video: {video_title}
                </Text>
                <Text>{video_id}</Text>
                {<Text>Channel: {channel_title}</Text>}
                <Text>Views: {video_view_count}</Text>
                <Text>Date trending: {video_trending_date}</Text>
                <Text>Likes: {video_likes}</Text>
                <Text>Dislikes: {video_dislikes}</Text>
                <Text>Comments: {video_comment_count}</Text>
              </Box>
            </VStack>
          </HStack>
          <HStack>
            <SearchUpdate videoId={video_id}></SearchUpdate>
            <SearchDelete videoId={video_id}></SearchDelete>
          </HStack>
        </Box>
      </Box>
    </HStack>
  );
};

export default HomePageSearchResults;
