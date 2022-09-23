import styled from "styled-components";

const DivCenter = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: ${(props) => props.backgroundColor};
  background-image: ${(props) => props.background};
  background-size: 70% 70%;
  background-repeat: no-repeat;
  background-position: center;
  color: ${(props) => props.color};
  z-index: 1;
  display: flex;
  border-radius: ${(props) => props.borderRadius};
  overflow: hidden;
  & .next-page {
    width: 200px;
    height: 200px;
  }
  @media (min-width: 900px) {
    width: ${(props) => props.maxWidth};
    height: ${(props) => props.maxHeight};
  }
  @media (max-width: ${(props) => props.screenWidth}) {
    width: ${(props) => props.minWidth};
    height: ${(props) => props.minHeight};
  }
`;

export { DivCenter };
