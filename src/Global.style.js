import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  background: transparent;
  box-sizing: border-box;
  overflow: hidden;

 }
 .active{
  outline: 1px white solid;
  outline-offset: -1px;
  border-radius: clamp(0px, 1vw, 5px);
 }
 ul{
  overflow: visible;
 }
 li{
 padding: 5px 20px;
 }
 body{
 }
a {
  text-decoration: none;
  color: white;
}
`;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #080808;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  z-index: 1;
  & .next-page {
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 2%;
    & svg {
      width: 100%;
      height: 66%;
    }
  }
`;

export { GlobalStyles, MainDiv };
