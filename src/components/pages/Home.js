import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import { Banner } from "../styles/Banner.style";

function Home() {
  return (
    <>
      <DivSplit color="#ffaf21"></DivSplit>
      <DivSplit right="0"></DivSplit>
      <DivCenter>
        <DivSplit textColor="#080808" size="7rem">
          <p>Hi,</p>
          <p>I'm</p>
          <p>Vojin</p>
        </DivSplit>
        <DivSplit size="7rem" right="0">
        </DivSplit>
      </DivCenter>
      <Banner>
        <p>FRONTEND DEV.</p>
      </Banner>
    </>
  );
}

export default Home;
