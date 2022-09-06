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
`;

export { GlobalStyles, MainDiv };
