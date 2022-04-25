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

import { React, useState } from "react";

export default function SearchUpdate(video_id) {
  const [updateVideoTitle, setUpdateVideoTitle] = useState("");
  const [updateChannelTitle, setUpdateChannelTitle] = useState("");
  const [updateViews, setUpdateViews] = useState(0);
  const [updateDate, setUpdateDate] = useState("");
  const [updateLikes, setUpdateLikes] = useState(0);
  const [updateDislikes, setUpdateDislikes] = useState(0);
  const [updateCommentCount, setUpdateCommentCount] = useState(0);
  const [successfulUpdate, setSuccessfulUpdate] = useState(false);

  function handleFormSubmit() {
    console.log("what the", video_id["videoId"]);
    const backend_update_url = "http://127.0.0.1:8000/update/";
    var params = new URLSearchParams();
    params.append("video_id", video_id["videoId"]);
    params.append("video_title", updateVideoTitle);
    params.append("channel_title", updateChannelTitle);
    params.append("view_count", updateViews);
    params.append("trending_date", updateDate);
    params.append("video_likes", updateLikes);
    params.append("video_dislikes", updateDislikes);
    params.append("comment_count", updateCommentCount);

    var request = {
      params: params,
    };

    axios.get(backend_update_url, request).then(function (response) {
      let result = response.data;
      console.log("updated", result);
      if (result) {
        setSuccessfulUpdate(true);
      }
    });
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box mt={3}>
        <Button onClick={onOpen}>Update</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Update video fields</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormControl>
                  <FormLabel htmlFor="video_title">Video</FormLabel>
                  <Input
                    id="video_title"
                    type="text"
                    onChange={(ev) => {
                      setUpdateVideoTitle(ev.target.value);
                      console.log("new video title:", updateVideoTitle);
                    }}
                  ></Input>

                  <FormLabel htmlFor="channel_title">Channel</FormLabel>
                  <Input
                    id="channel_title"
                    type="text"
                    onChange={(ev) => {
                      console.log(ev.target.value);
                      setUpdateChannelTitle(ev.target.value);
                      console.log("new channel title:", updateChannelTitle);
                    }}
                  ></Input>

                  <FormLabel htmlFor="views">Views</FormLabel>
                  <Input
                    id="views"
                    type="number"
                    onChange={(ev) => {
                      console.log(ev.target.value);
                      setUpdateViews(ev.target.value);
                      console.log("new views:", updateViews);
                    }}
                  ></Input>

                  <FormLabel htmlFor="dateTrending">Date Trending</FormLabel>
                  <Input
                    id="dateTrending"
                    type="text"
                    onChange={(ev) => {
                      console.log(ev.target.value);
                      setUpdateDate(ev.target.value);
                      console.log("new date:", updateDate);
                    }}
                  ></Input>

                  <FormLabel htmlFor="likes">Likes</FormLabel>
                  <Input
                    id="likes"
                    type="number"
                    onChange={(ev) => {
                      console.log(ev.target.value);
                      setUpdateLikes(ev.target.value);
                      console.log("new likes:", updateLikes);
                    }}
                  ></Input>

                  <FormLabel htmlFor="dislikes">Dislikes</FormLabel>
                  <Input
                    id="dislikes"
                    type="number"
                    onChange={(ev) => {
                      console.log(ev.target.value);
                      setUpdateDislikes(ev.target.value);
                      console.log("new dislikes:", updateDislikes);
                    }}
                  ></Input>

                  <FormLabel htmlFor="videoId">Comments</FormLabel>
                  <Input
                    id="comments"
                    type="number"
                    onChange={(ev) => {
                      console.log(ev.target.value);
                      setUpdateCommentCount(ev.target.value);
                      console.log("new comment count:", updateCommentCount);
                    }}
                  ></Input>
                </FormControl>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              {successfulUpdate
                ? "Video has been updated successfully! Try searching it again."
                : ""}
              <Button
                variant="solid"
                colorScheme="blue"
                mx={5}
                onClick={handleFormSubmit}
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
