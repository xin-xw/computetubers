import React from 'react'
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
  return (
    <div className="header">
        <div className="header_left">
            <MenuIcon />
            <img className="header_logo"
                src={require('./Computube_135_50_px.png')} />
            
        </div>

        <div className="header_input">
            <input placeholder="Search" type="text" />
            <SearchIcon className="header_inputButton"/>
        </div>

        <div className="header_icons">
            <VideoCallIcon className="header_icon"/>
            <AppsIcon className="header_icon"/>
            <NotificationsIcon className="header_icon"/>
            <AccountCircleIcon />
        </div>
        
    </div>
  )
}

export default Header