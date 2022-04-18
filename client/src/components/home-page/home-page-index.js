import { Stack, Heading, Flex, Box } from '@chakra-ui/react';
import HomePageSearch from './home-page-search';
import React from 'react';

export default function HomePageIndex() {
  return (
    <Flex>
      <Stack>
        <Box my={1}>
          <Heading fontSize="5xl" fontWeight="bold">
            ComputeTubers
          </Heading>
        </Box>
        <Box my={1}>
          <Heading fontSize="4xl" fontWeight="bold">
            Search
          </Heading>
          <HomePageSearch></HomePageSearch>
        </Box>
      </Stack>
    </Flex>
  );
}
