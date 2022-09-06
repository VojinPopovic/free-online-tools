import styled from "styled-components";

const DivSplit = styled.div`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.color};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.size};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  pointer-events: none;
  font-family: "Noto Serif HK", serif;
  overflow: visible;
  & p {
    text-align: justify;
  }
  @media (max-width: 1400px) {
    font-size: 5.5rem;
  }
  @media (max-width: 1200px) {
    font-size: 4.5rem;
  }
`;

export { DivSplit };
