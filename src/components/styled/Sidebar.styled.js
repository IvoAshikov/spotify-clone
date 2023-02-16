import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
  position: relative;
  z-index: 3;
  width: 251px;
  position: sticky;
  left: 0;
  top: 0;
  height: calc(100vh - 96px);
`;

export const LinkStyled = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  gap: 16px;
  height: 40px;
  padding: ${({ padd }) => padd};
  color: ${({ theme }) => theme.colors.gray};
  text-decoration: none;
  &:hover span {
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.15s linear;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.15s linear;
  }
`;

export const NavigationText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ font }) => font};
  align-items: center;
  cursor: ${({ curs }) => curs};
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.15s linear;
  }
`;

export const NavigationButton = styled.button`
  padding: 8px 24px 8px 24px;
  background-color: transparent;
  cursor: pointer;
  border: none;
  align-items: center;
  display: flex;
  opacity: 0.7;
  width: 100%;
  transition: opacity 0.2s linear;
  min-height: max-content;
  &:hover span {
    color: ${({ theme }) => theme.colors.white};
    transition: color 0.15s linear;
  }
  &:hover div {
    background-color: ${({ theme }) => theme.colors.white};
    transition: color 0.15s linear;
    border-radius: 3px;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  color: ${({ theme }) => theme.colors.black};
  height: 24px;
  width: 24px;
  background-color: ${({ theme }) => theme.colors.gray};
  background: ${({ bgC }) => bgC};
`;

export const HLine = styled.hr`
  border: none;
  background-color: ${({ theme }) => theme.colors.border};
  min-height: 1px;
  height: 1px;
  margin: 8px 24px 0 24px;
`;
