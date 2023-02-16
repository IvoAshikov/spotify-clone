import React from "react";
import { Container } from "../styled/Container.styled";
import { CardPlayButton, MixHeading, VerticalCardContainer, MixCoverContainer, ArtistLinkLight } from "../styled/Main.styled";
import { BsPlayFill } from "react-icons/bs";
import { LibraryHeadingContainer, LibraryHeadingText, LibraryPlaylistGrid } from "../styled/Library.styled";
import LibraryAlbumsAuth from "../jsons/LibraryAlbums.json";
import Navbar from "../Navbar";

function LibraryAlbums() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <Container padd="0 32px" margin="80px 0 0 0">
            <LibraryHeadingContainer>
              <LibraryHeadingText>Albums</LibraryHeadingText>
            </LibraryHeadingContainer>
            <LibraryPlaylistGrid>
              {/* SINGLE ALBUM */}
              {LibraryAlbumsAuth.cards.map((card) => (
                <VerticalCardContainer key={card.id}>
                  <MixCoverContainer>
                    <img src={card.imgLink} style={{ width: "159px", height: "159px", borderRadius: "4px" }} loading="lazy" />
                    <CardPlayButton>
                      <BsPlayFill style={{ width: "30px", height: "30px" }} />
                    </CardPlayButton>
                  </MixCoverContainer>
                  <MixHeading>{card.albumName}</MixHeading>
                  <Container fontSize="0.8175rem" lineHeight="20px" color="#b3b3b3" fontFamily="SpotifyMedium">
                    <ArtistLinkLight>{card.artist}</ArtistLinkLight>
                    {card.artist2 && ", "}
                    {card.artist2 && <ArtistLinkLight>{card.artist2}</ArtistLinkLight>}
                  </Container>
                </VerticalCardContainer>
              ))}
              {/* END OF SINGLE ALBUM */}
            </LibraryPlaylistGrid>
          </Container>
        </section>
      </main>
    </>
  );
}

export default LibraryAlbums;
