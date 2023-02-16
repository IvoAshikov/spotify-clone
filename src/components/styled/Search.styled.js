import styled from "styled-components";

export const BrowseAllSection = styled.section`
  padding: 0 32px;
  margin-top: ${({ marginTop }) => marginTop};
  width: 100%;
  height: 100%;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: repeat(10, 193px);
  grid-template-columns: repeat(5, 1fr);
  @media (max-width: 768px) {
    grid-template-rows: repeat(25, 93px);
    grid-template-columns: repeat(2, 50%);
    gap: 16px;
  }
`;

export const HeadingTextContainer = styled.div`
  display: flex;
  margin-top: 16px;
  padding-left: 16px;
  @media (max-width: 768px) {
    margin-bottom: ${({ marginBM }) => marginBM};
  }
`;

export const HeadingText = styled.h2`
  font-size: 1.5rem;
  color: white;
  letter-spacing: -1px;
`;

export const GridCard = styled.a`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  border-radius: 8px;
  width: 193px;
  height: 193px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 163px;
    height: 93px;
  }
`;

export const GridCardText = styled.span`
  font-size: 1.5rem;
  padding: 16px;
  overflow-wrap: break-word;
  position: absolute;
  top: 0;
  left: 0;
  color: white;
  letter-spacing: -1px;
  font-family: "SpotifyMedium";
  width: 193px;
  @media (max-width: 768px) {
    font-size: 1rem;
    width: 163px;
  }
`;

export const GridCardImage = styled.img`
  height: 100px;
  width: 100px;
  bottom: 0;
  right: 0;
  transform: rotate(25deg) translate(18%, -2%);
  box-shadow: 0 2px 0 4px rgb(0 0 0 /20%);
  height: 100px;
  overflow: hidden;
  position: absolute;
  object-fit: cover;
  object-position: center center;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 365px;
  height: 40px;
  margin-left: 18px;
  border-radius: 50px;
`;

export const SearchInput = styled.input`
  margin-left: 10px;
  border: none;
  line-height: 30px;
  width: 80%;
  height: 30px;
  &:focus {
    outline: none;
  }
`;

export const SearchMain = styled.main`
  width: "calc(100vw - 251px)";
  background-color: #121212;
  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const MobileInputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: calc(100% - 32px);
  height: 40px;
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 5px;
`;
