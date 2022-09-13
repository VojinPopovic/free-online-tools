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
  pointer-events: none;
  font-family: "Noto Serif HK", serif;
  overflow: visible;
  border: ${(props) => props.borderSize + props.borderColor} solid;
  border-left: none;
  & .contact-container {
    width: auto;
    height: auto;
    margin-bottom: 30px;
    margin-left: 5%;
  }
  & h2 {
    font-size: 1.5rem;
  }
  & .contact {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }
  & .my-image {
    width: 100%;
    height: 100%;
  }
  & .about-description-container{
    width: 100%;
    height: 100%;
    color: #985c42;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    & p {
      width: 80%;
    }
  }
  
  @media (max-width: 1400px) {
    font-size: 5.5rem;
  }
  @media (max-width: 1200px) {
    font-size: 4.5rem;
  }
`;

export { DivSplit };
