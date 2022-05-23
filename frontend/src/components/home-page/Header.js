import React from 'react'
import "./Header.css";
import {Icon, useColorMode, useDisclosure, IconButton} from '@chakra-ui/react'
import {HamburgerIcon, SearchIcon, PhoneIcon, DragHandleIcon, BellIcon, AtSignIcon, CloseIcon, SunIcon, MoonIcon} from '@chakra-ui/icons';
import { MdVideoCall, MdApps, MdAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {useColorModeValue} from '@chakra-ui/react';
import Avatar from "@material-ui/core/Avatar";


function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="header">
        <div className="header_left">
            <HamburgerIcon className="header_menu"
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              onClick={isOpen ? onClose : onOpen}
            />
            <img className="header_logo"
                src={require('./Computube_135_50_px.png')} />
            
        </div>

        <div className="header_input">
            <input placeholder="Search" type="text" />
            <Link
              px={2}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              as={RouterLink}
              to="/search">
                <SearchIcon className="header_inputButton"/>
            </Link>
        </div>

        <div className="header_icons">
            <IconButton className="header_icon"
              mx={"5"}
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
              borderRadius="md"
            />
            <MdVideoCall className="header_icon"/>
            <MdApps className="header_icon"/>
            <BellIcon className="header_icon"/>
            {/*<MdAccountCircle className="header_icon"/>*/}
            <Avatar className="header_avatar" alt="" src={require('./TC_pfp.png')} />
        </div>
        
    </div>
  )
}

export default Header