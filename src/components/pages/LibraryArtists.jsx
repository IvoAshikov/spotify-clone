import React from "react";
import { Container } from "../styled/Container.styled";
import { CardPlayButton, MixHeading, SingleArtistCard, ArtistCoverContainer } from "../styled/Main.styled";
import { BsPlayFill } from "react-icons/bs";
import { LibraryHeadingContainer, LibraryHeadingText, LibraryPlaylistGrid } from "../styled/Library.styled";
import VerticalLibraryArtists from "../jsons/VerticalLibraryArtists.json";

import Navbar from "../Navbar";

function LibraryArtists() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <Container padd="0 32px" margin="80px 0 0 0">
            <LibraryHeadingContainer>
              <LibraryHeadingText>Artists</LibraryHeadingText>
            </LibraryHeadingContainer>
            <LibraryPlaylistGrid>
              {VerticalLibraryArtists.cards.map((card) => (
                <SingleArtistCard key={card.id}>
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
              ))}
            </LibraryPlaylistGrid>
          </Container>
        </section>
      </main>
    </>
  );
}

export default LibraryArtists;
