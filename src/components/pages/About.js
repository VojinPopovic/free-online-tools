import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import { Banner } from "../styles/Banner.style";

function About() {
  const background = `url('../assets/me.png')`;
  return (
    <>
      <DivSplit color="#985c42" fontSize="5rem"></DivSplit>
      <DivSplit right="0">
        <Banner top="10vh" growth="10vw" className="projects-banner" justify="flex-end">
          <p>04</p>
        </Banner>
      </DivSplit>
      <DivCenter
        color="#080808"
        background={background}
        width="50vw"
        height="35vw"
        screenWidth="1000px"
        minWidth="55vw"
        minHeight="40vw"
      >
        <DivSplit size="1rem" justify="center" borderColor="#080808" borderSize="6px" borderRight="none" alignItems="center" bRadius="10%">
          <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="#080808" d="m23.1 16l6.3-6.3c.8-.8.8-2 0-2.8l-4.2-4.2c-.8-.8-2-.8-2.8 0L16 8.9L9.7 2.6c-.8-.8-2-.8-2.8 0L2.6 6.8c-.8.8-.8 2 0 2.8L8.9 16L2 22.9V30h7.1l6.9-6.9l6.3 6.3c.8.8 2 .8 2.8 0l4.2-4.2c.8-.8.8-2 0-2.8L23.1 16zm.7-12L28 8.2l-6.3 6.3l-4.2-4.2L23.8 4zM8.2 28H4v-4.2l6.3-6.3l4.2 4.2L8.2 28zm15.6 0L4 8.2L8.2 4l3.5 3.5l-2.1 2.1L11 11l2.1-2.1l4.2 4.2l-2.1 2.1l1.4 1.4l2.1-2.1l4.2 4.2l-1.9 2.2l1.4 1.4l2.1-2.1l3.5 3.5l-4.2 4.3z"/></svg>
        </DivSplit>
        <DivSplit borderColor="#985c42" borderSize="6px" borderLeft="none" bRadius="10%">
          <div className="about-description-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium soluta commodi porro magni aliquid sapiente officia,
              dicta, dolorum nesciunt vel perspiciatis ad facilis adipisci quo
              quasi quis nulla ut sunt, cumque eos corrupti repudiandae quia
              dolores aliquam? Quod, magnam illo!
            </p>
          </div>
        </DivSplit>
      </DivCenter>
    </>
  );
}

export default About;
