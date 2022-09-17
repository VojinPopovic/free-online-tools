import styled from "styled-components";

const Banner = styled.div`
  position: absolute;
  width: 90%;
  height: 40%;
  font-size: ${(props) => props.fontSize};
  color: white;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: ${(props) => props.zIndex};
  letter-spacing: 20px;
  text-align: center;
  & p {
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
    font-family: "Times New Roman", Times, serif;
    white-space: nowrap;
    font-size: clamp(2rem, ${(props) => props.growth}, 9rem);
    @media (max-width: 1200px) {
      white-space: break-word;
      letter-spacing: ${(props) => props.ls};
    }
  }
`;
export { Banner };
