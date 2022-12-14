import styled from "styled-components";

const FormContact = styled.form`
  width: 100%;
  height: 90%;
  color: #1aa14a;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: #080808;
  & div {
    width: 90%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    & .form-control {
      border: 2px #1aa14a solid;
      border-radius: clamp(0.5px, 2vw, 10px);
      color: white;
    }
    & label {
      width: auto;
      height: auto;
      text-align: start;
      font-size: 1.2rem;
    }
    & input {
      width: 90%;
      height: 40px;
      @media (max-width: 1200px) {
        width: 100%;
      }
    }
    & input::placeholder {
      text-align: center;
      font-size: clamp(0.5rem, 2.5vw, 1rem);
    }
    & textarea {
      width: 90%;
      height: 100px;
      @media (max-width: 1200px) {
        width: 100%;
      }
    }
    & .submit-btn {
      width: 30%;
      height: 40px;
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
