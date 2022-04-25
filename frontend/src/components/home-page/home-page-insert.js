import {
    Stack,
    Heading,
    Flex,
    FormControl,
    Input,
    FormLabel,
    Box,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
  } from "@chakra-ui/react";
  import axios from "axios";

  import { React, useState, useEffect } from "react";

  export default function HomePageInsert() {
    const axios = require("axios");
    const [insertVideoTitle, setInsertVideoTitle] = useState("");
    const [insertChannelTitle, setInsertChannelTitle] = useState("");
    const [insertViews, setInsertViews] = useState(0);
    const [insertDate, setInsertDate] = useState("");
    const [insertLikes, setInsertLikes] = useState(0);
    const [insertDislikes, setInsertDislikes] = useState(0);
    const [insertCommentCount, setInsertCommentCount] = useState(0);
    const [successfulInsert, setSuccessfulInsert] = useState(false);

    const isError = (insertVideoTitle === '' || insertChannelTitle === ''
    || insertViews === 0 || insertDate === ''
    || insertLikes === 0 || insertDislikes === 0
    || insertCommentCount === 0)
  
    function handleFormSubmit() {
        const backend_insert_url = "http://127.0.0.1:8000/insert/";
        var params = new URLSearchParams();
        params.append("video_title", insertVideoTitle);
        params.append("channel_title", insertChannelTitle);
        params.append("view_count", insertViews);
        params.append("trending_date", insertDate);
        params.append("video_likes", insertLikes);
        params.append("video_dislikes", insertDislikes);
        params.append("comment_count", insertCommentCount);

        var request = {
            params: params,
          };

        axios.get(backend_insert_url, request).then(function (response) {
        let result = response.data;
        console.log("inserted", result);
        if (result) {
            setSuccessfulInsert(true);
        }
        });
    }
    
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
          <Box mt={3}>
            <Button onClick={onOpen}>Insert Video</Button>
    
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Insert video fields</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <FormControl>
                    <FormControl isRequired>
                      <FormLabel htmlFor="video_title">Video</FormLabel>
                      <Input
                        id="video_title"
                        type="text"
                        onChange={(ev) => {
                          setInsertVideoTitle(ev.target.value);
                          console.log("new video title:", insertVideoTitle);
                        }}
                      ></Input>
    
                      <FormLabel htmlFor="channel_title">Channel</FormLabel>
                      <Input
                        id="channel_title"
                        type="text"
                        onChange={(ev) => {
                          console.log(ev.target.value);
                          setInsertChannelTitle(ev.target.value);
                          console.log("new channel title:", insertChannelTitle);
                        }}
                      ></Input>
    
                      <FormLabel htmlFor="views">Views</FormLabel>
                      <Input
                        id="views"
                        type="number"
                        onChange={(ev) => {
                          console.log(ev.target.value);
                          setInsertViews(ev.target.value);
                          console.log("new views:", insertViews);
                        }}
                      ></Input>
    
                      <FormLabel htmlFor="dateTrending">Date Trending</FormLabel>
                      <Input
                        id="dateTrending"
                        type="text"
                        onChange={(ev) => {
                          console.log(ev.target.value);
                          setInsertDate(ev.target.value);
                          console.log("new date:", insertDate);
                        }}
                      ></Input>
    
                      <FormLabel htmlFor="likes">Likes</FormLabel>
                      <Input
                        id="likes"
                        type="number"
                        onChange={(ev) => {
                          console.log(ev.target.value);
                          setInsertLikes(ev.target.value);
                          console.log("new likes:", insertLikes);
                        }}
                      ></Input>
    
                      <FormLabel htmlFor="dislikes">Dislikes</FormLabel>
                      <Input
                        id="dislikes"
                        type="number"
                        onChange={(ev) => {
                          console.log(ev.target.value);
                          setInsertDislikes(ev.target.value);
                          console.log("new dislikes:", insertDislikes);
                        }}
                      ></Input>
    
                      <FormLabel htmlFor="comments">Comments</FormLabel>
                      <Input
                        id="comments"
                        type="number"
                        onChange={(ev) => {
                          console.log(ev.target.value);
                          setInsertCommentCount(ev.target.value);
                          console.log("new comment count:", insertCommentCount);
                        }}
                      ></Input>
                    </FormControl>
                  </FormControl>
                </ModalBody>
    
                <ModalFooter>
                  {successfulInsert
                    ? "Video has been inserted successfully! Try searching for the video."
                    : ""}
                  <Button
                    variant="solid"
                    colorScheme="blue"
                    mx={5}
                    onClick={handleFormSubmit}
                    disabled={isError}
                  >
                    Submit
                  </Button>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </>
      );
    }
    