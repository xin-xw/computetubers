import {
  Stack,
  Heading,
  Flex,
  Box,
  Image,
  useMediaQuery,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React from "react";

export default function AboutUs() {
  const { colorMode } = useColorMode();
  const [desktopQuery] = useMediaQuery("(min-width: 700px)");
  const [isMinWidth, setIsMinWidth] = useState(false);

  useEffect(() => {
    if (desktopQuery !== isMinWidth) {
      setIsMinWidth(desktopQuery);
    }
  }, [isMinWidth, desktopQuery]);

  return (
    <Stack>
      <Flex direction={isMinWidth ? "row" : "column"} mt={isMinWidth ? 15 : 0}>
        <Image
          src={
            colorMode === "dark"
              ? "/media/about-me/pfp-night-mode.svg"
              : "/media/about-me/pfp-facing-right.svg"
          }
          alt="Cartoon Picture Happy"
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="none"
          width="100px"
          height="160px"
          mt="3"
          display={isMinWidth ? "none" : "block"}
        />

        <Spacer></Spacer>
      </Flex>
    </Stack>
  );
}
