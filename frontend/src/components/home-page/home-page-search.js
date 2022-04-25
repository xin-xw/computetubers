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
import SearchUpdate from "./modal/search-update";
import { React, useState, useEffect } from "react";

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
          </HStack>
        </Box>
      </Box>
    </HStack>
  );
};

export default function HomePageSearch() {
  const axios = require("axios");
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => setSearchValue(e.target.value);

  function handleSearch() {
    axios
      .get("http://127.0.0.1:8000/search/?video_title=" + searchValue)
      .then(function (response) {
        let result = response.data;
        setSearchResults([...result]);
        console.log("searchResults:", searchResults);

        // for (let i = 0; i < 5; i++) {
        //   const new_entry = {
        //     ranking: i + 1,
        //     video_title: result[i].title,
        //     channel_title: result[i].channelTitle,
        //     video_likes: result[i].likes,
        //     video_dislikes: result[i].dislikes,
        //     video_view_count: result[i].viewCount,
        //     video_trending_date: result[i].trendingDate,
        //     video_thumbnail: result[i].thumbnailLink,
        //   };

        //   // setSearchResultTitles((searchResultTitles) => [
        //   //   ...searchResultTitles,
        //   //   new_entry.video_title,
        //   // ]);
        //   setSearchResultTitles((searchResultTitles) => [
        //     ...searchResultTitles,
        //     new_entry.video_title,
        //   ]);
        //   setSearchResults((searchResults) => [...searchResults, new_entry]);
        // }

        // setSearchResultTitles(result.title);

        // setSearchResults(result);
      });
  }

  return (
    <Flex>
      <Stack>
        <HStack my={3}>
          <Input
            variant={"outline"}
            value={searchValue}
            onChange={handleChange}
            size="lg"
          />
          <Button onClick={handleSearch} colorScheme="blue">
            Go
          </Button>
        </HStack>

        <VStack>
          <Text fontSize={"xl"}>
            Trending Youtube Videos Related to Your Keyword
          </Text>

          <Box>
            {searchResults.length === 0 ? (
              <Text>No results returned from search.</Text>
            ) : (
              searchResults.map((info) => (
                <HomePageSearchResults
                  key={info.id}
                  video_id={info.videoId}
                  video_title={info.title}
                  channel_title={info.channelTitle}
                  video_likes={info.likes}
                  video_dislikes={info.dislikes}
                  video_view_count={info.viewCount}
                  video_trending_date={info.trendingDate}
                  video_thumbnail={info.thumbnailLink}
                  video_comment_count={info.commentCount}
                ></HomePageSearchResults>
              ))
            )}
          </Box>
        </VStack>
      </Stack>
    </Flex>
  );
}
