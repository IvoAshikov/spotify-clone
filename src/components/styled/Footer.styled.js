import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  min-width: 620px;
  height: auto;
  z-index: 4;
  background-color: ${({ theme }) => theme.colors.footerColor};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  flex-direction: row;
  width: 100%;
`;

export const CoverArtImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const TitleText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const AuthorText = styled.span`
  font-size: 0.6875rem;
  color: ${({ theme }) => theme.colors.gray};
  font-family: "SpotifyMedium";
`;

export const IconButton = styled.button`
  color: hsla(0, 0%, 100%, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  height: 32px;
  width: 32px;
  min-width: 32px;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ButtonSliderContainer = styled.div`
  margin-right: 4px;
  display: flex;
  flex-direction: 0 1 125px;
  position: relative;
`;

export const VolumeInput = styled.input`
  -webkit-appearance: none;
  width: 93px;
  height: 4px;
  background-color: hsla(0, 0%, 100%, 0.3);
  accent-color: green;
  border-radius: 25px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 10px;
    height: 10px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
    border-radius: 50%;
    background-color: white;
  }
`;

export const RangeInput = styled.input`
  -webkit-appearance: none;
  width: 438px;
  height: 4px;
  background-color: hsla(0, 0%, 100%, 0.3);
  accent-color: green;
  border-radius: 25px;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 8px;
    height: 8px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
    border-radius: 50%;
    background-color: white;
  }
`;

export const TrackDuration = styled.span`
  display: flex;
  align-items: center;
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.gray};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  font-family: "SpotifyLight";
`;
