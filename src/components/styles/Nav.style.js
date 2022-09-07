import styled from "styled-components";

const NavStyle = styled.nav`
  width: 100%;
  height: 100px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  &:hover {
    background-color: #080808;
  }
  z-index: 20;
`;

const LogoDivStyle = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const UnorderedList = styled.ul`
  width: 30%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
`;
const HamburgerContainer = styled.div`
  margin-right: 5%;
`;

export { NavStyle, LogoDivStyle, UnorderedList, HamburgerContainer };
