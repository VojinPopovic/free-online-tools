import styled from "styled-components";

const UnitConverterDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #080808;
  position: absolute;
  color: #fcba04;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormDiv = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & .main-selection,
  input {
    width: 100%;
    height: 15%;
    color: white;
    border: 3px #fcba04 solid;
    border-radius: 10px;
    text-align: center;
    

    & option {
      background-color: #080808;
      text-align: center;
    }
  }
`;

const UnitSelectionsDiv = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: column;
  & .margin {
    margin-bottom: 10px;
  }
  & .unit-selection {
    height: 100%;
    color: white;
    border: 3px #fcba04 solid;
    border-radius: 10px;
    text-align: center;
    
  }
  & option {
    background-color: #080808;
    text-align: center;
  }
`;
const InputDiv = styled.div`
  width: 100%;
  height: 12%;
  & input {
    width: 100%;
    height: 100%;
  }
`;

const ResultDiv = styled.div`
  width: 90%;
  height: 15%;
  text-align: center;
  color: white;
  & p {
    border-bottom: 3px #fcba04 solid;
    font-size: 1.2rem;
  }
`;

export { UnitConverterDiv, FormDiv, UnitSelectionsDiv, ResultDiv, InputDiv };
