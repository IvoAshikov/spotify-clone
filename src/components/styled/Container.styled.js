import styled from "styled-components";

export const Container = styled.div`
  display: ${({ display }) => display};
  padding: ${({ padd }) => padd};
  margin: ${({ margin }) => margin};
  justify-content: ${({ jContent }) => jContent};
  align-items: center;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  min-width: ${({ mWidth }) => mWidth};
  max-width: ${({ maxWidth }) => maxWidth};
  min-height: ${({ minHeight }) => minHeight};
  position: ${({ pos }) => pos};
  box-shadow: ${({ bShadow }) => bShadow};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-flow: ${({ flexFlow }) => flexFlow};
  flex-grow: ${({ flexGrow }) => flexGrow};
  background-color: ${({ bgColor }) => bgColor};
  background: ${({ background }) => background};
  grid-gap: ${({ gridGap }) => gridGap};
  overflow-y: ${({ overflowY }) => overflowY};
  bottom: ${({ bottom }) => bottom};
  opacity: ${({ opacity }) => opacity};
  transition: ${({ transition }) => transition};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  font-family: ${({ fontFamily }) => fontFamily};
  z-index: ${({ zIndex }) => zIndex};
  border-radius: ${({ borderRadius }) => borderRadius};
  cursor: ${({ cursor }) => cursor};
  @media (max-width: 768px) {
    padding: ${({ paddM }) => paddM};
    width: ${({ widthM }) => widthM};
    overflow-y: ${({ overflowYM }) => overflowYM};
    margin: ${({ marginM }) => marginM};
  }
`;
