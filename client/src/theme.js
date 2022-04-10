import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

const breakpoints = createBreakpoints({
  sm: '700px',
  md: '800px',
  lg: '900px',
  xl: '1000px',
});

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '22px',
    '3xl': '30px',
    '4xl': '36px',
    '5xl': '42px',
    '6xl': '48px',
  },
  breakpoints,
});

export default theme;
