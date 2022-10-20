import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import { Banner } from "../styles/Banner.style";

function About() {
  const background = `url('../assets/me.png')`;
  return (
    <>
      <DivSplit color="#985c42" fontSize="5rem"></DivSplit>
      <DivSplit right="0">
        <Banner bottom="2px" className="projects-banner" justify="flex-start" >
          <p className="page-number">04</p>
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
        maxWidth="700px" 
        maxHeight="500px"
      >
        <DivSplit justify="center" borderColor="#080808" borderSize="6px" borderRight="none" alignItems="center" bRadius="10%">
          <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 31.87 32"><path fill="#080808" d="M.646 5.646c-.847.848-.666 2.042.008 2.715c.027.026 2.734 2.612 6.541 6.419a.498.498 0 0 0 .708 0a.5.5 0 0 0 0-.707c-.574-.574-1.12-1.117-1.638-1.631l1.589-1.589a.5.5 0 0 0-.707-.707l-1.593 1.593a498.15 498.15 0 0 0-2.315-2.271l3.615-3.615a.5.5 0 0 0-.707-.707L2.521 8.772c-.736-.713-1.16-1.118-1.167-1.125c-.211-.211-.488-.805 0-1.293l5-5c.193-.196.707-.585 1.271-.024c.025.028 2.55 2.896 6.404 6.75a.5.5 0 0 0 .707-.707C10.906 3.544 8.4.698 8.354.646c-.932-.93-2.056-.651-2.707 0l-5.001 5zm21.208 18.5a.5.5 0 0 0-.707 0l-1.591 1.59a350.22 350.22 0 0 0-1.53-1.541a.5.5 0 0 0-.707.707a295.59 295.59 0 0 1 6.328 6.509c.343.344.813.533 1.323.533c.525 0 1.056-.205 1.385-.535l4.998-5.057c.629-.629.665-1.696.078-2.285l-6.706-6.705a.5.5 0 0 0-.707.707l6.706 6.705c.2.2.162.632-.079.873l-4.999 5.057c-.115.116-.376.24-.676.24c-.172 0-.418-.042-.604-.229c-.01-.011-.429-.458-1.156-1.219l3.644-3.644a.5.5 0 0 0-.707-.707l-3.629 3.629a328.619 328.619 0 0 0-2.26-2.326l1.596-1.596a.5.5 0 0 0 0-.706zM.142 31.829a.5.5 0 0 0 .501.129l10-2.979a.49.49 0 0 0 .212-.127l17.09-17.205c.024-.024.036-.055.054-.082l3.656-3.656a1.552 1.552 0 0 0 0-2.203L26.42.472c-.588-.588-1.615-.588-2.203 0l-3.739 3.739c-.024.024-.037.055-.055.083L3.307 21.411a.495.495 0 0 0-.122.199l-3.16 9.715a.499.499 0 0 0 .117.504zM20.86 5.271l1.039 1.039L6.376 21.875l-1.727-.392L20.86 5.271zM7 22.666L22.607 7.018l2.436 2.436L9.295 25H7v-2.334zm19.884-11.37L10.64 27.65l-.577-2.002L25.75 10.161l1.134 1.135zM3.993 22.359L6 22.815V25.5a.5.5 0 0 0 .5.5h2.624l.634 2.2l-8.488 2.529l2.723-8.37zm20.932-21.18a.57.57 0 0 1 .789 0l5.235 5.235a.554.554 0 0 1-.001.789l-3.371 3.372l-6.023-6.023l3.371-3.373z"/></svg>
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
