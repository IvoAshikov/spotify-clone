import React from "react";
import { Container } from "../styled/Container.styled";
import { VerticalCardContainer, MixCoverContainer, CardPlayButton, MixHeading, ArtistLink } from "../styled/Main.styled";
import { BsPlayFill } from "react-icons/bs";
import { LibraryHeadingContainer, LibraryHeadingText, LibraryLiked, LibraryPlaylistGrid, LikedHeadingText, LibraryCardPlayButton } from "../styled/Library.styled";
import VerticalPlaylist from "../jsons/VerticalPlaylist.json";
import Navbar from "../Navbar";

function LibraryPlaylists() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <Container padd="0 32px" margin="80px 0 0 0">
            <LibraryHeadingContainer>
              <LibraryHeadingText>Playlists</LibraryHeadingText>
            </LibraryHeadingContainer>
            <LibraryPlaylistGrid>
              <LibraryLiked background="linear-gradient(149.46deg, #450af5, #8e8ee5 99.16%)">
                <div>
                  <LikedHeadingText fontSize="2rem" marginTop="10rem" letterSpacing="-2px">
                    Liked Songs
                  </LikedHeadingText>
                  <LikedHeadingText fontFamily="SpotifyLight" fontSize="1rem" marginTop="1rem">
                    0 liked songs
                  </LikedHeadingText>
                </div>
                <LibraryCardPlayButton>
                  <BsPlayFill style={{ width: "30px", height: "30px" }} />
                </LibraryCardPlayButton>
              </LibraryLiked>
              {/* VERTICAL PLAYLIST CARDS */}
              {VerticalPlaylist.cards.map((card) => (
                <VerticalCardContainer key={card.id}>
                  <MixCoverContainer>
                    <img src={card.imgLink} style={{ width: "159px", height: "159px", borderRadius: "4px" }} loading="lazy" />
                    <CardPlayButton>
                      <BsPlayFill style={{ width: "30px", height: "30px" }} />
                    </CardPlayButton>
                  </MixCoverContainer>
                  <MixHeading>{card.name}</MixHeading>
                  <Container fontSize="0.8175rem" lineHeight="20px" color="#b3b3b3" fontFamily="SpotifyMedium">
                    <ArtistLink>{card.artist}</ArtistLink>, <ArtistLink>{card.artist2}</ArtistLink>, <ArtistLink>{card.artist3}</ArtistLink> and more
                  </Container>
                </VerticalCardContainer>
              ))}
              {/* END OF VERTICAL PLAYLIST CARDS */}
            </LibraryPlaylistGrid>
          </Container>
        </section>
      </main>
    </>
  );
}

export default LibraryPlaylists;
