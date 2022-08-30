import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";

function Contact() {
  const background = `url("data:image/svg+xml,%3Csvg width='70' height='70' viewBox='0 0 70 70' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231aa14a' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h35v35H0V0zm5 5h25v25H5V5zm5 5h15v15H10V10zm5 5h5v5h-5v-5zM40 5h25v25H40V5zm5 5h15v15H45V10zm5 5h5v5h-5v-5zM70 35H35v35h35V35zm-5 5H40v25h25V40zm-5 5H45v15h15V45zm-5 5h-5v5h5v-5zM30 40H5v25h25V40zm-5 5H10v15h15V45zm-5 5h-5v5h5v-5z'/%3E%3C/g%3E%3C/svg%3E");`
  return (
    <>
      <DivSplit color="#1aa14a"></DivSplit>
      <DivSplit right="0"></DivSplit>
      <DivCenter color="#080808" background={background}></DivCenter>
    </>
  );
}

export default Contact;
