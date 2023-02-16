import React, { useState, useRef, useEffect } from "react";
import {
  BrowseAllSection,
  GridCard,
  GridCardImage,
  GridCardText,
  GridContainer,
  HeadingText,
  HeadingTextContainer,
  InputContainer,
  MobileInputContainer,
  SearchInput,
  SearchMain,
} from "../styled/Search.styled";
import { StickyTopBar, BackAndForwardButton, AccountContainer, ProfileImgContainer, AccountText, DropdownContainer, DropdownButton, DropdownText } from "../styled/Main.styled";
import { Container } from "../styled/Container.styled";
import { BsPerson, BsFillCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import SearchCards from "../jsons/SearchCards.json";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { BiLinkExternal } from "react-icons/bi";

function Search() {
  const refOne = useRef(null); // Ref for Click Outside
  const [topBarOpacity, setTopBarOpacity] = useState(0);
  const [searchInputText, setSearchInputText] = useState(""); // State for the text in the input
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

  // Handler for the text in the input
  const inputTextHandler = (e) => {
    setSearchInputText(e.target.value);
  };
  // End of Handler for the text in the input

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

  let screenWidth = window.screen.width;
  return (
    <>
      <SearchMain>
        {screenWidth > 769 && (
          <Container>
            <StickyTopBar style={{ opacity: topBarOpacity }}></StickyTopBar>
            <Container display="flex" height="64px" padd="0 48px" pos="fixed" zIndex="11" jContent="space-between" width="calc(100vw - 251px)">
              {/* NAVIGATE BACK AND FORWARD BUTTONS */}
              <Container display="flex" pos="relative">
                <BackAndForwardButton onClick={() => navigate(-1)}>
                  <IoChevronBack style={{ width: "22px", height: "22px" }} />
                </BackAndForwardButton>
                <BackAndForwardButton marginLeft="16px" onClick={() => navigate(1)}>
                  <IoChevronForward style={{ width: "22px", height: "22px" }} />
                </BackAndForwardButton>
                <InputContainer>
                  <HiMagnifyingGlass style={{ width: "28px", height: "28px", color: "black", marginLeft: "10px" }} />
                  <SearchInput type="text" placeholder="What do you want to listen to?" value={searchInputText} onChange={inputTextHandler} />
                  {searchInputText.length !== 0 && (
                    <Container width="28px" height="28px" margin="0 10px 0 0" cursor="pointer">
                      <AiOutlineClose style={{ width: "28px", height: "28px", color: "black", marginRight: "10px" }} />
                    </Container>
                  )}
                </InputContainer>
              </Container>
              {/* END OF NAVIGATE BACK AND FORWARD BUTTONS */}
              {/* RIGHT PART  */}
              <Container display="flex" pos="relative" ref={refOne}>
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
        <Container marginM="60px 0 0 0" margin="112px 0 0 0" bgColor="#121212">
          <HeadingTextContainer marginBM="10px">
            <HeadingText>Search</HeadingText>
          </HeadingTextContainer>
          <MobileInputContainer>
            <HiMagnifyingGlass style={{ width: "28px", height: "28px", color: "black", marginLeft: "10px" }} />
            <SearchInput type="text" placeholder="What do you want to listen to?" value={searchInputText} onChange={inputTextHandler} />
            {searchInputText.length !== 0 && (
              <Container width="28px" height="28px" margin="0 10px 0 0" cursor="pointer">
                <AiOutlineClose style={{ width: "28px", height: "28px", color: "black", marginRight: "10px" }} />
              </Container>
            )}
          </MobileInputContainer>
          <HeadingTextContainer>
            <HeadingText>Browse all</HeadingText>
          </HeadingTextContainer>
          <BrowseAllSection marginTop="24px" marginBottom="32px">
            <GridContainer>
              {SearchCards.cards.map((card) => (
                <GridCard backgroundColor={card.color} key={card.id}>
                  <GridCardText>{card.text}</GridCardText>
                  {screenWidth > 768 && <GridCardImage src={card.imgLink} loading="lazy" />}
                </GridCard>
              ))}
            </GridContainer>
          </BrowseAllSection>
        </Container>
      </SearchMain>
    </>
  );
}

export default Search;
