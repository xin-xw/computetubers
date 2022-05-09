import React from "react";

// Chakra
import {
  Stack,
  Heading,
  Flex,
  Box,
  Image,
  useMediaQuery,
  Spacer,
  Center,
  useColorMode,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import OtherAnalyticsAverageTags from "../components/other-analytics/average-tags";

function OtherAnalyticsIndex() {
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
      <Box>
        <OtherAnalyticsAverageTags></OtherAnalyticsAverageTags>
      </Box>
    </Stack>
  );
}

export default OtherAnalyticsIndex;
