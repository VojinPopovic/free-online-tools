import styled from "styled-components";

const DivCenter = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: ${(props) => props.backgroundColor};
  background-image: ${(props) => props.background};
  background-size: 100% 100%;
  color: ${(props) => props.color};
  z-index: 1;
  display: flex;
  @media (min-width: 1400px) {
    width: ${(props) => props.maxWidth};
    height: ${(props) => props.maxHeight};
  }
`;

export { DivCenter };
