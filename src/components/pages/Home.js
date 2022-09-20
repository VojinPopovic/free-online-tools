import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import { Banner } from "../styles/Banner.style";

function Home() {
  return (
    <>
      <DivSplit color="#EF626C"></DivSplit>
      <DivSplit right="0"></DivSplit>
      <DivCenter width="45vw" height="40vw" minWidth="55vw" screenWidth="500px">
        {/* prettier-ignore */}
        <DivSplit textColor="#080808" alignItems="flex-start" justify="center">
          <p className="home-title">Enjoy</p>
          <p className="home-title">Our</p>
          <p className="home-title">Tools</p>
        </DivSplit>
      </DivCenter>
      <Banner growth="8vw" ls="1px" top="0" bottom="0" alignItems="center">
        <p>FREE ONLINE TOOLS</p>
      </Banner>
    </>
  );
}

export default Home;
