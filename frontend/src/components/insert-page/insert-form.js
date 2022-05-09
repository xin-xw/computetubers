import {
  Stack,
  Heading,
  Flex,
  FormControl,
  Input,
  FormLabel,
  Box,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { React, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InsertForm() {
  const axios = require("axios");
  const [insertVideoTitle, setInsertVideoTitle] = useState("");
  const [insertChannelTitle, setInsertChannelTitle] = useState("");
  const [insertViews, setInsertViews] = useState(0);
  const [insertDate, setInsertDate] = useState("");
  const [insertLikes, setInsertLikes] = useState(0);
  const [insertDislikes, setInsertDislikes] = useState(0);
  const [insertCommentCount, setInsertCommentCount] = useState(0);
  const [successfulInsert, setSuccessfulInsert] = useState(false);

  const success_id = "success";

  const notify = () => {
    toast.success(
      "Your video has been inserted successfully into the database! Try searching for the video again.",
      {
        icon: "🚀",
        theme: "colored",
        toastId: success_id,
      }
    );
    setSuccessfulInsert(false);
  };

  const isError =
    insertVideoTitle === "" ||
    insertChannelTitle === "" ||
    insertViews === 0 ||
    insertDate === "" ||
    insertLikes === 0 ||
    insertDislikes === 0 ||
    insertCommentCount === 0;

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
  return (
    <Flex>
      <Stack direction={"column"}>
        <Heading size={"md"}>Input metadata fields</Heading>
        <Box my={"15px"} w={["300px", "750px"]}>
          <FormControl isRequired>
            <FormLabel htmlFor="video_title">Video</FormLabel>
            <Input
              size="md"
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

            <FormLabel htmlFor="comments">Number of comments</FormLabel>
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
        </Box>

        <Box>
          <Button
            mt={2}
            variant="outline"
            colorScheme="blue"
            onClick={handleFormSubmit}
            disabled={isError}
          >
            Submit
          </Button>
          <Box mt={3}>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnHover
            />
            {successfulInsert ? notify() : null}
          </Box>
        </Box>
      </Stack>
    </Flex>
  );
}
