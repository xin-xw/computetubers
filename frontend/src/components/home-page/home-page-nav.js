import { ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  Image,
  MenuItem,
  MenuDivider,
  Img,
  useColorMode,
  useDisclosure,
  useColorModeValue,
  Stack,
  Link,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

export default function HomePageNavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Center>
        <Box w={"1500px"} px={4} mb={"15px"}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <Box>
                <Img
                  w={"110px"}
                  src={
                    colorMode === "dark"
                      ? "media/computetubers_logo_dark.png"
                      : "media/computetubers_logo.png"
                  }
                  alt="logo"
                ></Img>
              </Box>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  as={RouterLink}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  as={RouterLink}
                  to="/search"
                >
                  Search
                </Link>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  as={RouterLink}
                  to="/insert"
                >
                  Insert Video to Database
                </Link>
                <Link
                  px={2}
                  py={1}
                  rounded={"md"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                  as={RouterLink}
                  to="/other-analytics"
                >
                  Analytics
                </Link>
              </HStack>
            </HStack>
            <Flex alignItems={"center"}>
              <Menu>
                <IconButton
                  mx={"5"}
                  icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
                  onClick={toggleColorMode}
                  borderRadius="md"
                  // variant="outline"
                />
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"md"}
                    src={"/media/team_computetubers_pfp.png"}
                  />
                </MenuButton>
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                <Link px={2} py={1} rounded={"md"} as={RouterLink} to="/">
                  Home
                </Link>
                <Link px={2} py={1} rounded={"md"} as={RouterLink} to="/search">
                  Search
                </Link>
                <Link px={2} py={1} rounded={"md"} as={RouterLink} to="/insert">
                  Insert Video to Database
                </Link>
              </Stack>
            </Box>
          ) : null}
        </Box>
      </Center>
    </>
  );
}
