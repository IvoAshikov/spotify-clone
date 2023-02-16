import React from "react";
import { Container } from "../styled/Container.styled";
import { VerticalCardContainer, MixCoverContainer, CardPlayButton, MixHeading, ArtistLink } from "../styled/Main.styled";
import { BsPlayFill } from "react-icons/bs";

import { LibraryHeadingContainer, LibraryHeadingText, LibraryLiked, LibraryPlaylistGrid, LikedHeadingText, LibraryCardPlayButton } from "../styled/Library.styled";
import VerticalPodcasts from "../jsons/VerticalPodcasts.json";
import Navbar from "../Navbar";

function LibraryPodcasts() {
  return (
    <>
      <Navbar />
      <main>
        <section>
          <Container padd="0 32px" margin="80px 0 0 0">
            <LibraryHeadingContainer>
              <LibraryHeadingText>Podcasts</LibraryHeadingText>
            </LibraryHeadingContainer>
            <LibraryPlaylistGrid>
              <LibraryLiked background="linear-gradient(.316turn,#00644e 50.57%,#27856a)">
                <div>
                  <LikedHeadingText fontSize="2rem" marginTop="10rem" letterSpacing="-2px">
                    Your Episodes
                  </LikedHeadingText>
                  <LikedHeadingText fontFamily="SpotifyLight" fontSize="1rem" marginTop="1rem">
                    0 episodes
                  </LikedHeadingText>
                </div>
                <LibraryCardPlayButton>
                  <BsPlayFill style={{ width: "30px", height: "30px" }} />
                </LibraryCardPlayButton>
              </LibraryLiked>

              {VerticalPodcasts.cards.map((card) => (
                <VerticalCardContainer key={card.id}>
                  <MixCoverContainer>
                    <img src={card.imgLink} style={{ width: "159px", height: "159px", borderRadius: "4px" }} loading="lazy" />
                    <CardPlayButton>
                      <BsPlayFill style={{ width: "30px", height: "30px" }} />
                    </CardPlayButton>
                  </MixCoverContainer>
                  <MixHeading>{card.podcastName}</MixHeading>
                  <Container fontSize="0.8175rem" lineHeight="20px" color="#b3b3b3" fontFamily="SpotifyMedium">
                    <ArtistLink>{card.podcastAuthor}</ArtistLink>
                  </Container>
                </VerticalCardContainer>
              ))}
            </LibraryPlaylistGrid>
          </Container>
        </section>
      </main>
    </>
  );
}

export default LibraryPodcasts;
