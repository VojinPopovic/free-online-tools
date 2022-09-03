import styled from "styled-components";

const DivSplit = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.color};
  position: absolute;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.size};
  pointer-events: none;
`;

export { DivSplit };
