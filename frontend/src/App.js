import React from "react";

// Chakra
import { ChakraProvider, Center } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from "./components/container";
import HomePageIndex from "./components/home-page/home-page-index";
import HomePageNavBar from "./components/home-page/home-page-nav";
import SearchIndex from "./routes/search";
import InsertIndex from "./routes/insert";
// import DislikesvsViews from "./routes/dislikesvsviews";
// import CapitalvsViews from "./routes/capitalvsviews";
// import LikesvsViews from "./routes/likesvsviews";
// import CommentsvsViews from "./routes/commentsvsviews";
import BestUploadTime from "./routes/bestuploadtime";
import BestUploadDay from "./routes/bestuploadday";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <HomePageNavBar></HomePageNavBar>
        <Container>
          <Routes>
            <Route path="/" element={<HomePageIndex></HomePageIndex>} />
            <Route path="search" element={<SearchIndex></SearchIndex>} />
            <Route path="insert" element={<InsertIndex />} />
            {/* <Route path="dislikes-vs-views" element={<DislikesvsViews />} />
            <Route path="capital-vs-views" element={<CapitalvsViews />} />
            <Route path="likes-vs-views" element={<LikesvsViews />} />
            <Route path="comments-vs-views" element={<CommentsvsViews />} /> */}
            <Route path="best-upload-time" element={<BestUploadTime />} />
            <Route path="best-upload-day" element={<BestUploadDay />} />
          </Routes>
        </Container>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
