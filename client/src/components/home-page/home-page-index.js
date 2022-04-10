import { Stack, Heading, Flex, Box } from '@chakra-ui/react';
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
      </Stack>
    </Flex>
  );
}
