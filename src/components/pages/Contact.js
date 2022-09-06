import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import Form from "../Form";

function Contact() {
  const background = ``;
  return (
    <>
      <DivSplit color="#1aa14a" fontSize="5rem"></DivSplit>
      <DivSplit right="0"></DivSplit>
      <DivCenter color="#080808" background={background}>
        <DivSplit></DivSplit>
        <DivSplit color="#1aa14a" fontSize="5rem" right="0">
          <Form></Form>
        </DivSplit>
      </DivCenter>
    </>
  );
}

export default Contact;
