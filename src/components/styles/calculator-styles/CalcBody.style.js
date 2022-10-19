import styled from "styled-components";

const CalcBody = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px #009FB7 solid;
  & .display-container {
    width: 90%;
    height: 40%;
  }
  & .buttons-container {
    width: 90%;
    height: 60%;
    display: flex;
    flex-direction: column;
  }
`;
const ButtonGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 5%;
  margin-bottom: clamp(0.5rem, 1vw, 1.2rem);
`;

const DisplayStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    width: 95%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #009FB7;
    word-break: break-all;
    font-size: clamp(0.7rem, 3vw, 1.5rem);
  }
`;

export { CalcBody, ButtonGroup, DisplayStyle };
