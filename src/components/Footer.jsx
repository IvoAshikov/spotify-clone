import React, { useEffect, useRef, useState } from "react";
import { Container } from "./styled/Container.styled";
import { AuthorText, CoverArtImage, FooterStyle, IconButton, RangeInput, TitleText, TrackDuration, VolumeInput } from "./styled/Footer.styled";
import PopSmoke from "../images/meet-the-woo-cover.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { MdPictureInPictureAlt, MdOutlineQueueMusic, MdCastConnected, MdForward10, MdReplay10 } from "react-icons/md";
import { BiShuffle } from "react-icons/bi";
import { GrPlayFill } from "react-icons/gr";
import { TbRepeat } from "react-icons/tb";
import { PlayButton } from "./styled/PlayButton.styled";
import { TbMicrophone2 } from "react-icons/tb";
import { HiOutlineSpeakerWave, HiOutlineSpeakerXMark } from "react-icons/hi2";
import { GiPauseButton } from "react-icons/gi";

function Footer({ sentURL, howsTrue, songName, artistName, cover }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeZero, setVolumeZero] = useState(false); // State for changing the volume icon
  const [currentTimeTrack, setCurrentTimeTrack] = useState(0);
  const audioPlayer = useRef();
  const volumeValue = useRef();
  const progressBar = useRef();
  const animationRef = useRef();

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

  const unmuteHandler = () => {
    volumeValue.current.value = "50";
    setVolumeZero(false);
  };

  const muteHandler = () => {
    volumeValue.current.value = "0";
    setVolumeZero(true);
  };

  const setVolume = () => {
    audioPlayer.current.volume = volumeValue.current.value / 100;
    volumeValue.current.value === "0" ? setVolumeZero(true) : setVolumeZero(false);
  };

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
    <>
      <Container width="100%" pos="sticky" bottom="0">
        <FooterStyle>
          <Container jContent="space-between" padd="0 16px" height="95px" display="flex" width="100%">
            <Container mWidth="180px" width="30%" display="flex" jContent="flex-start">
              {/* PICTURE CONTAINER */}
              <Container pos="relative">
                <Container width="56px" height="56px" bShadow="0 0 10px rgb(0 0 0 / 30%)" bgColor="#282828">
                  <CoverArtImage src={cover != "" ? (cover === undefined ? PopSmoke : cover) : PopSmoke} />
                </Container>
              </Container>
              {/* END OF PICTURE CONTAINER */}
              {/* AUTHOR AND SONG NAME */}
              <Container margin="0 14px">
                <Container>
                  <TitleText>{songName != "" ? (songName === undefined ? "Get Back" : songName) : "Get Back"}</TitleText>
                </Container>
                <Container>
                  <AuthorText>{artistName != "" ? (artistName === undefined ? "Pop Smoke" : artistName) : "Pop Smoke"}</AuthorText>
                </Container>
              </Container>
              {/* END OF AUTHOR AND NAME SONG */}
              {/* LIKE AND PIP BUTTONS */}
              <IconButton>
                <AiOutlineHeart style={{ height: "20px", width: "20px" }} />
              </IconButton>
              <IconButton>
                <MdPictureInPictureAlt style={{ height: "20px", width: "20px" }} />
              </IconButton>
              {/* END OF LIKE AND PIP BUTTONS */}
            </Container>
            {/* PLAYER CONTROLS */}
            <Container maxWidth="722px" width="40%" display="flex" flexDirection="column">
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
              {/* TOP PART PLAYER CONTROLS */}
              <Container gap="16px" margin="0 0 8px 0" width="100%" flexFlow="row nowrap" jContent="center" display="flex">
                {/* LEFT PART PLAYER CONTROLS */}
                <Container gap="8px" jContent="flex-end" display="flex">
                  <IconButton>
                    <BiShuffle style={{ height: "20px", width: "20px" }} />
                  </IconButton>
                  <IconButton onClick={backTenSecondsHandler}>
                    <MdReplay10 style={{ height: "28px", width: "28px" }} />
                  </IconButton>
                </Container>
                {/* END OF LEFT PART PLAYER CONTROLS */}
                {/* PLAY/PAUSE PLAYER CONTROLS */}
                <PlayButton backgroundColor="#fff" onClick={handlePlayPauseClick}>
                  {!isPlaying ? <GrPlayFill style={{ width: "16px", height: "16px", marginLeft: "2px" }} /> : <GiPauseButton style={{ width: "20px", height: "20px" }} />}
                </PlayButton>
                {/* END OF PLAY/PAUSE PLAYER CONTROLS */}
                {/* RIGHT PART PLAYER CONTROLS */}
                <Container gap="8px" jContent="flex-end" display="flex">
                  <IconButton onClick={forwardTenSecondsHandler}>
                    <MdForward10 style={{ height: "28px", width: "28px" }} />
                  </IconButton>
                  <IconButton>
                    <TbRepeat style={{ height: "20px", width: "20px" }} />
                  </IconButton>
                </Container>
                {/* END OF RIGHT PART PLAYER CONTROLS */}
              </Container>
              {/* END OF TOP PART PLAYER CONTROLS */}
              {/* PROGRESS BAR */}
              <Container display="flex">
                <TrackDuration marginRight="10px">
                  0:{currentTimeTrack < 10 && 0}
                  {currentTimeTrack}
                </TrackDuration>
                <RangeInput type="range" min="0" max="29" defaultValue="0" onChange={changeRange} ref={progressBar} />
                <TrackDuration marginLeft="10px">0:29</TrackDuration>
              </Container>
              {/* END OF PROGRESS BAR */}
            </Container>
            {/* END OF PLAYER CONTROLS */}
            {/* RIGHT SIDE FOOTER */}
            <Container display="flex" jContent="flex-end" flexGrow="1">
              <IconButton>
                <TbMicrophone2 style={{ height: "20px", width: "20px" }} />
              </IconButton>
              <IconButton>
                <MdOutlineQueueMusic style={{ height: "22px", width: "22px" }} />
              </IconButton>
              <IconButton>
                <MdCastConnected style={{ height: "22px", width: "22px" }} />
              </IconButton>
              <IconButton>
                {!volumeZero ? (
                  <HiOutlineSpeakerWave style={{ height: "22px", width: "22px" }} onClick={muteHandler} />
                ) : (
                  <HiOutlineSpeakerXMark style={{ height: "22px", width: "22px" }} onClick={unmuteHandler} />
                )}
              </IconButton>
              <VolumeInput type="range" min="0" max="100" step="1" onChange={setVolume} ref={volumeValue} />
            </Container>
            {/* END OF RIGHT SIDE FOOTER */}
          </Container>
        </FooterStyle>
      </Container>
    </>
  );
}

export default Footer;
