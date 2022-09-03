import styled from "styled-components";

const Banner = styled.div`
  position: absolute;
  width: 90%;
  height: 40%;
  font-size: 10rem;
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
  & p {
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
    font-family: "Times New Roman", Times, serif;
  }
`;
export { Banner };
