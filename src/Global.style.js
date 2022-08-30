import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
 }
`;

const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #080808;
`;

export { GlobalStyles, MainDiv };
