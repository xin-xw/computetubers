import React from 'react'
import ReactDOM from "react-dom";
import VideoCard from "./VideoCard"
import "./RecommendedVideos.css"
import {Icon, useColorModeValue, useColorMode, useDisclosure} from '@chakra-ui/react';


function RecommendedVideos() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="recommendedVideos">
        <h2>Recommended</h2>
        <div className="recommendedVideos_videos">
          <VideoCard 
            image = "https://i.ytimg.com/vi/FJ1lmZ73PrE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDcpwBExKeolbIFpmS_tmEhKA6dmA"
            title = "#3 Warriors at #4 Mavericks | Full Game Highlights"
            channel = "NBA"
            views = "1.4M"
            channelImage = "https://yt3.ggpht.com/rFBD18lZT2qeXNBkVMrqgCtRPX9ctXFRXVtrekvuPWMg2iiUzZrYmyR8PkuDgrDrbL9Vz8F8ABY=s68-c-k-c0x00ffffff-no-rj"
            timestamp = "5 hours ago"/>
          <VideoCard 
            image = "https://s.yimg.com/uu/api/res/1.2/b2BMc0kx3XLLAfJyFKrqfw--~B/Zmk9ZmlsbDtoPTM4MDt3PTY3NTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-02/e8b8e160-8f0d-11ec-b9dc-aa0b1001f95d.cf.webp"
            title = "Baby Shark Dance"
            channel = "Pinkfond Baby Shark"
            views = "10B"
            channelImage = "https://yt3.ggpht.com/ytc/AKedOLRNxWdQ8GBNi_QMDBirYx--UhKen9YPx1A4HN5ToA=s68-c-k-c0x00ffffff-no-rj"
            timestamp = "5 years ago"/>
          <VideoCard 
            image = "https://happymag.tv/wp-content/uploads/2022/04/Credit_-Gangnam-Stlye-870x524.jpg"
            title = "Psy - GANGNAM STYLE"
            channel = "officialpsy"
            views = "4.4B"
            channelImage = "https://yt3.ggpht.com/VXVR9IKCRGRAtjdXcul8EcB2MoT1ZC7d8YMlkzVfB8Iuulf3WK5HA_h6BihPBe-OnpS4Fufrag=s176-c-k-c0x00ffffff-no-rj-mo"
            timestamp = "9 years ago"
          />
          <VideoCard 
            image = "https://www.incimages.com/uploaded_files/image/1920x1080/getty_513189787_110007.jpg"
            title = "Funny Cats and Kittens Meowing Compilation"
            channel = "funnyplox"
            views = "461M"
            channelImage = "https://yt3.ggpht.com/IaS4lcwMLuk43rH1EZ978jpB91ccc8fJns8x6lzdfufMSg6uWx2vDDFji1d3bgvbd0vV-74Hzw=s176-c-k-c0x00ffffff-no-rj-mo"
            timestamp = "8 years ago"
          />
          <VideoCard 
            image = "https://i.ytimg.com/vi/hD1YtmKXNb4/maxresdefault.jpg"
            title = "$10,000 Every Day You Survive Prison"
            channel = "MrBeast"
            views = "56M"
            channelImage = "https://yt3.ggpht.com/ytc/AKedOLRRFzjl1mXuK6o4obbHJ0K90j3Pk6_zj5C6IWGayg=s176-c-k-c0x00ffffff-no-rj-mo"
            timestamp = "1 month ago"
          />
          <VideoCard 
            image = "https://i.ytimg.com/vi/NI2YPAo7CdE/maxresdefault.jpg"
            title = "Amber Heard warned of perjury risk after being accused of changing abuse allegation"
            channel = "LiveNow from FOX"
            views = "8.4M"
            channelImage = "https://yt3.ggpht.com/7w6FB0pXZwcTB6am57OXYaOF-vra1-oAEtsMS1sRu7MazRzzUCpCY6rKwz8Xr4PzB3X5G4c=s176-c-k-c0x00ffffff-no-rj-mo"
            timestamp = "5 days ago"
          />
          <VideoCard 
            image = "https://i.ytimg.com/vi/ps8Y1tveMc4/maxresdefault.jpg"
            title = "Danger! These Acts Will Make Your Skin Crawl | AGT 2021"
            channel = "America's Got Talent"
            views = "1.2M"
            channelImage = "https://yt3.ggpht.com/m2DxAN0nvCqmP95Y7RhMym6OLe6fCWJh4xgYAJbWDefSQmWwE5PiIHHoMsPk7nV8hBRs748ovg=s68-c-k-c0x00ffffff-no-rj"
            timestamp = "3 months ago"
          />
          <VideoCard 
            image = "https://i.ytimg.com/vi/kffacxfA7G4/maxresdefault.jpg"
            title = "Justin Bieber - Baby (Official Music Video) ft. Ludacris"
            channel = "Justin Bieber"
            views = "2.7B"
            channelImage = "https://yt3.ggpht.com/ytc/AKedOLRJKV4nAcZgct6Z8NM8PyRpCGNUrOlEx0Xx-f9_dQ=s88-c-k-c0x00ffffff-no-rj"
            timestamp = "12 years ago"
          />
        </div>

    </div>
  )
}

export default RecommendedVideos