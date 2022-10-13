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
    width: 75%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    & .form-control{
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
      width: 100%;
      height: 40px;
    }
    & textarea {
      width: 100%;
      height: 100px;
    }
    & .submit-btn{
      width: 40%;
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
