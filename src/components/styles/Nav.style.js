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
  & .logo-container {
    height: 40%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const UnorderedList = styled.ul`
  width: ${(props) => props.ulWidth};
  height: ${(props) => props.ulHeight};
  list-style: none;
  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: ${(props) => props.fDirection};
  justify-content: space-around;
  align-items: center;
  & li {
    margin-top: ${(props) => props.mt};
  }
`;
const HamburgerContainer = styled.div`
  display: ${(props) => props.display};
  position: ${(props) => props.hamPosition};
  margin-right: 5%;
  right: 0;
  top: 25px;
  & svg {
    width: 40px;
    height: 40px;
  }
`;

const UlContainer = styled.div`
  width: 50vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.bColor};
`;

export {
  NavStyle,
  LogoDivStyle,
  UnorderedList,
  HamburgerContainer,
  UlContainer,
};
