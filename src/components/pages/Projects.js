import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import { Banner } from "../styles/Banner.style";

function Projects(props) {
  return (
    <>
      <DivSplit left="0"></DivSplit>
      <DivSplit color={props.backgroundColor} right="0"></DivSplit>
      <DivCenter
        maxWidth="600px"
        maxHeight="600px"
        backgroundColor={props.backgroundColor}
        background={props.background}
        width="40vw"
        height="40vw"
        borderRadius={props.borderRadius}
      ></DivCenter>
      <Banner zIndex="2" growth="15vw" ls="10px">
        <p>{props.banner}</p>
      </Banner>
    </>
  );
}

export default Projects;
