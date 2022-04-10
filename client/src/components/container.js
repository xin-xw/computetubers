import React from 'react';
import { Box } from '@chakra-ui/react';

export const Container = props => (
  <Box
    w="full"
    mx="auto"
    maxW="2xl"
    px={{ base: '7', md: '8' }}
    overflow={'auto'}
    {...props}
  />
);

export default Container;
