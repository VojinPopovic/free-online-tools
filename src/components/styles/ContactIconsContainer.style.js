import styled from "styled-components";

const ContactIconsContainer = styled.div`
  width: 150px;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 2%;
  & .svg-container {
    width: 33.3%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & svg {
    width: 30px;
    height: 100%;
  }
`;

export { ContactIconsContainer };
