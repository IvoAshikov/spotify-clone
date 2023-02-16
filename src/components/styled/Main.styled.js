import styled from "styled-components";

export const SectionStyled = styled.section`
  margin-bottom: 40px;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const HeadingStyled = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -1px;
`;

export const HeadingStyledSmall = styled.h2`
  font-size: 1.35rem;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: -1px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const HorizontalCardContainer = styled.div`
  background-color: hsla(0, 0%, 100%, 0.1);
  border-radius: 4px;
  height: 80px;
  width: 334px;
  margin: ${({ margin }) => margin};
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover button {
    opacity: 1;
    transform: translateY(0px);
    transition: all 0.25s ease;
  }
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.3);
    transition: background-color 0.3s ease;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const PictureContainer = styled.div`
  max-width: 80px;
  max-height: 80px;
`;

export const LinkToArtist = styled.a`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;

export const ArtistName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  font-size: 1rem;
  color: inherit;
`;

export const ArtistPlayButton = styled.button`
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
  transform: translateY(20px);
  box-shadow: 0 8px 8px rgb(0 0 0 / 30%); ;
`;

export const CardPlayButton = styled.button`
  position: absolute;
  bottom: 7rem;
  right: 1.5rem;
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

export const VerticalCardContainer = styled.div`
  position: relative;
  width: 191px;
  height: 281px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.footerColor};
  border-radius: 8px;
  cursor: pointer;
  margin-right: ${({ marginRight }) => marginRight};
  &:hover button {
    opacity: 1;
    transition: all 0.25s ease;
    transform: translateY(0);
  }
  &:hover {
    background-color: #282828;
    transition: background-color 0.3s ease;
  }
`;

export const MixCoverContainer = styled.div`
  margin-bottom: 16px;
  width: 159px;
  height: 159px;
`;

export const MixHeading = styled.h3`
  font-size: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-bottom: 4px;
  color: white;
  line-height: 28px;
`;

export const ArtistLink = styled.a`
  color: ${({ theme }) => theme.colors.gray};
  font-family: "SpotifyMedium";
  font-size: 0.875rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const ArtistLinkLight = styled.a`
  color: ${({ theme }) => theme.colors.gray};
  font-family: "SpotifyLight";
  font-size: 0.875rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const SingleArtistCard = styled.div`
  position: relative;
  width: 191px;
  height: 271px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.footerColor};
  border-radius: 8px;
  cursor: pointer;
  margin-right: ${({ marginRight }) => marginRight};
  &:hover button {
    opacity: 1;
    transition: all 0.5s ease;
    transform: translateY(0);
  }
  &:hover {
    background-color: #282828;
    transition: background-color 0.3s ease;
  }
`;

export const ArtistCoverContainer = styled.div`
  margin-bottom: 16px;
  height: 161px;
  width: 161px;
`;

export const StickyTopBar = styled.div`
  height: 64px;
  z-index: 10;
  display: flex;
  padding: 16px 32px;
  align-items: center;
  width: calc(100vw - 251px);
  background-color: ${({ theme }) => theme.colors.topBar};
  position: fixed;
  top: 0;
`;

export const BackAndForwardButton = styled.button`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 50%;
  height: 32px;
  width: 32px;
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
  cursor: pointer;
  margin-left: ${({ marginLeft }) => marginLeft};
`;

export const UpgradeButton = styled.button`
  background-color: transparent;
  border-radius: 500px;
  font-size: 0.8125rem;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  font-family: "SpotifyMedium";
  color: ${({ theme }) => theme.colors.white};
  padding: 8px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: black;
    border: 1px solid white;
    transform: scale(1.05);
  }
`;

export const ProfileImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #535353;
  border-radius: 50%;
  height: 28px;
  width: 28px;
`;

export const AccountText = styled.span`
  padding: 0 8px;
  color: white;
  font-size: 0.8725rem;
  font-family: "SpotifyMedium";
`;

export const AccountContainer = styled.div`
  background-color: black;
  padding: 2px 10px 2px 2px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  margin-left: 32px;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

export const GridContainerHome = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: repeat(2, 80px);
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 768px) {
    display: block;
  }
`;

export const DropdownContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  padding: 4px;
  box-shadow: 0 16px 24px rgb(0 0 0 / 30%), 0 6px 8px rgb(0 0 0 / 20%);
  position: absolute;
  width: 196px;
  top: 2.5rem;
  right: 0;
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  justify-content: space-between;
  border: none;
  color: hsla(0, 0%, 100%, 0.9);
  border-radius: 2px;
  height: 40px;
  padding: 12px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #3e3e3e;
    transition: background-color 0.3s ease;
  }
`;

export const DropdownText = styled.span`
  font-size: 0.8125rem;
  font-family: "SpotifyMedium";
`;

export const StyledLinks = styled.a`
  color: white;
  text-decoration: none;
  width: ${({ widthM }) => widthM};
`;
