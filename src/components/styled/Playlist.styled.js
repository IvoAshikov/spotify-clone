import styled from "styled-components";

export const TopPartPlaylist = styled.div`
  height: 340px;
  padding: 0 24px 32px 24px;
  display: flex;
  position: relative;
  background: ${({ background }) => background};
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const AlbumCoverBigContainer = styled.div`
  width: 232px;
  height: 232px;
  position: absolute;
  bottom: 24px;
  left: 32px;
  @media (max-width: 768px) {
    position: unset;
    margin-top: 3rem;
    width: auto;
  }
`;

export const AlbumInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 288px;
  bottom: 24px;
  @media (max-width: 768px) {
    position: unset;
  }
`;

export const AlbumInfoText = styled.h2`
  font-family: "SpotifyLight";
  font-size: 0.75rem;
  margin-top: 4px;
  text-transform: uppercase;
  color: white;
`;

export const AlbumInfoName = styled.h1`
  margin: 0.08em 0px 0.12em;
  font-size: 6rem;
  color: white;
  letter-spacing: -5px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AlbumAuthorNameInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const AlbumAuthorNameText = styled.span`
  color: white;
  font-size: 0.875rem;
  font-family: "SpotifyMedium";
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const AlbumLengthText = styled.span`
  font-size: 0.875rem;
  white-space: nowrap;
  color: ${({ color }) => color};
  font-family: ${({ fontFamily }) => fontFamily};
`;

export const PlaylistControlsContainer = styled.div`
  padding: 24px 32px;
  display: flex;
  position: relative;
  width: calc(100vw - 251px);
  height: 104px;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 16px;
  }
`;

export const PlaylistGreenPlayButton = styled.button`
  font-size: 1rem;
  border-radius: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1ed760;
  color: #000;
  width: 56px;
  height: 56px;
  border: none;
  opacity: 1;
  &:hover {
    transform: scale(1.04);
  }
`;

export const ContainerForBackground = styled.div`
  background: ${({ background }) => background};
`;

export const MoreOptionsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: hsla(0, 0%, 100%, 0.6);
  background-color: transparent;
  height: 32px;
  width: 32px;
  margin-left: 2rem;
`;

export const PlaylistStickyGrid = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 16px 6fr 4fr 3fr minmax(120px, 1fr);
  grid-template-rows: 1fr;
  gap: 5px 16px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  height: 36px;
  position: sticky;
  z-index: 2;
  padding: 0 32px;
  margin: 0 0 16px 0;
  @media (max-width: 768px) {
    padding: 0 16px;
    grid-template-columns: 16px 6fr 90%;
  }
`;

export const PlaylistStickyText = styled.span`
  display: flex;
  align-items: center;
  justify-self: ${({ justifySelf }) => justifySelf};
  background-color: transparent;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-family: "SpotifyLight";
`;

export const PlaylistSongCard = styled.div`
  border-radius: 4px;
  align-items: center;
  display: grid;
  grid-template-columns: 16px 6fr 4fr 3fr minmax(120px, 1fr);
  grid-template-rows: 1fr;
  height: 56px;
  z-index: 2;
  padding: 0 32px;
  &:hover span {
    color: white;
  }
  &:hover {
    background-color: #2a2a2a;
  }
  @media (max-width: 768px) {
    grid-template-columns: 16px 10fr;
  }
`;

export const PlaylistIndex = styled.span`
  display: flex;
  color: #b3b3b3;
  height: 16px;
  width: 16px;
  font-size: 1rem;
  font-family: "SpotifyLight";
`;

export const PlaylistSongPlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  opacity: 1;
`;

export const PlaylistPictureAndNameContainer = styled.div`
  display: flex;
  justify-self: start;
  margin-left: 16px;
  @media (max-width: 768px) {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
`;

export const PlaylistSongNameContainer = styled.div`
  padding-right: 8px;
`;
export const PlaylistSongName = styled.span`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-self: start;
  font-family: "SpotifyMedium";
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 300px;
  letter-spacing: -1px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  /* @media (max-width: 768px) {
  
  } */
`;

export const PlaylistAuthourName = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  align-self: start;
  font-family: "SpotifyMedium";
  font-size: 0.8125rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: -1px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Comma = styled.span`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const PlaylistAlbumName = styled.span`
  font-size: 0.875rem;
  font-family: "SpotifyLight";
  color: ${({ theme }) => theme.colors.gray};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 240px;
  letter-spacing: -1px;
  display: flex;
  align-items: center;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const PlaylistDateAdded = styled.span`
  font-size: 0.875rem;
  display: flex;
  justify-self: start;
  align-items: center;
  font-family: "SpotifyLight";
`;

export const PlaylistLikeButton = styled.button`
  color: hsla(0, 0%, 100%, 0.7);
  background-color: transparent;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
`;

export const PlaylistSongDurationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-self: end;
  color: #fff;
`;

export const PlaylistSongDurationText = styled.span`
  font-size: 0.875rem;
  color: #a7a7a7;
  font-family: "SpotifyLight";
`;

export const PlaylistCoverImage = styled.img`
  width: 232px;
  height: 232px;
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
