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
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.alignItems};
  font-family: "Noto Serif HK", serif;
  overflow: visible;
  border: ${(props) => props.borderSize + props.borderColor} solid;
  position: relative;
  & .contact-container {
    width: 95%;
    height: auto;
    margin-bottom: 30px;
    margin-left: 5%;
    margin-right: 10%;
  }
  & h2 {
    font-size: clamp(1.2rem, 2vw, 1.5rem);
  }
  & .contact {
    font-size: clamp(0.8rem, 2vw, 1rem);
    margin-bottom: 20px;
  }
  & .my-image {
    width: 100%;
    height: 100%;
  }
  & .home-title {
    width: 80%;
    font-size: clamp(2rem, 6vw, 6rem);
  }
  & .about-description-container {
    text-align: start;
    color: #985c42;
    font-size: clamp(0.4rem, 1vw, 2rem);
    margin: auto 10%;
    @media (max-width: 1000px) {
      font-size: clamp(0.4rem, 1.5vw, 2rem);
    }
  }
`;

export { DivSplit };
