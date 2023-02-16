import styled from "styled-components";
import { Link } from "react-router-dom";

export const LibraryHeadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
`;

export const LibraryHeadingText = styled.h1`
  font-size: 1.5rem;
  font-family: "SpotifyMedium";
  color: ${({ theme }) => theme.colors.white};
`;

export const LibraryPlaylistGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
`;

export const LibraryLiked = styled.div`
  background: ${({ background }) => background};
  padding: 20px;
  border-radius: 8px;
  width: 410px;
  height: 271px;
  grid-column: span 2;
  position: relative;
  &:hover button {
    opacity: 1;
    transition: all 0.5s ease;
    transform: translateY(0);
  }
`;

export const LibraryCardPlayButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1rem;
  border-radius: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1ed760;
  color: #000;
  width: 48px;
  height: 48px;
  border: none;
  cursor: pointer;
  margin-left: auto;
  opacity: 0;
  transform: translateY(10px);
  box-shadow: 0 8px 8px rgb(0 0 0 / 30%); ;
`;

export const LikedHeadingText = styled.h1`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ fontSize }) => fontSize};
  margin-top: ${({ marginTop }) => marginTop};
  letter-spacing: ${({ letterSpacing }) => letterSpacing};
  font-family: ${({ fontFamily }) => fontFamily};
`;

export const NavLinksStyled = styled(Link)`
  font-family: "SpotifyMedium";
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 0.8725rem;
  margin-right: 8px;
  border-radius: 4px;
  padding: 14px 16px;
  &.active {
    background-color: #333;
  }
`;
