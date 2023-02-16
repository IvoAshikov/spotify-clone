import React, { useEffect } from "react";
import { Container } from "./styled/Container.styled";
import { HLine, IconContainer, LinkStyled, SidebarStyled, NavigationButton, NavigationText } from "./styled/Sidebar.styled";
import SpotifyLogoWhite from "../images/spotify-logo-white.png";
import { AiOutlineHome, AiFillHeart } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoLibraryOutline } from "react-icons/io5";
import { BsArrowDownCircle, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <SidebarStyled>
        <Container padd="24px 0 0 0">
          {/* SPOTIFY LOGO */}
          <Container padd="0 24px" margin="0 0 18px 0">
            <LinkStyled to="/home">
              <img src={SpotifyLogoWhite} alt="" style={{ width: "100%", maxWidth: "131px", height: "40px" }} loading="lazy" />
            </LinkStyled>
          </Container>
          {/*END OF  SPOTIFY LOGO */}
          {/* HOME, SEARCH AND LIBRARY */}
          <ul style={{ listStyle: "none" }}>
            <li style={{ padding: "0 8px" }}>
              <LinkStyled padd="0 16px" to="/home">
                <AiOutlineHome style={{ width: "24px", height: "24px" }} />
                <NavigationText>Home</NavigationText>
              </LinkStyled>
            </li>
            <li style={{ padding: "0 8px" }}>
              <LinkStyled padd="0 16px" to="/search">
                <HiMagnifyingGlass style={{ width: "24px", height: "24px" }} />
                <NavigationText>Search</NavigationText>
              </LinkStyled>
            </li>
            <li style={{ padding: "0 8px" }}>
              <LinkStyled padd="0 16px" to="/collection/playlists">
                <IoLibraryOutline style={{ width: "24px", height: "24px" }} />
                <NavigationText>Your Library</NavigationText>
              </LinkStyled>
            </li>
          </ul>
          {/* END OF HOME, SEARCH AND LIBRARY */}
          <Container padd="24px 0 0 0 ">
            <Container>
              {/* NAV BUTTONS // PLAYLIST AND LIKED SONGS */}
              <NavigationButton>
                <Container margin="0 16px 0 0">
                  <IconContainer>
                    <BsPlus style={{ width: "24px", height: "24px" }} />
                  </IconContainer>
                </Container>
                <NavigationText>Create Playlist</NavigationText>
              </NavigationButton>
              <NavigationButton>
                <Container margin="0 16px 0 0">
                  <IconContainer bgC="linear-gradient(135deg,#450af5,#c4efd9)">
                    <AiFillHeart style={{ width: "15px", height: "15px", color: "white" }} />
                  </IconContainer>
                </Container>
                <NavigationText>Liked Songs</NavigationText>
              </NavigationButton>
              {/* END OF NAV BUTTONS // PLAYLIST AND LIKED SONGS */}
              <HLine />
              {/* PLAYLIST CONTAINER */}
              <Container>
                <Container padd="8px 0" height="175px">
                  <ul style={{ listStyle: "none" }}>
                    <Link to="/playlist/house" style={{ textDecoration: "none" }}>
                      <li style={{ padding: `0 24px`, margin: "12px 0 12px 0" }}>
                        <NavigationText font="SpotifyLight" height="32px" curs="default">
                          House
                        </NavigationText>
                      </li>
                    </Link>
                    <Link to="/playlist/hiphop" style={{ textDecoration: "none" }}>
                      <li style={{ padding: `0 24px`, margin: "12px 0 12px 0" }}>
                        <NavigationText font="SpotifyLight" height="32px" curs="default">
                          Hip Hop
                        </NavigationText>
                      </li>
                    </Link>
                    <Link to="/playlist/jazzblues" style={{ textDecoration: "none" }}>
                      <li style={{ padding: `0 24px`, margin: "12px 0 12px 0" }}>
                        <NavigationText font="SpotifyLight" height="32px" curs="default">
                          Jazz/Blues
                        </NavigationText>
                      </li>
                    </Link>
                    <Link to="/playlist/oldschoolrock" style={{ textDecoration: "none" }}>
                      <li style={{ padding: `0 24px`, margin: "12px 0 12px 0" }}>
                        <NavigationText font="SpotifyLight" height="32px" curs="default">
                          Old School Rock
                        </NavigationText>
                      </li>
                    </Link>
                    <Link to="/playlist/popsmoke" style={{ textDecoration: "none" }}>
                      <li style={{ padding: `0 24px`, margin: "12px 0 12px 0" }}>
                        <NavigationText font="SpotifyLight" height="32px" curs="default">
                          Pop Smoke
                        </NavigationText>
                      </li>
                    </Link>
                  </ul>
                </Container>
              </Container>
              {/* END OF PLAYLIST CONTAINER */}
            </Container>
          </Container>
          {/* INSTALL APP CONTAINER */}
          <Container>
            <Container padd="0 8px">
              <LinkStyled padd="0 16px">
                <BsArrowDownCircle style={{ width: "24px", height: "24px" }} />
                <NavigationText>Install App</NavigationText>
              </LinkStyled>
            </Container>
          </Container>
          {/* END OF INSTALL APP CONTAINER */}
        </Container>
      </SidebarStyled>
    </>
  );
}

export default Sidebar;
