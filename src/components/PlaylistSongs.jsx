import React, { useEffect, useState } from "react";
import { Container } from "./styled/Container.styled";
import { BsPlayFill } from "react-icons/bs";
import {
  PlaylistSongCard,
  PlaylistIndex,
  PlaylistSongPlayButton,
  PlaylistPictureAndNameContainer,
  PlaylistSongNameContainer,
  PlaylistSongName,
  PlaylistAuthourName,
  Comma,
  PlaylistAlbumName,
  PlaylistDateAdded,
  PlaylistSongDurationContainer,
  PlaylistLikeButton,
  PlaylistSongDurationText,
} from "./styled/Playlist.styled";
import { FaEllipsisH } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

function HousePlaylist({ index, link, songName, author, author2, albumName, duration, ogData, previewURL, getPlayTrack, coverAndName }) {
  const [showButtons, setShowButtons] = useState(false); // State for showing the play button when hovering on a song
  let screenWidth = window.screen.width;
  return (
    <>
      <Container paddM="0 16px" padd="0 32px">
        <Container height="56px">
          {/* SINGLE SONG CARD */}
          <PlaylistSongCard onMouseOver={() => setShowButtons(true)} onMouseOut={() => setShowButtons(false)}>
            {/* PLAYLIST SONG INDEX */}
            {!showButtons && <PlaylistIndex>{index}</PlaylistIndex>}
            {/* END OF PLAYLIST SONG INDEX */}
            {showButtons && (
              <PlaylistSongPlayButton onClick={() => (getPlayTrack(true), ogData(previewURL), coverAndName(link, songName, author))}>
                <BsPlayFill style={{ width: "20px", height: "20px", marginLeft: "-6px" }} />
              </PlaylistSongPlayButton>
            )}
            <PlaylistPictureAndNameContainer>
              <img src={link} style={{ width: "40px", height: "40px", marginRight: "16px" }} />
              <PlaylistSongNameContainer>
                <PlaylistSongName>{songName}</PlaylistSongName>
                <div style={{ display: "flex" }}>
                  <PlaylistAuthourName>{author}</PlaylistAuthourName>
                  {author2 && (
                    <>
                      <Comma>, </Comma> <PlaylistAuthourName>{author2}</PlaylistAuthourName>
                    </>
                  )}
                </div>
              </PlaylistSongNameContainer>
            </PlaylistPictureAndNameContainer>
            {screenWidth > 768 && (
              <>
                <PlaylistAlbumName>{albumName}</PlaylistAlbumName>
                <div>
                  <PlaylistDateAdded alignSelf="start">3 days ago</PlaylistDateAdded>
                </div>
                <PlaylistSongDurationContainer>
                  {showButtons && (
                    <PlaylistLikeButton>
                      <AiOutlineHeart style={{ width: "20px", height: "20px" }} />
                    </PlaylistLikeButton>
                  )}
                  {showButtons && (
                    <PlaylistLikeButton>
                      <FaEllipsisH style={{ width: "20px", height: "20px" }} />
                    </PlaylistLikeButton>
                  )}
                  <PlaylistSongDurationText>{duration}</PlaylistSongDurationText>
                </PlaylistSongDurationContainer>
              </>
            )}
          </PlaylistSongCard>
          {/* END OF SINGLE SONG CARD */}
        </Container>
      </Container>
      {/* END OF MAIN CONTENT / SONGS */}
    </>
  );
}

export default HousePlaylist;
