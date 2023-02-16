import styled from "styled-components";

export const PlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: 32px;
  width: 32px;
  border-radius: 32px;
  color: ${({ theme }) => theme.colors.black};
  border: none;
  transition: none 33ms cubic-bezier(0.3, 0, 0.7, 1);
  transition-property: all;
  position: relative;
  min-width: 32px;
`;
