import styled from "styled-components";

const FormContact = styled.form`
  width: 100%;
  height: 100%;
  color: #1aa14a;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: #080808;
  & div {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    & label {
      width: auto;
      height: auto;
      text-align: start;
      font-size: 1.5rem;
    }
    & input {
      width: 100%;
      height: 40px;
      border: 2px #1aa14a solid;
    }
    & textarea {
      width: 100%;
      height: 100px;
      border: 2px #1aa14a solid;
    }
    & button {
      width: 40%;
      height: 40px;
      border: 2px #1aa14a solid;
      color: #1aa14a;
    }
    @media (max-width: 1200px) {
      font-size: 1rem;
      & label {
        font-size: 1rem;
      }
    }
  }
`;

export { FormContact };
