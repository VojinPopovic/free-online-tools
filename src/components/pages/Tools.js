import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import { Banner } from "../styles/Banner.style";
import { Button } from "../styles/Button.style";
import { useState, useEffect, useRef } from "react";
import UnitConverter from "../tools/unit-converter/UnitConverter";
import Calculator from "../tools/calculator/Calculator";

function Projects() {
  let background = `url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 31.87 32"%3E%3Cpath fill="%23009fb7" d="M.646 5.646c-.847.848-.666 2.042.008 2.715c.027.026 2.734 2.612 6.541 6.419a.498.498 0 0 0 .708 0a.5.5 0 0 0 0-.707c-.574-.574-1.12-1.117-1.638-1.631l1.589-1.589a.5.5 0 0 0-.707-.707l-1.593 1.593a498.15 498.15 0 0 0-2.315-2.271l3.615-3.615a.5.5 0 0 0-.707-.707L2.521 8.772c-.736-.713-1.16-1.118-1.167-1.125c-.211-.211-.488-.805 0-1.293l5-5c.193-.196.707-.585 1.271-.024c.025.028 2.55 2.896 6.404 6.75a.5.5 0 0 0 .707-.707C10.906 3.544 8.4.698 8.354.646c-.932-.93-2.056-.651-2.707 0l-5.001 5zm21.208 18.5a.5.5 0 0 0-.707 0l-1.591 1.59a350.22 350.22 0 0 0-1.53-1.541a.5.5 0 0 0-.707.707a295.59 295.59 0 0 1 6.328 6.509c.343.344.813.533 1.323.533c.525 0 1.056-.205 1.385-.535l4.998-5.057c.629-.629.665-1.696.078-2.285l-6.706-6.705a.5.5 0 0 0-.707.707l6.706 6.705c.2.2.162.632-.079.873l-4.999 5.057c-.115.116-.376.24-.676.24c-.172 0-.418-.042-.604-.229c-.01-.011-.429-.458-1.156-1.219l3.644-3.644a.5.5 0 0 0-.707-.707l-3.629 3.629a328.619 328.619 0 0 0-2.26-2.326l1.596-1.596a.5.5 0 0 0 0-.706zM.142 31.829a.5.5 0 0 0 .501.129l10-2.979a.49.49 0 0 0 .212-.127l17.09-17.205c.024-.024.036-.055.054-.082l3.656-3.656a1.552 1.552 0 0 0 0-2.203L26.42.472c-.588-.588-1.615-.588-2.203 0l-3.739 3.739c-.024.024-.037.055-.055.083L3.307 21.411a.495.495 0 0 0-.122.199l-3.16 9.715a.499.499 0 0 0 .117.504zM20.86 5.271l1.039 1.039L6.376 21.875l-1.727-.392L20.86 5.271zM7 22.666L22.607 7.018l2.436 2.436L9.295 25H7v-2.334zm19.884-11.37L10.64 27.65l-.577-2.002L25.75 10.161l1.134 1.135zM3.993 22.359L6 22.815V25.5a.5.5 0 0 0 .5.5h2.624l.634 2.2l-8.488 2.529l2.723-8.37zm20.932-21.18a.57.57 0 0 1 .789 0l5.235 5.235a.554.554 0 0 1-.001.789l-3.371 3.372l-6.023-6.023l3.371-3.373z"%2F%3E%3C%2Fsvg%3E')`;
  let color = "#009FB7";

  const [counter, setCounter] = useState(0);
  const [ifZero, setIfZero] = useState(false);
  const [rendered, setRendered] = useState();
  const bannerRef = useRef();

  useEffect(() => {
    if (ifZero) {
      switch (counter) {
        case 1:
          setRendered(<UnitConverter />);
          bannerRef.current.innerText = "UNIT CONVERTER";
          break;
        case 2:
          setRendered(<Calculator />);
          bannerRef.current.innerText = "CALCULATOR";
          break;
        default:
          if (counter > 2) {
            setCounter(1);
          } else if (counter < 1) {
            setCounter(2);
          }
      }
    }
  }, [counter, ifZero]);

  function toolRenderLeft() {
    setCounter(counter - 1);
    setIfZero(true);
  }
  function toolRenderRight() {
    setCounter(counter + 1);
    setIfZero(true);
  }

  return (
    <>
      <DivSplit left="0" color={color}>
        <Banner color="#080808" bottom="7vh" growth="3vw" className="projects-banner" justify="center">
          <p ref={bannerRef}>SELECT THE TOOL</p>
        </Banner>
      </DivSplit>
      <DivSplit right="0">
        {/* prettier-ignore */}
        <Banner bottom="2px" className="projects-banner" justify="flex-start" >
          <p className="page-number">02</p>
        </Banner>
        {/* prettier-ignore */}
      </DivSplit>
      {/* prettier-ignore */}
      <DivCenter maxWidth="500px" maxHeight="500px" backgroundColor="#080808" background={background} width="60vw" height="60vw" borderRadius="10%">
        {rendered}
        <Button left="2%" color={color} onClick={toolRenderLeft}>
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/></svg>
        </Button>
        <Button right="2%" color={color} onClick={toolRenderRight}>
          {/* prettier-ignore */}
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><path fill="currentColor" fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/></svg>
        </Button> 
      </DivCenter>
      {/* prettier-ignore */}
    </>
  );
}

export default Projects;
