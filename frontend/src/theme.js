import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { mode } from "@chakra-ui/theme-tools";
import "@fontsource/ibm-plex-sans";

const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: true,
  },
  fonts: {
    heading: "IBM Plex Sans",
    body: "IBM Plex Sans",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "20px",
    "2xl": "22px",
    "3xl": "30px",
    "4xl": "36px",
    "5xl": "42px",
    "6xl": "48px",
  },
});

export default theme;
