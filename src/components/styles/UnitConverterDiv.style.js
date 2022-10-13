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
  & .border {
    border-radius: clamp(0.5px, 2vw, 10px);
  }
`;

const FormDiv = styled.form`
  width: 60%;
  height: 92%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: clamp(0.5rem, 2vw, 1rem);
  & .main-selection,
  input {
    width: 100%;
    height: 15%;
    color: white;
    border: 3px #fcba04 solid;
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
  width: 100%;
  height: 15%;
  text-align: center;
  color: white;
  display: flex;
  justify-content: space-between;

  & p {
    height: 80%;
    border-bottom: 3px #fcba04 solid;
    font-size: clamp(0.5rem, 2vw, 1.2rem);
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 5%;
  }
  & button {
    width: 30%;
    height: 80%;
    border: 3px #fcba04 solid;
    color: white;
  }
`;

export { UnitConverterDiv, FormDiv, UnitSelectionsDiv, ResultDiv, InputDiv };
