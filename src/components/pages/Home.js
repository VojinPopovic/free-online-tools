import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import { Banner } from "../styles/Banner.style";

function Home() {
  return (
    <>
      <DivSplit color="#ffaf21"></DivSplit>
      <DivSplit right="0"></DivSplit>
      <DivCenter width="45vw" height="40vw" minWidth="55vw" screenWidth="500px">
        {/* prettier-ignore */}
        <DivSplit textColor="#080808" alignItems="flex-start" justify="center">
          <p className="home-title">Hi,</p>
          <p className="home-title">I'm</p>
          <p className="home-title">Vojin</p>
        </DivSplit>
      </DivCenter>
      <Banner growth="9vw" ls="5px">
        <p>FRONTEND DEV.</p>
      </Banner>
    </>
  );
}

export default Home;
