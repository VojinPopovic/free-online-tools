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
  & .main-selection,
  input {
    width: 100%;
    height: 50px;
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

export { UnitConverterDiv, FormDiv };
