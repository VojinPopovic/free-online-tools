import styled from "styled-components";

const StyledButton = styled.div`
  width: 20%;
  height: 100%;
  color: white;
  outline: 2px #fcba04 solid;
  outline-offset: -2px;
  text-align: center;
  border-radius: clamp(1px, 1.5vw, 10px);
  display: flex;
  justify-content: center;
  align-items: center;
  & svg,
  p {
    height: 50%;
  }
  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(0.2rem, 2vw, 1rem);
  }
`;

export { StyledButton };
