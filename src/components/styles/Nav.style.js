import styled from "styled-components";

const NavStyle = styled.nav`
  width: 100%;
  height: 100px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  overflow: visible;
  z-index: 20;
`;

const LogoDivStyle = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  margin-left: 3%;
`;

const UnorderedList = styled.ul`
  width: 30%;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  text-decoration: none;
  text-align: center;
  & li {
    margin-top: ${(props) => props.mt};
  }
`;
const HamburgerContainer = styled.div`
  display: ${(props) => props.display};
  margin-right: 5%;
  & svg {
    width: 40px;
    height: 40px;
  }
`;

export { NavStyle, LogoDivStyle, UnorderedList, HamburgerContainer };
