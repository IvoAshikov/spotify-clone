import React, { useState, useRef, useEffect } from "react";

import {
  AccountDropdownButton,
  AccountDropdownContainer,
  BigPlayerControlsButton,
  BigPlayerControlsContainer,
  BigPlayerDurationContainer,
  BigPlayerHideMoreButton,
  BigPlayerInput,
  BigPlayerInputContainer,
  BigPlayerPlayButton,
  BigPlayerText,
  BigPlayerTopNavigation,
  BigPlayerTrackNameContainer,
  CloseACCDropdownIconContainer,
  CoverImageContainer,
  FooterContainer,
  FooterIconText,
  FooterOnePart,
  FooterPlayerContainer,
  LibraryButton,
  LibraryButtonsContainer,
  LibraryPopUpContainer,
  LibraryText,
  LibraryTextContainer,
  PlayerArtistName,
  PlayerBigContainer,
  PlayerIconButton,
  PlayerImg,
  PlayerTrackName,
  SingleOptionContainer,
  SingleOptionText,
  SingleSmallOptionContainer,
  SingleSmallOptionText,
  SmallBorder,
  StyledLink,
  TopAuthorContainer,
  TriangleBubble,
} from "./styled/MobileFooter.styled";
import { FiSettings } from "react-icons/fi";
import { AiFillHome, AiOutlineClose, AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoLibraryOutline } from "react-icons/io5";
import { BsArrowUpRight, BsChevronDown, BsPlayFill, BsSpotify } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import PopSmoke from "../images/PopSmoke.jfif";
import { Container } from "./styled/Container.styled";
import { FaEllipsisH } from "react-icons/fa";
import { BiShuffle } from "react-icons/bi";
import { MdForward10, MdReplay10 } from "react-icons/md";
import { TbRepeat } from "react-icons/tb";
import { GrPlayFill } from "react-icons/gr";
import { GiPauseButton } from "react-icons/gi";

