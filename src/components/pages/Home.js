import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import { Banner } from "../styles/Banner.style";

function Home() {
  return (
    <>
      <DivSplit color="#ffaf21"></DivSplit>
      <DivSplit right="0"></DivSplit>
      <DivCenter width="50vw" height="40vw">
        <DivSplit textColor="#080808" size="7rem" alignItems="flex-start" justify="center">
          <p>Hi,</p>
          <p>I'm</p>
          <p>Vojin</p>
        </DivSplit>
      </DivCenter>
      <Banner fontSize="10rem">
        <p>FRONTEND DEV.</p>
      </Banner>
    </>
  );
}

export default Home;
