import {
    Stack,
    Heading,
    Flex,
    FormControl,
    Input,
    FormLabel,
    Text,
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
  
  export default function SearchDelete(video_id) {
    const [successfulDelete, setSuccessfulDelete] = useState(false);

    function handleFormSubmit() {
      console.log("what the", video_id["videoId"]);
      const backend_delete_url = "http://127.0.0.1:8000/delete/";
      var params = new URLSearchParams();
      params.append("video_id", video_id["videoId"]);
  
      var request = {
        params: params,
      };
  
      axios.get(backend_delete_url, request).then(function (response) {
        let result = response.data;
        console.log("updated", result);
        if (result) {
          setSuccessfulDelete(true);
        }
      });
    }
  
    const closeModal = () => {
        setSuccessfulDelete(false);
        return onClose;
    }
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Box mt={3}>
          <Button onClick={onOpen}>Delete</Button>
  
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Delete Video</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>  
                    Are you sure you would like to delete this video?
                </Text>
              </ModalBody>
  
              <ModalFooter>
                {successfulDelete
                  ? "Video has been deleted successfully! Try searching it again."
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
  