function MobileFooter({ sentURL, howsTrue, songName, artistName, cover }) {
  const [settingsDropdown, setSettingsDropdown] = useState(false);
  const [bigPlayer, setBigPlayer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTimeTrack, setCurrentTimeTrack] = useState(0);
  const [libraryClick, setLibraryClick] = useState(false);
  const audioPlayer = useRef();
  const progressBar = useRef();
  const animationRef = useRef();
  let location = useLocation();

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    animationRef.current = requestAnimationFrame(whilePlaying);
    setCurrentTimeTrack(progressBar.current.value);
  };

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  useEffect(() => {
    if (howsTrue === true) {
      setIsPlaying(true);
      handlePlayPauseClick();
    }
  }, [howsTrue]);

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    setCurrentTimeTrack(progressBar.current.value);
  };

  const backTenSecondsHandler = () => {
    audioPlayer.current.currentTime -= 10;
  };
  const forwardTenSecondsHandler = () => {
    audioPlayer.current.currentTime += 10;
  };

  return (
    <div>
      <audio
        src={
          sentURL != ""
            ? sentURL === undefined
              ? "https://p.scdn.co/mp3-preview/b683ded31eba04715678d2f52d91981bc3589c6c?cid=f6a40776580943a7bc5173125a1e8832"
              : sentURL
            : "https://p.scdn.co/mp3-preview/b683ded31eba04715678d2f52d91981bc3589c6c?cid=f6a40776580943a7bc5173125a1e8832"
        }
        ref={audioPlayer}
      ></audio>
      <div>
        {location.pathname === "/home" && (
          <AccountDropdownButton onClick={() => setSettingsDropdown(true)}>
            <FiSettings style={{ width: "24px", height: "24px" }} />
          </AccountDropdownButton>
        )}
        {/* ACCOUNT MENU */}
        {settingsDropdown && (
          <AccountDropdownContainer>
            <CloseACCDropdownIconContainer>
              <AccountDropdownButton onClick={() => setSettingsDropdown(false)}>
                <AiOutlineClose style={{ width: "24px", height: "24px" }} />
              </AccountDropdownButton>
            </CloseACCDropdownIconContainer>
            <Container padd="40px 40px 120px">
              <SingleOptionContainer>
                <SingleOptionText>
                  View Account
                  <BsArrowUpRight style={{ width: "24px", height: "24px", marginLeft: "15px" }} />
                </SingleOptionText>
              </SingleOptionContainer>
              <SingleOptionContainer>
                <SingleOptionText>Profile</SingleOptionText>
              </SingleOptionContainer>
              <SingleOptionContainer>
                <SingleOptionText>Log Out</SingleOptionText>
              </SingleOptionContainer>
              <SmallBorder />
              <a href="https://www.spotify.com/bg-bg/premium/" target="_blank" style={{ textDecoration: "none" }}>
                <SingleSmallOptionContainer>
                  <SingleSmallOptionText>Premium</SingleSmallOptionText>
                </SingleSmallOptionContainer>
              </a>
              <a href="https://www.spotify.com/bg-bg/legal/privacy-policy/" target="_blank" style={{ textDecoration: "none" }}>
                <SingleSmallOptionContainer>
                  <SingleSmallOptionText>Privacy</SingleSmallOptionText>
                </SingleSmallOptionContainer>
              </a>
              <a href="https://www.spotify.com/bg-bg/legal/end-user-agreement/" target="_blank" style={{ textDecoration: "none" }}>
                <SingleSmallOptionContainer>
                  <SingleSmallOptionText>Terms</SingleSmallOptionText>
                </SingleSmallOptionContainer>
              </a>
            </Container>
          </AccountDropdownContainer>
        )}
        {/* END OF ACCOUNT MENU */}
      </div>
      {/* FOOTER WITH NAVIGATION */}
      <FooterContainer>
        <StyledLink to="/home">
          <FooterOnePart>
            {location.pathname === "/home" ? <AiFillHome style={{ width: "30px", height: "30px", color: "white" }} /> : <AiOutlineHome style={{ width: "30px", height: "30px" }} />}
            <FooterIconText className={location.pathname === "/home" && "active"}>Home</FooterIconText>
          </FooterOnePart>
        </StyledLink>
        <StyledLink to="/search">
          <FooterOnePart>
            <HiMagnifyingGlass style={{ width: "30px", height: "30px" }} className={location.pathname === "/search" && "active"} />
            <FooterIconText className={location.pathname === "/search" && "active"}>Search</FooterIconText>
          </FooterOnePart>
        </StyledLink>
        <FooterOnePart onClick={() => setLibraryClick(!libraryClick)}>
          <IoLibraryOutline style={{ width: "30px", height: "30px" }} />
          <FooterIconText>Library</FooterIconText>
        </FooterOnePart>
        <FooterOnePart>
          <BsSpotify style={{ width: "30px", height: "30px" }} />
          <FooterIconText>Get App</FooterIconText>
        </FooterOnePart>
      </FooterContainer>
      {/* END OF FOOTER WITH CONTROLS */}
      {/* PLAYER CONTROLS */}
      <FooterPlayerContainer onClick={() => setBigPlayer(true)}>
        <PlayerImg src={cover != "" ? (cover === undefined ? PopSmoke : cover) : PopSmoke} />
        <Container>
          <PlayerTrackName>{songName != "" ? (songName === undefined ? "Get Back" : songName) : "Get Back"}</PlayerTrackName>
          <PlayerArtistName>{artistName != "" ? (artistName === undefined ? "Pop Smoke" : artistName) : "Pop Smoke"}</PlayerArtistName>
        </Container>
        <PlayerIconButton>{!isPlaying ? <BsPlayFill style={{ width: "24px", height: "24px" }} /> : <GiPauseButton style={{ width: "24px", height: "24px" }} />}</PlayerIconButton>
      </FooterPlayerContainer>
      {/* END OF PLAYER CONTROLS */}
      {/* PLAYER CONTROLS FULL SCREEN */}
      {bigPlayer && (
        <PlayerBigContainer>
          {/* TOP PART OF THE PLAYER */}
          <BigPlayerTopNavigation>
            {/* HIDE BUTTON */}
            <BigPlayerHideMoreButton onClick={() => setBigPlayer(false)}>
              <BsChevronDown style={{ width: "24px", height: "24px", color: "white" }} />
            </BigPlayerHideMoreButton>
            {/* END OF HIDE BUTTON */}
            {/* ARTIST */}
            <TopAuthorContainer>
              <BigPlayerText fontSize="0.8125rem" jContent="center">
                Pop Smoke
              </BigPlayerText>
            </TopAuthorContainer>
            {/* END OF ARTIST */}
            <BigPlayerHideMoreButton>
              <FaEllipsisH style={{ width: "24px", height: "24px", color: "white" }} />
            </BigPlayerHideMoreButton>
          </BigPlayerTopNavigation>
          {/* END OF TOP PART OF THE PLAYER */}
          {/* COVER IMAGE */}
          <Container display="flex" jContent="center">
            <CoverImageContainer>
              <img src={cover != "" ? (cover === undefined ? PopSmoke : cover) : PopSmoke} style={{ width: "300px", height: "292px" }} />
            </CoverImageContainer>
          </Container>
          {/* END OF COVER IMAGE */}
          {/* ARTIST AND TRACK NAME */}
          <BigPlayerTrackNameContainer>
            <Container>
              <BigPlayerText fontSize="1.5rem">Get Back</BigPlayerText>
              <BigPlayerText opacity=".7" fontF="SpotifyMedium">
                Pop Smoke
              </BigPlayerText>
            </Container>
            <AiOutlineHeart style={{ width: "24px", height: "24px", marginLeft: "auto" }} />
          </BigPlayerTrackNameContainer>
          {/* END OF ARTIST AND TRACK NAME */}
          {/* TRACK INPUT */}
          <BigPlayerInputContainer>
            <BigPlayerInput type="range" min="0" max="29" defaultValue="0" onChange={changeRange} ref={progressBar} />
          </BigPlayerInputContainer>
          <BigPlayerDurationContainer>
            <BigPlayerText fontF="SpotifyLight" fontSize="0.6875rem">
              0:{currentTimeTrack < 10 && 0}
              {currentTimeTrack}
            </BigPlayerText>
            <BigPlayerText fontF="SpotifyLight" fontSize="0.6875rem">
              0:29
            </BigPlayerText>
          </BigPlayerDurationContainer>
          {/* END OF TRACK INPUT */}
          {/* PLAYER CONTROLS */}
          <BigPlayerControlsContainer>
            <BigPlayerControlsButton>
              <BiShuffle style={{ width: "30px", height: "30px", color: "white" }} />
            </BigPlayerControlsButton>
            <BigPlayerControlsButton onClick={backTenSecondsHandler}>
              <MdReplay10 style={{ width: "30px", height: "30px", color: "white" }} />
            </BigPlayerControlsButton>
            <BigPlayerPlayButton onClick={handlePlayPauseClick}>
              {!isPlaying ? <GrPlayFill style={{ width: "24px", height: "24px", marginLeft: "4px" }} /> : <GiPauseButton style={{ width: "24px", height: "24px" }} />}
            </BigPlayerPlayButton>
            <BigPlayerControlsButton onClick={forwardTenSecondsHandler}>
              <MdForward10 style={{ width: "30px", height: "30px", color: "white" }} />
            </BigPlayerControlsButton>
            <BigPlayerControlsButton>
              <TbRepeat style={{ width: "30px", height: "30px", color: "white" }} />
            </BigPlayerControlsButton>
          </BigPlayerControlsContainer>
          {/* PLAYER CONTROLS */}
        </PlayerBigContainer>
      )}
      {/* END OF PLAYER CONTROLS FULL SCREEN */}
      {/* CLICK ON LIBRARY */}
      {libraryClick && (
        <>
          <LibraryPopUpContainer>
            <LibraryTextContainer>
              <LibraryText fontSize="1.125rem" fontF="SpotifyMedium">
                Enjoy Your Library
              </LibraryText>
              <LibraryText fontSize="0.8125rem" fontF="SpotifyLight" lineHeight="20px">
                See your saved songs, podcasts, artists, and playlists in the Spotify App.
              </LibraryText>
              <LibraryButtonsContainer>
                <LibraryButton backgroundColor="transparent" color="white" onClick={() => setLibraryClick(false)}>
                  Not Now
                </LibraryButton>
                <LibraryButton backgroundColor="white" color="black">
                  Get App
                </LibraryButton>
              </LibraryButtonsContainer>
            </LibraryTextContainer>
          </LibraryPopUpContainer>
          <TriangleBubble />
        </>
      )}
      {/* END OF CLICK ON LIBRARY */}
    </div>
  );
}

export default MobileFooter;
