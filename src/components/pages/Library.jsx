import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "../styled/Container.styled";
import LibraryArtists from "./LibraryArtists";
import LibraryPlaylists from "./LibraryPlaylists";
import LibraryPodcasts from "./LibraryPodcasts";
import LibraryAlbums from "./LibraryAlbums";

function Library() {
  const location = useLocation();
  return (
    <>
      <Container bgColor="#121212" width="calc(100vw - 251px)">
        {location.pathname === "/collection/playlists" && <LibraryPlaylists />}
        {location.pathname === "/collection/podcasts" && <LibraryPodcasts />}
        {location.pathname === "/collection/artists" && <LibraryArtists />}
        {location.pathname === "/collection/albums" && <LibraryAlbums />}
      </Container>
    </>
  );
}

export default Library;
