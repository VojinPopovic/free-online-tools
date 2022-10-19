import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import { Banner } from "../styles/Banner.style";

function Home() {
  return (
    <>
      <DivSplit color="#EF626C"></DivSplit>
      <DivSplit right="0">
        <Banner bottom="-3px" growth="7vw" className="projects-banner" justify="flex-start">
          <p>01</p>
        </Banner>
      </DivSplit>
      <DivCenter width="60vw" height="45vw" maxWidth="700px" screenWidth="700px">
        {/* prettier-ignore */}
        <DivSplit textColor="#080808" alignItems="center" justify="center">
          <p className="home-title">Enjoy</p>
          <p className="home-title">Our</p>
          <p className="home-title">Tools</p>
        </DivSplit>
      </DivCenter>
      <Banner growth="8vw" ls="1px" top="0" bottom="0" justify="center" alignItems="center">
        <p>FREE ONLINE TOOLS</p>
      </Banner>
    </>
  );
}

export default Home;
