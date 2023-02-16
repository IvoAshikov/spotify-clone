import { ThemeProvider } from "styled-components";
import "./App.css";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./components/pages/Home";
import Library from "./components/pages/Library";
import Search from "./components/pages/Search";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Playlists from "./components/pages/Playlists";
import { useState } from "react";
import MobileFooter from "./components/MobileFooter";

const theme = {
  colors: {
    black: "#000",
    white: "#fff",
    gray: "#b3b3b3",
    border: "#282828",
    footerColor: "#181818",
    main: "#121212",
    topBar: "#070707",
  },
  images: {
    logo: "../../images/spotify-logo.png",
  },
};

function App() {
  const [sentURL, setSentURL] = useState("");
  const [coverImg, setCoverImg] = useState("");
  const [songName, setSongName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [isItTrue, setIsItTrue] = useState(false);

  const getData = (data) => {
    setSentURL(data);
  };

  const getCoverAndName = (cover, name, artist) => {
    setCoverImg(cover);
    setSongName(name);
    setArtistName(artist);
  };

  const playTrack = (isItClicked) => {
    if (isItClicked) {
      setIsItTrue(true);
    }
  };

  let screenWidth = window.screen.width;
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Navigate replace to="home" />} />

            <Route
              path="home"
              element={
                <>
                  <div style={{ display: "flex" }}>
                    {screenWidth >= 769 && <Sidebar />}
                    <Home />
                  </div>
                  {screenWidth >= 769 && <Footer />}
                  {screenWidth < 768 && <MobileFooter sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                </>
              }
            />

            <Route
              path="search"
              element={
                <>
                  <div style={{ display: "flex" }}>
                    {screenWidth >= 769 && <Sidebar />}
                    <Search />
                  </div>
                  {screenWidth >= 769 && <Footer />}
                  {screenWidth < 768 && <MobileFooter sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                </>
              }
            />

            <Route
              path="collection/playlists"
              element={
                <>
                  <div style={{ display: "flex" }}>
                    {screenWidth >= 769 && <Sidebar />}
                    <Library />
                  </div>
                  {screenWidth >= 769 && <Footer />}
                  {screenWidth < 768 && <MobileFooter sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                </>
              }
            />

            <Route
              path="collection/podcasts"
              element={
                <>
                  <div style={{ display: "flex" }}>
                    {screenWidth >= 769 && <Sidebar />}
                    <Library />
                  </div>
                  {screenWidth >= 769 && <Footer />}
                  {screenWidth < 768 && <MobileFooter sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                </>
              }
            />

            <Route
              path="collection/artists"
              element={
                <>
                  <div style={{ display: "flex" }}>
                    {screenWidth >= 769 && <Sidebar />}
                    <Library />
                  </div>
                  {screenWidth >= 769 && <Footer />}
                  {screenWidth < 768 && <MobileFooter sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                </>
              }
            />

            <Route
              path="collection/albums"
              element={
                <>
                  <div style={{ display: "flex" }}>
                    {screenWidth >= 769 && <Sidebar />}
                    <Library />
                  </div>
                  {screenWidth >= 769 && <Footer />}
                  {screenWidth < 768 && <MobileFooter sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                </>
              }
            />

            <Route
              path="playlist/house"
              element={
                <>
                  <div style={{ display: "flex" }}>
                    {screenWidth >= 769 && <Sidebar />}
                    <Playlists myFunc={getData} playTrack={playTrack} getCoverAndName={getCoverAndName} />
                  </div>
                  {screenWidth >= 769 && <Footer sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                  {screenWidth < 768 && <MobileFooter sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                </>
              }
            />
            <Route
              path="playlist/hiphop"
              element={
                <>
                  <div style={{ display: "flex" }}>
                    {screenWidth >= 769 && <Sidebar />}
                    <Playlists myFunc={getData} playTrack={playTrack} getCoverAndName={getCoverAndName} />
                  </div>
                  {screenWidth >= 769 && <Footer sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                  {screenWidth < 768 && <MobileFooter sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                </>
              }
            />

            <Route
              path="playlist/jazzblues"
              element={
                <>
                  <div style={{ display: "flex" }}>
                    {screenWidth >= 769 && <Sidebar />}
                    <Playlists myFunc={getData} playTrack={playTrack} getCoverAndName={getCoverAndName} />
                  </div>
                  {screenWidth >= 769 && <Footer sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                  {screenWidth < 768 && <MobileFooter sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                </>
              }
            />

            <Route
              path="playlist/oldschoolrock"
              element={
                <>
                  <div style={{ display: "flex" }}>
                    {screenWidth >= 769 && <Sidebar />}
                    <Playlists myFunc={getData} playTrack={playTrack} getCoverAndName={getCoverAndName} />
                  </div>
                  {screenWidth >= 769 && <Footer sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                  {screenWidth < 768 && <MobileFooter sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                </>
              }
            />

            <Route
              path="playlist/popsmoke"
              element={
                <>
                  <div style={{ display: "flex" }}>
                    {screenWidth >= 769 && <Sidebar />}
                    <Playlists myFunc={getData} playTrack={playTrack} getCoverAndName={getCoverAndName} />
                  </div>
                  {screenWidth >= 769 && <Footer sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                  {screenWidth < 768 && <MobileFooter sentURL={sentURL} howsTrue={isItTrue} cover={coverImg} songName={songName} artistName={artistName} />}
                </>
              }
            />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
