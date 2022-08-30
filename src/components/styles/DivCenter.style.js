import styled from "styled-components";

const DivCenter = styled.div`
  width: 50vh;
  height: 50vh;
  background-color: ${(props) => props.color};
  background-image: ${(props) => props.background};
  background-size: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

export { DivCenter };
