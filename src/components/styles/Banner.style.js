import styled from "styled-components";

const Banner = styled.div`
  position: absolute;
  width: 90%;
  height: auto;
  font-size: ${(props) => props.fontSize};
  color: white;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  right: 0;
  left: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: ${props => props.alignItems};
  z-index: ${(props) => props.zIndex};
  letter-spacing: 5px;
  text-align: center;
  & p {
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
    font-family: "Times New Roman", Times, serif;
    white-space: nowrap;
    font-size: clamp(0.5rem, ${(props) => props.growth}, 9rem);
    @media (max-width: 1200px) {
      white-space: break-word;
      letter-spacing: ${(props) => props.ls};
    }
  }
`;
export { Banner };
