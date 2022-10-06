import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import { Banner } from "../styles/Banner.style";
import myImage from "../assets/me.png";

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
        <DivSplit size="1rem" alignItems="flex-start" justify="center">
          <img className="my-image" src={myImage} alt="" />
        </DivSplit>
        <DivSplit borderColor="#985c42" borderSize="2px">
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
