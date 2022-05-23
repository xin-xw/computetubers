import React, { ReactNode } from "react";
//import React from 'react'
import SidebarRow from './SidebarRow';
import {Icon, useColorModeValue, useColorMode, useDisclosure} from '@chakra-ui/react';
import {ImHome, ImFire, ImPlay} from 'react-icons/im';
import { HiThumbDown, HiThumbUp, HiAnnotation, HiDotsHorizontal } from "react-icons/hi";
import { GoGraph } from "react-icons/go";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

function Sidebar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div className="sidebar">
      
        {/**HOME**/}
        <Link
          rounded={"md"}
          _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
          }}
          as={RouterLink}
          to="/">
            <SidebarRow Icon={ImHome} title="Home" />
        </Link>

        {/**INSERT**/}
        <Link
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
          as={RouterLink}
          to="/insert">
            <SidebarRow Icon={ImFire} title="Insert Video" />
        </Link>

        {/**DISLIKE**/}
        <Link
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
          as={RouterLink}
          to="/Dislikes-vs-views">
          <SidebarRow Icon={HiThumbDown} title="Dislikes vs. Views" />
        </Link>

        {/**LIKE**/}
        <Link
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
          as={RouterLink}
          to="/likes-vs-views">
            <SidebarRow Icon={HiThumbUp} title="Likes vs. Views" />
        </Link>

        {/**COMMENT**/}
        <Link
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
          as={RouterLink}
          to="/comments-vs-views">
            <SidebarRow Icon={HiAnnotation} title="Comments vs. Views" />
        </Link>

        {/*CAPITAL*/}
        <Link
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
          as={RouterLink}
          to="/capital-vs-views">
            <SidebarRow Icon={GoGraph} title="Capital vs. Views" />
        </Link>
        
        {/*OTHER*/}
        <Link
          px={2}
          py={1}
          rounded={"md"}
          _hover={{
            textDecoration: "none",
            bg: useColorModeValue("gray.200", "gray.700"),
          }}
          as={RouterLink}
          to="/other-analytics">
            <SidebarRow Icon={HiDotsHorizontal} title="Other Analytics" />
        </Link>
      
        <hr/>
    </div>
  )
}

export default Sidebar