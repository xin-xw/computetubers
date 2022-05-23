import React from "react";
import Header from './components/home-page/Header'
import Sidebar from './components/home-page/Sidebar'
import RecommendedVideos from './components/home-page/RecommendedVideos'
import "./App.css"

// Chakra
import { ChakraProvider, Center } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/container";
import HomePageIndex from "./components/home-page/home-page-index";
import HomePageNavBar from "./components/home-page/home-page-nav";
import SearchIndex from "./routes/search";
import InsertIndex from "./routes/insert";
import DislikesvsViews from "./routes/dislikesvsviews";
import CapitalvsViews from "./routes/capitalvsviews";
import LikesvsViews from "./routes/likesvsviews";
import CommentsvsViews from "./routes/commentsvsviews";
import OtherAnalyticsIndex from "./routes/other-analytics";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {/*<HomePageNavBar></HomePageNavBar>
        <Container>*/}
        <div className="App">
          <Header />
          <div className="app_page">
            <Sidebar />
            <RecommendedVideos />
          </div>
        </div>
          <Routes>
            <Route path="/" element={<HomePageIndex></HomePageIndex>} />
            <Route path="search" element={<SearchIndex></SearchIndex>} />
            <Route path="insert" element={<InsertIndex />} />
            <Route path="dislikes-vs-views" element={<DislikesvsViews />} />
            <Route path="capital-vs-views" element={<CapitalvsViews />} />
            <Route path="likes-vs-views" element={<LikesvsViews />} />
            <Route path="comments-vs-views" element={<CommentsvsViews />} />
            <Route path="best-upload-time" element={<BestUploadTime />} />
            <Route path="best-upload-day" element={<BestUploadDay />} />
            <Route path="other-analytics" element={<OtherAnalyticsIndex />} />
          </Routes>
        {/*</Container>*/}
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
