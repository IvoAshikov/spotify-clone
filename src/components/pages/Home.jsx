import React from "react";
import {
  HorizontalCardContainer,
  HeadingStyled,
  SectionStyled,
  TextContainer,
  PictureContainer,
  ArtistName,
  ArtistPlayButton,
  HeadingStyledSmall,
  VerticalCardContainer,
  MixCoverContainer,
  MixHeading,
  SingleArtistCard,
  ArtistCoverContainer,
  CardPlayButton,
  GridContainerHome,
  StyledLinks,
} from "../styled/Main.styled";
import { Container } from "../styled/Container.styled";
import { BsPlayFill } from "react-icons/bs";
import HorizontalCards from "../jsons/HorizontalCards.json";
import VerticalPlaylist from "../jsons/VerticalPlaylist.json";
import AlbumCards from "../jsons/AlbumCards.json";
import SuggestedArtists from "../jsons/SuggestedArtists.json";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function Home() {
  // DYNAMIC TEXT AND BACKGROUND CHANGE
  let today = new Date();
  let time = today.getHours();
  const backgroundGradient = [
    ["linear-gradient(180deg, rgba(23,65,61,1) 43%, rgba(18,18,18,1) 79%)"],
    ["linear-gradient(180deg, rgba(80,66,41,1) 41%, rgba(18,18,18,1) 79%)"],
    ["linear-gradient(180deg, rgba(92,38,38,1) 39%, rgba(18,18,18,1) 79%)"],
  ];
  // END OF DYNAMIC TEXT AND BACKGROUND CHANGE
  let screenWidth = window.screen.width;
  return (
    <>
      <Container widthM="100%" widthL="calc(100% - 251px)" paddM="0 0 96px 0" padd="0 0 32px 0" bgColor="#121212" width="calc(100vw - 251px)">
        {screenWidth >= 769 && <Navbar />}
        <Container widthM="100%" background={time >= 5 && time < 12 ? backgroundGradient[0] : time >= 12 && time < 20 ? backgroundGradient[1] : backgroundGradient[2]}>
          {/* STICKY TOP BAR */}
          {/* END OF STICKY TOP BAR */}
          <Container paddM="44px 10px 10px" padd="88px 32px 12px">
            {/* FIRST PART OF MAIN */}
            <SectionStyled>
              {/* SECTION HEADING */}
              <TextContainer>
                <HeadingStyled>{time >= 5 && time < 12 ? "Good Morning" : time >= 12 && time < 20 ? "Good Afternoon" : "Good Evening"}</HeadingStyled>
              </TextContainer>
              {/* END OF SECTION HEADING */}
              <GridContainerHome>
                {/* SINGLE CARD */}
                {HorizontalCards.cards.map((card) => (
                  <StyledLinks href={card.linkToArtist} target="_blank" key={card.id} widthM="320px" widthL="300px">
                    <HorizontalCardContainer>
                      <PictureContainer>
                        <img src={card.imgLink} width="80px" height="80px" style={{ borderTopLeftRadius: "4px", borderBottomLeftRadius: "4px" }} loading="lazy" />
                      </PictureContainer>
                      <Container paddM="0 10px" paddL="0 10px" display="flex" jContent="space-between" width="100%">
                        <ArtistName style={{ color: "white" }}>{card.text}</ArtistName>
                        <ArtistPlayButton>
                          <BsPlayFill style={{ width: "30px", height: "30px" }} />
                        </ArtistPlayButton>
                      </Container>
                    </HorizontalCardContainer>
                  </StyledLinks>
                ))}
                {/* END OF SINGLE CARD */}
              </GridContainerHome>
            </SectionStyled>
            {/* END OF FIRST PART OF MAIN */}
          </Container>
        </Container>
        <main>
          <section>
            <Container paddM="0 10px" padd="0 32px 0">
              {/* YOUR PLAYLISTS */}
              <SectionStyled>
                {/* SECTION HEADING */}
                <TextContainer>
                  <HeadingStyledSmall>Your Playlists</HeadingStyledSmall>
                </TextContainer>
                {/* END OF SECTION HEADING */}
                <Container overflowYM="scroll" overflowYL="scroll" display="flex">
                  {/* SINGLE CARD */}
                  {VerticalPlaylist.cards.map((card) => (
                    <Link to={card.linkToPlaylist} style={{ color: "white", textDecoration: "none" }} key={card.id}>
                      <VerticalCardContainer marginRight="24px">
                        <MixCoverContainer>
                          <img src={card.imgLink} style={{ width: "159px", height: "159px", borderRadius: "4px" }} loading="lazy" />
                          <CardPlayButton>
                            <BsPlayFill style={{ width: "30px", height: "30px" }} />
                          </CardPlayButton>
                        </MixCoverContainer>
                        <MixHeading>{card.name}</MixHeading>
                        <Container fontSize="0.8175rem" lineHeight="20px" color="#b3b3b3" fontFamily="SpotifyMedium">
                          {card.artist}, {card.artist2}, {card.artist3} and more
                        </Container>
                      </VerticalCardContainer>
                    </Link>
                  ))}
                  {/* END OF SINGLE CARD */}
                </Container>
              </SectionStyled>
              {/* END OF YOUR PLAYLISTS */}
              {/* SUGGESTED ALBUMS */}
              <SectionStyled>
                <TextContainer>
                  <HeadingStyledSmall>Suggested Albums</HeadingStyledSmall>
                </TextContainer>
                <Container overflowYM="scroll" overflowYL="scroll" display="flex">
                  {/* SINGLE ALBUM */}
                  {AlbumCards.cards.map((card) => (
                    <StyledLinks href={card.linkToAlbum} style={{ color: "white", textDecoration: "none" }} target="_blank" key={card.id}>
                      <VerticalCardContainer marginRight="24px">
                        <MixCoverContainer>
                          <img src={card.imgLink} style={{ width: "159px", height: "159px", borderRadius: "4px" }} loading="lazy" />
                          <CardPlayButton>
                            <BsPlayFill style={{ width: "30px", height: "30px" }} />
                          </CardPlayButton>
                        </MixCoverContainer>
                        <MixHeading>{card.albumName}</MixHeading>
                        <Container fontSize="0.8175rem" lineHeight="20px" color="#b3b3b3" fontFamily="SpotifyMedium">
                          {card.year} • {card.artist}
                          {card.artist2 && ", "}
                          {card.artist2 && card.artist2}
                        </Container>
                      </VerticalCardContainer>
                    </StyledLinks>
                  ))}
                  {/* END OF SINGLE ALBUM */}
                </Container>
              </SectionStyled>
              {/* END OF SUGGESTED ALBUMS */}
              {/* SUGGESTED ARTISTS */}
              <SectionStyled>
                <TextContainer>
                  <HeadingStyledSmall>Suggested Artists</HeadingStyledSmall>
                </TextContainer>
                <Container overflowYM="scroll" overflowYL="scroll" display="flex">
                  {/* SINGLE ARTIST */}
                  {SuggestedArtists.cards.map((card) => (
                    <StyledLinks href={card.linkToArtist} style={{ color: "white", textDecoration: "none" }} target="_blank" key={card.id}>
                      <SingleArtistCard marginRight="24px">
                        <ArtistCoverContainer>
                          <img src={card.imgLink} style={{ borderRadius: "50%", width: "161px", height: "161px" }} loading="lazy" />
                          <CardPlayButton>
                            <BsPlayFill style={{ width: "30px", height: "30px" }} />
                          </CardPlayButton>
                        </ArtistCoverContainer>
                        <MixHeading>{card.artistName}</MixHeading>
                        <Container fontSize="0.8175rem" lineHeight="20px" color="#b3b3b3" fontFamily="SpotifyMedium">
                          Artist
                        </Container>
                      </SingleArtistCard>
                    </StyledLinks>
                  ))}
                  {/* END OF SINGLE ARTIST */}
                </Container>
              </SectionStyled>
            </Container>
          </section>
        </main>
      </Container>
    </>
  );
}

export default Home;
