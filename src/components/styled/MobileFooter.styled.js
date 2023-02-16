import { Link } from "react-router-dom";
import styled from "styled-components";

export const AccountDropdownButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: transparent;
  border: none;
  color: white;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  z-index: 10;
  position: fixed;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const FooterOnePart = styled.div`
  width: 25%;
  height: 100%;
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  .active {
    color: white;
    font-family: "SpotifyMedium";
  }
`;

export const StyledLink = styled(Link)`
  width: 25%;
  height: 100%;
  color: ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 4px;
  text-decoration: none;
`;

export const FooterIconText = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const FooterPlayerContainer = styled.div`
  width: calc(100% - 16px);
  height: 56px;
  margin: 0 8px;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 10;
  bottom: 80px;
  background-color: #3f3f3f;
  border-radius: 6px;
`;

export const PlayerImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 4px;
  margin: 0 12px 0 8px;
`;

export const PlayerTrackName = styled.span`
  color: white;
  font-size: 0.8125rem;
  font-family: "SpotifyMedium";
  display: block;
  width: 226px;
  overflow: hidden;
  margin-bottom: 5px;
`;
export const PlayerArtistName = styled.span`
  color: white;
  font-size: 0.8125rem;
  font-family: "SpotifyLight";
  display: block;
  width: 226px;
  overflow: hidden;
`;

export const PlayerIconButton = styled.button`
  background-color: transparent;
  width: 40px;
  height: 24px;
  margin-left: auto;
  border: none;
  color: white;
`;

export const AccountDropdownContainer = styled.div`
  background-color: black;
  color: white;
  width: 100vw;
  height: 100vh;
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
`;

export const CloseACCDropdownIconContainer = styled.div`
  margin-left: auto;
`;

export const AccDropdownIconButton = styled.button`
  color: white;
  background-color: transparent;
  border: none;
`;

export const SingleOptionContainer = styled.div`
  margin-top: 24px;
`;

export const SingleOptionText = styled.span`
  font-size: 1.5rem;
  font-family: "SpotifyMedium";
  color: white;
`;

export const SmallBorder = styled.div`
  width: 16px;
  height: 2px;
  background-color: white;
  margin: 32px 0;
`;

export const SingleSmallOptionContainer = styled.div`
  margin-bottom: 16px;
`;

export const SingleSmallOptionText = styled.span`
  font-size: 1.125rem;
  font-family: "SpotifyMedium";
  color: white;
`;

export const PlayerBigContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 11;
  background: linear-gradient(180deg, rgba(84, 84, 84, 1) 77%, rgba(47, 47, 47, 1) 100%);
  position: fixed;
  top: 0;
  padding: 12px;
`;

export const BigPlayerTopNavigation = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const BigPlayerHideMoreButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 12px;
`;

export const TopAuthorContainer = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BigPlayerText = styled.span`
  font-size: ${({ fontSize }) => fontSize};
  color: white;
  display: flex;
  align-items: center;
  justify-content: ${({ jContent }) => jContent};
  color: white;
  opacity: ${({ opacity }) => opacity};
  font-family: ${({ fontF }) => fontF};
`;

export const CoverImageContainer = styled.div`
  margin-bottom: 24px;
  width: 300px;
  height: 292px;
`;

export const BigPlayerTrackNameContainer = styled.div`
  margin-bottom: 16px;
  margin-left: 12px;
  display: flex;
  align-items: center;
  width: 90%;
`;

export const BigPlayerInputContainer = styled.div`
  margin: 0 12px 8px 12px;
  display: flex;
  align-items: center;
  width: 327px;
`;

export const BigPlayerInput = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 4px;
  background-color: hsla(0, 0%, 100%, 0.3);
  accent-color: green;
  border-radius: 25px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 8px;
    height: 8px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
    border-radius: 50%;
    background-color: white;
  }
`;

export const BigPlayerDurationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  opacity: 0.7;
  margin: 0 12px 48px 12px;
`;

export const BigPlayerControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const BigPlayerControlsButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
`;

export const BigPlayerPlayButton = styled.button`
  margin: 3px;
  background-color: #f6f6f6;
  border: none;
  border-radius: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 56px;
  height: 56px;
`;

export const LibraryPopUpContainer = styled.div`
  padding: 16px;
  color: white;
  background-color: #0d72ea;
  border-radius: 8px;
  position: fixed;
  bottom: 6rem;
  z-index: 12;
  width: calc(100% - 16px);
  margin: 0 8px;
  height: 165px;
`;

export const LibraryTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const LibraryText = styled.span`
  font-size: ${({ fontSize }) => fontSize};
  color: white;
  font-family: ${({ fontF }) => fontF};
  width: 100%;
  line-height: ${({ lineHeight }) => lineHeight};
`;

export const LibraryButtonsContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin-top: 8px;
`;

export const LibraryButton = styled.button`
  font-size: 1rem;
  font-family: "SpotifyMedium";
  border: none;
  border-radius: 500px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 16px 32px;
  color: ${({ color }) => color};
`;

export const TriangleBubble = styled.div`
  width: 16px;
  height: 16px;
  position: fixed;
  background-color: #0d72ea;
  bottom: 5.7rem;
  transform: rotate(45deg);
  z-index: 12;
  right: 8.3rem;
`;
