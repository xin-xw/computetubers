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
  Grid,
  ListItem,
  Box,
  GridItem,
  Wrap,
  WrapItem,
  useMediaQuery,
} from "@chakra-ui/react";
import HomePageSearchResults from "../search-page/search-results";
import { React, useState, useEffect } from "react";

export default function HomePageTrendingTitles() {
  const axios = require("axios");
  const [searchResults, setSearchResults] = useState([]);

      useEffect(() => {
        axios
        .get("http://127.0.0.1:8000/search/?search=&ordering=-viewCount")
        .then(function (response) {
          let result = response.data.slice(0,6);
          setSearchResults([...result]);
          console.log("searchResults:", searchResults);
        })
      }, [searchResults.length]);

  return (
    <Flex>
      <Stack>
      <Box mt={15} border='2px' borderColor={'white'}>
      <Heading size={"lg"}>Trending Videos</Heading>
       </Box>
        <Box w={["300px", "750px"]}>
          <Wrap spacingX={"100px"} justify={"center"}>
            {searchResults.length === 0
              ? ""
              : searchResults.map((info) => (
                  <WrapItem>
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
                  </WrapItem>
                ))}
          </Wrap>
        </Box>
      </Stack>
    </Flex>
  );
}
