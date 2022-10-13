import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import { Banner } from "../styles/Banner.style";
import Form from "../Form";

function Contact() {
  return (
    <>
      <DivSplit color="#1aa14a" fontSize="5rem"></DivSplit>
      <DivSplit right="0">
        <Banner top="10vh" growth="10vw" className="projects-banner" justify="flex-end" zIndex="2">
          <p>03</p>
        </Banner>
      </DivSplit>
      <DivCenter color="#080808" width="80vw" height="40vw" screenWidth="900px" minHeight="50%">
        <DivSplit size="1rem" alignItems="flex-start" justify="center">
          <div className="contact-container">
            <h2>Contact me</h2>
            <p className="contact">Phone: +38164/118-9886</p>
          </div>
          <div className="contact-container">
            <h2>Email</h2>
            <p className="contact">vojinpopovic3@gmail.com</p>
          </div>
          <div className="contact-container">
            <p className="contact">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              voluptatibus quia illum ut totam asperiores? Quasi, possimus.
              Repellendus, maxime nesciunt!
            </p>
          </div>
        </DivSplit>
        <DivSplit fontSize="5rem">
          <Form></Form>
        </DivSplit>
      </DivCenter>
    </>
  );
}

export default Contact;
