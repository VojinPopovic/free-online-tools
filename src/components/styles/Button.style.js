import styled from "styled-components";

const Button = styled.button`
  width: clamp(40px, 3vw, 100px);
  border: none;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  & svg {
    color: ${(props) => props.color};
  }
`;

export { Button };
