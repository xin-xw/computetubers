import { Input, Flex, Box } from '@chakra-ui/react';
import { React, useState, useEffect } from 'react';

export default function HomePageSearch() {
  const [searchValue, setSearchValue] = useState('');
  const handleChange = e => setSearchValue(e.target.value);
  console.log(searchValue);

  return (
    <Flex>
      <Input
        variant={'outline'}
        value={searchValue}
        onChange={handleChange}
        placeholder="try typing something..."
        size="lg"
      />
    </Flex>
  );
}
