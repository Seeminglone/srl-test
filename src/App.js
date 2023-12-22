import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/Home";
import VideoPage from "./pages/Videos";

import DriversPage from "./pages/Drivers";

import "@fontsource/roboto-condensed/300.css";
import "@fontsource/roboto-condensed/400.css";
import "@fontsource/roboto-condensed/500.css";
import "@fontsource/roboto-condensed/700.css";

const GlobalContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 60px;
  padding-bottom: 24px;
  margin-right: auto;
  margin-left: auto;
  min-height: calc(100vh - 144px);
`;


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <GlobalContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drivers" element={<DriversPage />} />
            <Route path="/videos" element={<VideoPage />} />
          </Routes>
        </GlobalContainer>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
