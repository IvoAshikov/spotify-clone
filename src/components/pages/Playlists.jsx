import React, { useEffect, useRef, useState } from "react";
import { StickyTopBar, BackAndForwardButton, UpgradeButton, ProfileImgContainer, AccountText, AccountContainer, DropdownContainer, DropdownButton, DropdownText } from "../styled/Main.styled";
import { Container } from "../styled/Container.styled";
import { BsPerson, BsFillCaretDownFill, BsPlayFill, BsCaretUpFill } from "react-icons/bs";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";
import {
  AlbumAuthorNameInfoContainer,
  AlbumAuthorNameText,
  AlbumCoverBigContainer,
  AlbumInfoName,
  AlbumInfoText,
  AlbumInfoTextContainer,
  AlbumLengthText,
  ContainerForBackground,
  MoreOptionsButton,
  PlaylistControlsContainer,
  PlaylistGreenPlayButton,
  PlaylistStickyText,
  PlaylistStickyGrid,
  TopPartPlaylist,
  PlaylistCoverImage,
} from "../styled/Playlist.styled";
import { FaEllipsisH } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi2";
import PlaylistSongs from "../PlaylistSongs";
import { getRapidKey } from "../Key";
import { getRapidHost } from "../Key";

function Playlists({ myFunc, playTrack, getCoverAndName }) {
  const refOne = useRef(null); // Ref for Click Outside
  const [topBarOpacity, setTopBarOpacity] = useState(0);
  const [accountDropdown, setAccountDropdown] = useState(false); // State for Account Dropdown Menu
  const location = useLocation();
  let playlistId = "64dis5Xaho9bf4EgTQkDrD";
  let playlistIDS = {
    popsmoke: "64dis5Xaho9bf4EgTQkDrD",
    oldschoolrock: "7w52PeAp6rDl3XQCb6eILa",
    jazzblues: "3K8vbz38UOh4lUS7QD6yas",
    hiphop: "5hEM5FzKLOw4N0BYETWExZ",
    house: "310hboNemo0euXQzwh9JdL",
  };

  if (location.pathname === "/playlist/house") {
    playlistId = playlistIDS.house;
  } else if (location.pathname === "/playlist/oldschoolrock") {
    playlistId = playlistIDS.oldschoolrock;
  } else if (location.pathname === "/playlist/jazzblues") {
    playlistId = playlistIDS.jazzblues;
  } else if (location.pathname === "/playlist/hiphop") {
    playlistId = playlistIDS.hiphop;
  } else if (location.pathname === "/playlist/popsmoke") {
    playlistId = playlistIDS.popsmoke;
  }

  // CLOSING ACCOUNT DROPDOWN ON CLICK OUTSIDE
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  });

  const handleClickOutside = (e) => {
    if (refOne.current !== null && !refOne.current.contains(e.target)) {
      setAccountDropdown(false);
    }
  };
  // END OF CLOSING ACCOUNT DROPDOWN ON CLICK OUTSIDE

  // TOP BAR OPACITY
  const listenScrollEvent = () => {
    if (window.scrollY === 0) {
      setTopBarOpacity(0);
    } else if (window.scrollY > 1 && window.scrollY <= 199) {
      setTopBarOpacity(window.scrollY / 200);
    } else if (window.scrollY > 200) {
      setTopBarOpacity(1);
    }
  };
  window.addEventListener("scroll", listenScrollEvent);
  // END OF TOP BAR OPACITY

  // NAVIGATE BUTTONS
  const navigate = useNavigate();
  // END NAVIGATE BUTTONS

  const [onePlaylist, setOnePlaylist] = useState([]);

  // GET PLAYLISTS
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": `${getRapidKey()}`,
      "X-RapidAPI-Host": `${getRapidHost()}`,
    },
  };
  useEffect(() => {
    fetch(`https://spotify81.p.rapidapi.com/playlist_tracks?id=${playlistId}`, options)
      .then((response) => response.json())
      .then((response) => {
        setOnePlaylist(response.items);
      })
      .catch((err) => console.error(err));
  }, [playlistId]);

  // END OF GET PLAYLISTS

  const getURL = (data2) => {
    myFunc(data2);
  };

  const getPlayTrack = (isItClicked2) => {
    playTrack(isItClicked2);
  };

  const coverAndName = (cover, name, artist) => {
    getCoverAndName(cover, name, artist);
  };

  let screenWidth = window.screen.width;

  return (
    <>
      <Container widthM="100%" paddM="0 0 10rem 0" padd="0 0 32px 0" bgColor="#121212" width="calc(100vw - 251px)">
        {screenWidth > 769 && (
          <Container>
            <StickyTopBar style={{ opacity: topBarOpacity }}></StickyTopBar>
            <Container display="flex" height="64px" padd="0 48px" pos="fixed" zIndex="11" jContent="space-between" width="calc(100vw - 251px)">
              {/* NAVIGATE BACK AND FORWARD BUTTONS */}
              <Container display="flex">
                <BackAndForwardButton onClick={() => navigate(-1)}>
                  <IoChevronBack style={{ width: "22px", height: "22px" }} />
                </BackAndForwardButton>
                <BackAndForwardButton marginLeft="16px" onClick={() => navigate(1)}>
                  <IoChevronForward style={{ width: "22px", height: "22px" }} />
                </BackAndForwardButton>
              </Container>
              {/* END OF NAVIGATE BACK AND FORWARD BUTTONS */}
              {/* RIGHT PART  */}
              <Container display="flex" pos="relative" ref={refOne}>
                <UpgradeButton>Upgrade</UpgradeButton>
                <AccountContainer onClick={() => setAccountDropdown(!accountDropdown)}>
                  <ProfileImgContainer>
                    <BsPerson style={{ width: "22px", height: "22px" }} />
                  </ProfileImgContainer>
                  <AccountText>Ivo Ashikov</AccountText>
                  {!accountDropdown && <BsFillCaretDownFill style={{ marginTop: "3px" }} />}
                  {accountDropdown && <BsCaretUpFill />}
                </AccountContainer>
                {/* ACCOUNT DROPDOWN */}
                {accountDropdown && (
                  <DropdownContainer>
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <DropdownButton>
                          <DropdownText>Account</DropdownText>
                          <BiLinkExternal style={{ width: "20px", height: "20px" }} />
                        </DropdownButton>
                      </li>
                      <li>
                        <DropdownButton>
                          <DropdownText>Profile</DropdownText>
                        </DropdownButton>
                      </li>
                      <li>
                        <DropdownButton>
                          <DropdownText>Upgrade To Premium</DropdownText>
                          <BiLinkExternal style={{ width: "20px", height: "20px" }} />
                        </DropdownButton>
                      </li>
                      <li>
                        <DropdownButton style={{ borderBottom: "1px solid hsla(0,0%,100%,.1)" }}>
                          <DropdownText>Settings</DropdownText>
                        </DropdownButton>
                      </li>
                      <li>
                        <DropdownButton>
                          <DropdownText>Log Out</DropdownText>
                        </DropdownButton>
                      </li>
                    </ul>
                  </DropdownContainer>
                )}
                {/* END OF ACCOUNT DROPDOWN */}
              </Container>
              {/* END OF RIGHT PART */}
            </Container>
          </Container>
        )}

        {/* HOUSE PLAYLIST */}
        {location.pathname === "/playlist/house" && (
          <>
            {/* TOP PART OF PLAYLIST PAGE */}
            <TopPartPlaylist background="linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%), rgb(184, 80, 96)">
              {/* PLAYLIST PICTURE */}
              <AlbumCoverBigContainer>
                <PlaylistCoverImage src="https://mosaic.scdn.co/300/ab67616d0000b273237fe5a7fda3d07784dad0a5ab67616d0000b2737a9109a615e3813c3832eab4ab67616d0000b2738bbfb9384f9df518ad5edde0bd158d51c2987ec4ad8fdf0aca2d77d6d9aed708" />
              </AlbumCoverBigContainer>
              {/* END OF PLAYLIST PICTURE */}
              <AlbumInfoTextContainer>
                {screenWidth > 768 && <AlbumInfoText>playlist</AlbumInfoText>}
                {/* PLAYLIST NAME */}
                <AlbumInfoName>House</AlbumInfoName>
                {/* END OF PLAYLIST NAME */}
                {/* PLAYLIST INFORMATION */}
                <AlbumAuthorNameInfoContainer>
                  <AlbumAuthorNameText>Ivo Ashikov </AlbumAuthorNameText>
                  <AlbumLengthText color="white" fontFamily="SpotifyMedium">
                    • 40 songs
                  </AlbumLengthText>
                  <AlbumLengthText fontFamily="SpotifyLight">, 2hr 2 min</AlbumLengthText>
                </AlbumAuthorNameInfoContainer>
                {/* END OF PLAYLIST INFORMATION */}
              </AlbumInfoTextContainer>
            </TopPartPlaylist>
            {/* END OF TOP PART OF PLAYLIST PAGE */}
            {/* PLAY AND MORE OPTIONS BUTTON */}
            <ContainerForBackground background="linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%), rgb(184, 80, 96)">
              <PlaylistControlsContainer>
                <PlaylistGreenPlayButton>
                  <BsPlayFill style={{ width: "34px", height: "34px" }} />
                </PlaylistGreenPlayButton>
                <MoreOptionsButton>
                  <FaEllipsisH style={{ width: "34px", height: "34px" }} />
                </MoreOptionsButton>
              </PlaylistControlsContainer>
            </ContainerForBackground>
            {/* END OF PLAY AND MORE OPTIONS BUTTON */}
            {/* MAIN CONTENT / SONGS */}
            <Container padd="0 32px">
              {/* TOP PART OF THE PLAYLIST */}
              <PlaylistStickyGrid>
                <PlaylistStickyText justifySelf="start">#</PlaylistStickyText>
                <PlaylistStickyText justifySelf="start">title</PlaylistStickyText>
                {screenWidth > 768 && <PlaylistStickyText justifySelf="start">album</PlaylistStickyText>}
                {screenWidth > 768 && <PlaylistStickyText justifySelf="start">date added</PlaylistStickyText>}
                {screenWidth > 768 && (
                  <PlaylistStickyText justifySelf="flex-end">
                    <HiOutlineClock style={{ width: "20px", height: "20px", justifySelf: "flex-end" }} />
                  </PlaylistStickyText>
                )}
              </PlaylistStickyGrid>
              {/* END OF TOP PART OF THE PLAYLIST */}
            </Container>
            {/* PLAYLISTS */}
            {onePlaylist.map((song, ind) => (
              <PlaylistSongs
                key={song.track.id}
                songName={song.track.name}
                author={song.track.album.artists[0].name}
                link={song.track.album.images[0].url}
                duration={
                  Math.floor(song.track.duration_ms / 60000) + ":" + (((song.track.duration_ms % 60000) / 1000).toFixed(0) < 10 ? "0" : "") + ((song.track.duration_ms % 60000) / 1000).toFixed(0)
                }
                index={ind + 1}
                albumName={song.track.album.name}
                previewURL={song.track.preview_url}
                ogData={getURL}
                getPlayTrack={getPlayTrack}
                coverAndName={coverAndName}
              />
            ))}
            {/* END OF PLAYLISTS */}
          </>
        )}
        {/* END OF HOUSE PLAYLIST */}

        {/* HIP HOP PLAYLIST */}
        {location.pathname === "/playlist/hiphop" && (
          <>
            {/* TOP PART OF PLAYLIST PAGE */}
            <TopPartPlaylist background="linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%), rgb(192, 64, 16)">
              {/* PLAYLIST PICTURE */}
              <AlbumCoverBigContainer>
                <PlaylistCoverImage src="https://mosaic.scdn.co/300/ab67616d0000b2736275aeac316378b0dd4f31fdab67616d0000b2737028679269dc6a5a29ce8f36ab67616d0000b2739c188c494d8bfaf895411890ab67616d0000b273e5d4be66b75f70d2ffc7b134" />
              </AlbumCoverBigContainer>
              {/* END OF PLAYLIST PICTURE */}
              <AlbumInfoTextContainer>
                {screenWidth > 768 && <AlbumInfoText>playlist</AlbumInfoText>}
                {/* PLAYLIST NAME */}
                <AlbumInfoName>Hip Hop</AlbumInfoName>
                {/* END OF PLAYLIST NAME */}
                {/* PLAYLIST INFORMATION */}
                <AlbumAuthorNameInfoContainer>
                  <AlbumAuthorNameText>Ivo Ashikov </AlbumAuthorNameText>
                  <AlbumLengthText color="white" fontFamily="SpotifyMedium">
                    • 80 songs
                  </AlbumLengthText>
                  <AlbumLengthText fontFamily="SpotifyLight">, 5 hr 5 min</AlbumLengthText>
                </AlbumAuthorNameInfoContainer>
                {/* END OF PLAYLIST INFORMATION */}
              </AlbumInfoTextContainer>
            </TopPartPlaylist>
            {/* END OF TOP PART OF PLAYLIST PAGE */}
            {/* PLAY AND MORE OPTIONS BUTTON */}
            <ContainerForBackground background="linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%), rgb(192, 64, 16)">
              <PlaylistControlsContainer>
                <PlaylistGreenPlayButton>
                  <BsPlayFill style={{ width: "34px", height: "34px" }} />
                </PlaylistGreenPlayButton>
                <MoreOptionsButton>
                  <FaEllipsisH style={{ width: "34px", height: "34px" }} />
                </MoreOptionsButton>
              </PlaylistControlsContainer>
            </ContainerForBackground>
            {/* END OF PLAY AND MORE OPTIONS BUTTON */}
            {/* MAIN CONTENT / SONGS */}
            <Container padd="0 32px">
              {/* TOP PART OF THE PLAYLIST */}
              <PlaylistStickyGrid>
                <PlaylistStickyText justifySelf="start">#</PlaylistStickyText>
                <PlaylistStickyText justifySelf="start">title</PlaylistStickyText>
                {screenWidth > 768 && <PlaylistStickyText justifySelf="start">album</PlaylistStickyText>}
                {screenWidth > 768 && <PlaylistStickyText justifySelf="start">date added</PlaylistStickyText>}
                {screenWidth > 768 && (
                  <PlaylistStickyText justifySelf="flex-end">
                    <HiOutlineClock style={{ width: "20px", height: "20px", justifySelf: "flex-end" }} />
                  </PlaylistStickyText>
                )}
              </PlaylistStickyGrid>
              {/* END OF TOP PART OF THE PLAYLIST */}
            </Container>
            {/* PLAYLISTS */}
            {onePlaylist.map((song, ind) => (
              <PlaylistSongs
                key={song.track.id}
                songName={song.track.name}
                author={song.track.album.artists[0].name}
                link={song.track.album.images[0].url}
                duration={
                  Math.floor(song.track.duration_ms / 60000) + ":" + (((song.track.duration_ms % 60000) / 1000).toFixed(0) < 10 ? "0" : "") + ((song.track.duration_ms % 60000) / 1000).toFixed(0)
                }
                index={ind + 1}
                albumName={song.track.album.name}
                previewURL={song.track.preview_url}
                ogData={getURL}
                getPlayTrack={getPlayTrack}
                coverAndName={coverAndName}
              />
            ))}
            {/* END OF PLAYLISTS */}
          </>
        )}

        {/* JAZZ/BLUES PLAYLIST */}
        {location.pathname === "/playlist/jazzblues" && (
          <>
            {/* TOP PART OF PLAYLIST PAGE */}
            <TopPartPlaylist background="linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%), rgb(144, 96, 96)">
              {/* PLAYLIST PICTURE */}
              <AlbumCoverBigContainer>
                <PlaylistCoverImage src="https://mosaic.scdn.co/640/ab67616d0000b2730cb07caeaf9f15bde3b20f44ab67616d0000b27362bb153033d60420709cc074ab67616d0000b273cdb7e8cec1c8202a4a7a5ca2ab67616d0000b273d14c9f38f597513e0fa083aa" />
              </AlbumCoverBigContainer>
              {/* END OF PLAYLIST PICTURE */}
              <AlbumInfoTextContainer>
                {screenWidth > 768 && <AlbumInfoText>playlist</AlbumInfoText>}
                {/* PLAYLIST NAME */}
                <AlbumInfoName>Jazz/Blues</AlbumInfoName>
                {/* END OF PLAYLIST NAME */}
                {/* PLAYLIST INFORMATION */}
                <AlbumAuthorNameInfoContainer>
                  <AlbumAuthorNameText>Ivo Ashikov </AlbumAuthorNameText>
                  <AlbumLengthText color="white" fontFamily="SpotifyMedium">
                    • 36 songs
                  </AlbumLengthText>
                  <AlbumLengthText fontFamily="SpotifyLight">, 3 hr 57 min</AlbumLengthText>
                </AlbumAuthorNameInfoContainer>
                {/* END OF PLAYLIST INFORMATION */}
              </AlbumInfoTextContainer>
            </TopPartPlaylist>
            {/* END OF TOP PART OF PLAYLIST PAGE */}
            {/* PLAY AND MORE OPTIONS BUTTON */}
            <ContainerForBackground background="linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%), rgb(144, 96, 96)">
              <PlaylistControlsContainer>
                <PlaylistGreenPlayButton>
                  <BsPlayFill style={{ width: "34px", height: "34px" }} />
                </PlaylistGreenPlayButton>
                <MoreOptionsButton>
                  <FaEllipsisH style={{ width: "34px", height: "34px" }} />
                </MoreOptionsButton>
              </PlaylistControlsContainer>
            </ContainerForBackground>
            {/* END OF PLAY AND MORE OPTIONS BUTTON */}
            {/* MAIN CONTENT / SONGS */}
            <Container padd="0 32px">
              {/* TOP PART OF THE PLAYLIST */}
              <PlaylistStickyGrid>
                <PlaylistStickyText justifySelf="start">#</PlaylistStickyText>
                <PlaylistStickyText justifySelf="start">title</PlaylistStickyText>
                {screenWidth > 768 && <PlaylistStickyText justifySelf="start">album</PlaylistStickyText>}
                {screenWidth > 768 && <PlaylistStickyText justifySelf="start">date added</PlaylistStickyText>}
                {screenWidth > 768 && (
                  <PlaylistStickyText justifySelf="flex-end">
                    <HiOutlineClock style={{ width: "20px", height: "20px", justifySelf: "flex-end" }} />
                  </PlaylistStickyText>
                )}
              </PlaylistStickyGrid>
              {/* END OF TOP PART OF THE PLAYLIST */}
            </Container>
            {/* PLAYLISTS */}
            {onePlaylist.map((song, ind) => (
              <PlaylistSongs
                key={song.track.id}
                songName={song.track.name}
                author={song.track.album.artists[0].name}
                link={song.track.album.images[0].url}
                duration={
                  Math.floor(song.track.duration_ms / 60000) + ":" + (((song.track.duration_ms % 60000) / 1000).toFixed(0) < 10 ? "0" : "") + ((song.track.duration_ms % 60000) / 1000).toFixed(0)
                }
                index={ind + 1}
                albumName={song.track.album.name}
                previewURL={song.track.preview_url}
                ogData={getURL}
                getPlayTrack={getPlayTrack}
                coverAndName={coverAndName}
              />
            ))}
            {/* END OF PLAYLISTS */}
          </>
        )}

        {/* OLD SCHOOL ROCK PLAYLIST */}
        {location.pathname === "/playlist/oldschoolrock" && (
          <>
            {/* TOP PART OF PLAYLIST PAGE */}
            <TopPartPlaylist background="linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%), rgb(32, 104, 200)">
              {/* PLAYLIST PICTURE */}
              <AlbumCoverBigContainer>
                <PlaylistCoverImage src="https://mosaic.scdn.co/300/ab67616d0000b273015c484a7aca592df1a77828ab67616d0000b2734637341b9f507521afa9a778ab67616d0000b2739f2023d391c3bd4acf4d51c6ab67616d0000b273c8a11e48c91a982d086afc69" />
              </AlbumCoverBigContainer>
              {/* END OF PLAYLIST PICTURE */}
              <AlbumInfoTextContainer>
                {screenWidth > 768 && <AlbumInfoText>playlist</AlbumInfoText>}
                {/* PLAYLIST NAME */}
                <AlbumInfoName>Old School Rock</AlbumInfoName>
                {/* END OF PLAYLIST NAME */}
                {/* PLAYLIST INFORMATION */}
                <AlbumAuthorNameInfoContainer>
                  <AlbumAuthorNameText>Ivo Ashikov </AlbumAuthorNameText>
                  <AlbumLengthText color="white" fontFamily="SpotifyMedium">
                    • 35 songs
                  </AlbumLengthText>
                  <AlbumLengthText fontFamily="SpotifyLight">, 3 hr 17 min</AlbumLengthText>
                </AlbumAuthorNameInfoContainer>
                {/* END OF PLAYLIST INFORMATION */}
              </AlbumInfoTextContainer>
            </TopPartPlaylist>
            {/* END OF TOP PART OF PLAYLIST PAGE */}
            {/* PLAY AND MORE OPTIONS BUTTON */}
            <ContainerForBackground background="linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%), rgb(32, 104, 200)">
              <PlaylistControlsContainer>
                <PlaylistGreenPlayButton>
                  <BsPlayFill style={{ width: "34px", height: "34px" }} />
                </PlaylistGreenPlayButton>
                <MoreOptionsButton>
                  <FaEllipsisH style={{ width: "34px", height: "34px" }} />
                </MoreOptionsButton>
              </PlaylistControlsContainer>
            </ContainerForBackground>
            {/* END OF PLAY AND MORE OPTIONS BUTTON */}
            {/* MAIN CONTENT / SONGS */}
            <Container padd="0 32px">
              {/* TOP PART OF THE PLAYLIST */}
              <PlaylistStickyGrid>
                <PlaylistStickyText justifySelf="start">#</PlaylistStickyText>
                <PlaylistStickyText justifySelf="start">title</PlaylistStickyText>
                {screenWidth > 768 && <PlaylistStickyText justifySelf="start">album</PlaylistStickyText>}
                {screenWidth > 768 && <PlaylistStickyText justifySelf="start">date added</PlaylistStickyText>}
                {screenWidth > 768 && (
                  <PlaylistStickyText justifySelf="flex-end">
                    <HiOutlineClock style={{ width: "20px", height: "20px", justifySelf: "flex-end" }} />
                  </PlaylistStickyText>
                )}
              </PlaylistStickyGrid>
              {/* END OF TOP PART OF THE PLAYLIST */}
            </Container>
            {/* PLAYLISTS */}
            {onePlaylist.map((song, ind) => (
              <PlaylistSongs
                key={song.track.id}
                songName={song.track.name}
                author={song.track.album.artists[0].name}
                link={song.track.album.images[0].url}
                duration={
                  Math.floor(song.track.duration_ms / 60000) + ":" + (((song.track.duration_ms % 60000) / 1000).toFixed(0) < 10 ? "0" : "") + ((song.track.duration_ms % 60000) / 1000).toFixed(0)
                }
                index={ind + 1}
                albumName={song.track.album.name}
                previewURL={song.track.preview_url}
                ogData={getURL}
                getPlayTrack={getPlayTrack}
                coverAndName={coverAndName}
              />
            ))}
            {/* END OF PLAYLISTS */}
          </>
        )}

        {/* POP SMOKE PLAYLIST */}
        {location.pathname === "/playlist/popsmoke" && (
          <>
            {/* TOP PART OF PLAYLIST PAGE */}
            <TopPartPlaylist background="linear-gradient(transparent 0, rgba(0, 0, 0, 0.5) 100%), rgb(83, 83, 83)">
              {/* PLAYLIST PICTURE */}
              <AlbumCoverBigContainer>
                <PlaylistCoverImage src="https://mosaic.scdn.co/300/ab67616d0000b27346e1307c35579c3483ea7b03ab67616d0000b27362a57823eced1cb4fd93b2c1ab67616d0000b27377ada0863603903f57b34369ab67616d0000b2738fe5d04b06aff90f9fe796f5" />
              </AlbumCoverBigContainer>
              {/* END OF PLAYLIST PICTURE */}
              <AlbumInfoTextContainer>
                {screenWidth > 768 && <AlbumInfoText>playlist</AlbumInfoText>}
                {/* PLAYLIST NAME */}
                <AlbumInfoName>Pop Smoke</AlbumInfoName>
                {/* END OF PLAYLIST NAME */}
                {/* PLAYLIST INFORMATION */}
                <AlbumAuthorNameInfoContainer>
                  <AlbumAuthorNameText>Ivo Ashikov </AlbumAuthorNameText>
                  <AlbumLengthText color="white" fontFamily="SpotifyMedium">
                    • 66 songs
                  </AlbumLengthText>
                  <AlbumLengthText fontFamily="SpotifyLight">, 3hr 9 min</AlbumLengthText>
                </AlbumAuthorNameInfoContainer>
                {/* END OF PLAYLIST INFORMATION */}
              </AlbumInfoTextContainer>
            </TopPartPlaylist>
            {/* END OF TOP PART OF PLAYLIST PAGE */}
            {/* PLAY AND MORE OPTIONS BUTTON */}
            <ContainerForBackground background="linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%), rgb(83, 83, 83)">
              <PlaylistControlsContainer>
                <PlaylistGreenPlayButton>
                  <BsPlayFill style={{ width: "34px", height: "34px" }} />
                </PlaylistGreenPlayButton>
                <MoreOptionsButton>
                  <FaEllipsisH style={{ width: "34px", height: "34px" }} />
                </MoreOptionsButton>
              </PlaylistControlsContainer>
            </ContainerForBackground>
            {/* END OF PLAY AND MORE OPTIONS BUTTON */}
            {/* MAIN CONTENT / SONGS */}
            <Container padd="0 32px">
              {/* TOP PART OF THE PLAYLIST */}
              <PlaylistStickyGrid>
                <PlaylistStickyText justifySelf="start">#</PlaylistStickyText>
                <PlaylistStickyText justifySelf="start">title</PlaylistStickyText>
                {screenWidth > 768 && <PlaylistStickyText justifySelf="start">album</PlaylistStickyText>}
                {screenWidth > 768 && <PlaylistStickyText justifySelf="start">date added</PlaylistStickyText>}
                {screenWidth > 768 && (
                  <PlaylistStickyText justifySelf="flex-end">
                    <HiOutlineClock style={{ width: "20px", height: "20px", justifySelf: "flex-end" }} />
                  </PlaylistStickyText>
                )}
              </PlaylistStickyGrid>
              {/* END OF TOP PART OF THE PLAYLIST */}
            </Container>
            {/* PLAYLISTS */}
            {onePlaylist.map((song, ind) => (
              <PlaylistSongs
                key={song.track.id}
                songName={song.track.name}
                author={song.track.album.artists[0].name}
                link={song.track.album.images[0].url}
                duration={
                  Math.floor(song.track.duration_ms / 60000) + ":" + (((song.track.duration_ms % 60000) / 1000).toFixed(0) < 10 ? "0" : "") + ((song.track.duration_ms % 60000) / 1000).toFixed(0)
                }
                index={ind + 1}
                albumName={song.track.album.name}
                previewURL={song.track.preview_url}
                ogData={getURL}
                getPlayTrack={getPlayTrack}
                coverAndName={coverAndName}
              />
            ))}
            {/* END OF PLAYLISTS */}
          </>
        )}
      </Container>
    </>
  );
}

export default Playlists;
