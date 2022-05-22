import { Stack, HStack, Heading, Flex, Box, Center, Hstack } from "@chakra-ui/react";
import { React, useState, useEffect } from "react";
import { FaCreativeCommonsPd } from "react-icons/fa";


export default function HomePageTrendingTags() {
    //Sometimes this doesn't show up because of synchronization
    const axios = require("axios");
    const [Results, setSearchResults] = useState([]);
  
    useEffect(() => {
      axios.get("http://127.0.0.1:8000/videos/").then(function (response) {
      let result = response.data;
      setSearchResults([...result]);
      console.log("searchResults:", Results);
    })}, [Results.length])

    function getTags(){
      let tags = [Results.map(info => info.tags)];

      let arr = []

      for(let i = 0; i < Results.length; ++i){
         arr.push.apply(arr,tags[0][i].split("|"));
      }


      const count = {};

      for(const element of arr){
        if(count[element]){
          count[element] += 1;
        }
        else{
          count[element] = 1;
        }
      }
      
      //https://medium.com/@gmcharmy/sort-objects-in-javascript-e-c-how-to-get-sorted-values-from-an-object-142a9ae7157c
      return Object.entries(count).sort((a,b) => b[1]-a[1]).slice(1,6);

    }

    let top_trends = [["Loading"],["Loading"],["Loading"],["Loading"],["Loading"]]
    top_trends = getTags();

    return (
    <Stack spacing={0}>
    <Box mt={15} border='2px' borderColor={'white'}>
      <Heading size={"lg"}>Top Trending Tags</Heading>
    </Box>
    <Box border='2px' borderColor={'white'} w='750px' p={4} color='tomato'>
    <Flex h={12} alignItems={"center"} justifyContent={"space-between"}>
    <HStack spacing={8} alignItems={"center"}>
    <Box bg='#FF0000' rounded='lg' p={4} color='white'>
    {top_trends[0][0]}
    </Box>
    <Box bg='#FF0000' rounded='lg'p={4} color='white'>
    {top_trends[1][0]}
        </Box>
    <Box bg='#FF0000' rounded='lg' p={4} color='white'>
    {top_trends[2][0]}
        </Box>
    <Box bg='#FF0000' rounded='lg'p={4} color='white'>
    {top_trends[3][0]}
        </Box>
    <Box bg='#FF0000' rounded='lg' p={4} color='white'>
    {top_trends[4][0]}
        </Box>
    </HStack>
    </Flex>
    </Box>
    </Stack>
  );
}
