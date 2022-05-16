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
  Grid,
  Image,
  useColorModeValue,
  ListItem,
  Box,
  Icon,
} from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import SearchUpdate from "./modal/search-update";
import SearchDelete from "./modal/search-delete";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import Moment from "react-moment";
function HomePageSearchResultsContainer({
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
}) {
  return (
    <Flex>
      <Box>
        <Grid templateColumns="repeat(5, 1fr)" gap={6}></Grid>
      </Box>
    </Flex>
  );
}

// function HomePageSearchResults({
//   key,
//   video_id,
//   video_title,
//   channel_title,
//   video_likes,
//   video_dislikes,
//   video_view_count,
//   video_comment_count,
//   video_trending_date,
//   video_thumbnail,
// }) {
//   return (
//     // <HStack
//     //   p={2}
//     //   borderWidth="2px"
//     //   borderRadius="sm"
//     //   overflow={"hidden"}
//     //   textAlign="left"
//     //   align="start"
//     //   spacing={3}
//     //   transition="all 0.2s"
//     //   transition-timing-function="spring(3 100 10 10)"
//     //   _hover={{ transform: "translateY(-4px)", shadow: "lg" }}
//     // >
//     <Flex>
//       <Box p={2}>
//         <Box mb={3}>
//           <HStack>
//             <Image
//               height="60px"
//               width="60px"
//               layout="fixed"
//               src={video_thumbnail}
//               alt={video_title}
//               mx={5}
//             ></Image>
//             <VStack>
//               <Box>
//                 <Text fontWeight="bold" fontSize="md">
//                   Video: {video_title}
//                 </Text>
//                 <Text>{video_id}</Text>
//                 {<Text>Channel: {channel_title}</Text>}
//                 <Text>Views: {video_view_count}</Text>
//                 <Text>Date trending: {video_trending_date}</Text>
//                 <Text>Likes: {video_likes}</Text>
//                 <Text>Dislikes: {video_dislikes}</Text>
//                 <Text>Comments: {video_comment_count}</Text>
//               </Box>
//             </VStack>
//           </HStack>
//           <HStack>
//             <SearchUpdate videoId={video_id}></SearchUpdate>
//             <SearchDelete videoId={video_id}></SearchDelete>
//           </HStack>
//         </Box>
//       </Box>
//     </Flex>
//     // </HStack>
//   );
// }

// export default HomePageSearchResults;

export default function HomePageSearchResults({
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
}) {
  return (
    <Center py={12}>
      <Box
        role={"group"}
        p={6}
        maxW={"300px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"lg"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
        _hover={{
          transition: "transform .2s",
          transform: "scale(1.1)",
        }}
      >
        <Box rounded={"lg"} pos={"relative"} height={"auto"}>
          <Center>
            <Image
              rounded={"lg"}
              height={"75%"}
              width={"75%"}
              objectFit={"cover"}
              src={video_thumbnail}
            />
          </Center>
        </Box>
        <Stack pt={3} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            VIDEO ID: {video_id}
          </Text>

          <Heading
            fontSize={"md"}
            fontFamily={"body"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            {video_title}
          </Heading>

          <Stack direction={"row"} align={"center"} my={"3px"}>
            <Text fontSize={"sm"}>{channel_title}</Text>
            <Text fontSize={"xs"}>{" • "}</Text>
            <Text fontSize={"sm"}>{video_view_count} views</Text>
          </Stack>
          <Text fontSize={"sm"}>
            Date Trended:{" "}
            <Moment format="MM/DD/YYYY">{video_trending_date}</Moment>
          </Text>
          <Stack direction={"row"} my={"3px"}>
            <Icon as={AiFillLike} h={5}></Icon>
            <Text fontSize={"sm"}>{video_likes}</Text>
            <Spacer></Spacer>
            <Icon as={AiFillDislike} h={5}></Icon>
            <Text fontSize={"sm"}>{video_dislikes}</Text>
            <Spacer></Spacer>
            <Icon as={BiCommentDetail} h={5}></Icon>
            <Text fontSize={"sm"}>{video_comment_count}</Text>
          </Stack>
          <Stack direction={"row"} p={2}>
            <SearchUpdate video_id={video_id}></SearchUpdate>
            <SearchDelete video_id={video_id}></SearchDelete>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
