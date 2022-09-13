import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import myImage from "../assets/me.png";

function About() {
  const background = `url('../assets/me.png')`;
  return (
    <>
      <DivSplit color="#985c42" fontSize="5rem"></DivSplit>
      <DivSplit right="0"></DivSplit>
      <DivCenter
        color="#080808"
        background={background}
        width="55vw"
        height="40vw"
      >
        <DivSplit size="1rem" alignItems="flex-start" justify="center">
          <img className="my-image" src={myImage} alt="" />
        </DivSplit>
        <DivSplit fontSize="5rem" borderColor="#985c42" borderSize="2px">
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
