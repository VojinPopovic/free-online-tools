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
  & p {
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 1);
    font-family: "Times New Roman", Times, serif;
    white-space: nowrap;
    @media (max-width: 1400px) {
      font-size: 8rem;
    }
    @media (max-width: 1200px) {
      font-size: 7rem;
    }
    @media (max-width: 950px) {
      font-size: 6rem;
      white-space: normal;
    }
    @media (max-width: 950px) {
      font-size: 5.5rem;
      white-space: normal;
    }
  }
`;
export { Banner };
