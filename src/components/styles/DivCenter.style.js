import styled from "styled-components";

const DivCenter = styled.div`
  width: 70vh;
  height: 50vh;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  color: ${props => props.color};
`;

export { DivCenter };
