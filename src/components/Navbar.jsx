import React, { useState, useRef, useEffect } from "react";
import { StickyTopBar, BackAndForwardButton, UpgradeButton, ProfileImgContainer, AccountText, AccountContainer, DropdownContainer, DropdownButton, DropdownText } from "./styled/Main.styled";
import { Container } from "./styled/Container.styled";
import { BsPerson, BsFillCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { BiLinkExternal } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLinksStyled } from "./styled/Library.styled";

function Navbar() {
  const refOne = useRef(null); // Ref for Click Outside
  const [topBarOpacity, setTopBarOpacity] = useState(0);
  const [accountDropdown, setAccountDropdown] = useState(false); // State for Account Dropdown Menu

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

  let location = useLocation();

  return (
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
          {/* NAVIGATE THROUGH PAGES */}
          {(location.pathname === "/collection/playlists" ||
            location.pathname === "/collection/podcasts" ||
            location.pathname === "/collection/artists" ||
            location.pathname === "/collection/albums") && (
            <Container margin="0 0 0 3rem">
              <ul style={{ listStyle: "none", display: "flex" }}>
                <li>
                  <NavLinksStyled to="/collection/playlists" className={location.pathname === "/collection/playlists" && "active"}>
                    <span>Playlists</span>
                  </NavLinksStyled>
                </li>
                <li>
                  <NavLinksStyled to="/collection/podcasts" className={location.pathname === "/collection/podcasts" && "active"}>
                    <span>Podcasts</span>
                  </NavLinksStyled>
                </li>
                <li>
                  <NavLinksStyled to="/collection/artists" className={location.pathname === "/collection/artists" && "active"}>
                    <span>Artists</span>
                  </NavLinksStyled>
                </li>
                <li>
                  <NavLinksStyled to="/collection/albums" className={location.pathname === "/collection/albums" && "active"}>
                    <span>Albums</span>
                  </NavLinksStyled>
                </li>
              </ul>
            </Container>
          )}
          {/* END OF NAVIGATE THROUGH PAGES */}
        </Container>
        {/* END OF NAVIGATE BACK AND FORWARD BUTTONS */}
        {/* RIGHT PART  */}
        <Container display="flex" pos="relative" ref={refOne}>
          {(location.pathname === "/home" ||
            location.pathname === "/playlist/house" ||
            location.pathname === "/playlist/hiphop" ||
            location.pathname === "/playlist/jazzblues" ||
            location.pathname === "/playlist/oldschoolrock" ||
            location.pathname === "/playlist/popsmoke") && <UpgradeButton>Upgrade</UpgradeButton>}
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
  );
}

export default Navbar;
