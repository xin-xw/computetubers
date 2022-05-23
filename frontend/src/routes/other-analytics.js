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
import TagsVsViewIndex from "../components/other-analytics/tags-vs-view-index";
import CapitalvsViewsChart from "../components/analytics/capital-vs-views";
import LikesvsViews from "../components/analytics/likes-vs-views";
import DislikevsViews from "../components/analytics/dislikes-vs-views";
import CommentsvsViewsChart from "../components/analytics/comments-vs-views";
import BestUploadTimeChart from "../components/analytics/best-upload-time";
import BestUploadDayChart from "../components/analytics/best-upload-day";

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
      <Box>
        <TagsVsViewIndex></TagsVsViewIndex>
      </Box>
      <Box>
      <CapitalvsViewsChart></CapitalvsViewsChart>
      </Box>
      <Box>
        <LikesvsViews></LikesvsViews>
        </Box>
        <Box>
        <DislikevsViews></DislikevsViews>
        </Box>
        <Box>
        <CommentsvsViewsChart></CommentsvsViewsChart>
        </Box>
        <BestUploadTimeChart></BestUploadTimeChart>
        <Box>
        <BestUploadDayChart></BestUploadDayChart>
        </Box>
    </Stack>
  );
}

export default OtherAnalyticsIndex;
