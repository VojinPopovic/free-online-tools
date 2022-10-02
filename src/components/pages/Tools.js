import { DivSplit } from "../styles/DivSplit.style";
import { DivCenter } from "../styles/DivCenter.style";
import { Banner } from "../styles/Banner.style";
import { Button } from "../styles/Button.style";
import { useState, useEffect, useRef } from "react";
import UnitConverter from "../tools/unit-converter/UnitConverter";
import Calculator from "../tools/Calculator";

function Projects() {
  let background = `url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 64 64"%3E%3Cpath fill="%2394989b" d="m20.9 50.9l30-30c3.5.8 7.3-.1 10-2.8c2.7-2.7 3.6-6.5 2.8-10L55 16.7l-6.1-1.6L47.3 9L56 .3c-3.5-.8-7.3.1-10 2.8c-2.7 2.7-3.6 6.5-2.8 10l-30 30c-3.5-.8-7.3.1-10 2.8C-1 50-1 56.8 3.1 60.9c4.1 4.1 10.9 4.1 15 0c2.7-2.7 3.6-6.5 2.8-10m-8.7 8.6l-6.1-1.6l-1.6-6.1L9 47.3l6.1 1.6l1.6 6.1l-4.5 4.5"%2F%3E%3Cpath fill="%233e4347" d="m28.8 21.9l-5.6 5.8l-5.5-5.7l5.5-5.8z"%2F%3E%3Cpath fill="%2394989b" d="M16.7 5.1L6.9 15.2c-.4.4-.4 1 0 1.3l3.7 3.8l3.7 3.8c.4.4.9.4 1.3 0L25.4 14c.4-.4.4-1 0-1.3L18 5.1c-.3-.4-.9-.4-1.3 0M.3 22c-.4.4-.4 1 0 1.3L7.6 31c.4.4.9.4 1.3 0c0 0 2-2.1 2.1-2.2l-8.6-8.9C2.3 19.9.3 22 .3 22"%2F%3E%3Cpath fill="%233e4347" d="m10.5 20.4l-3.7-3.8s1.2 2.1-2 2.5c-1.3.2-2.1.4-2.5.8l8.6 8.9c.4-.5.6-1.3.8-2.6c.4-3.3 2.4-2 2.4-2l-3.6-3.8M39.6 4.3C29.5-6 18.4 5.5 18.4 5.5l6.5 6.7s6.3-8.5 14.2-6.1c.9.3 1.7.7 2 .5c.4-.3-.8-1.6-1.5-2.3"%2F%3E%3Cpath fill="%23f2b200" d="m26 24.8l-3.6 3.7s1.9 3 5.1 6.3c3.5 3.6 8.2 5.7 12.9 10.5c7 7.2 12.8 15 14.9 17.9c.8 1.1.9 1 1.9 0l3-3.1L26 24.8"%2F%3E%3Cpath fill="%23ffce31" d="m26 24.8l3.6-3.7s2.9 1.9 6.1 5.2c3.5 3.6 5.5 8.5 10.2 13.3c7 7.2 14.5 13.2 17.4 15.4c1.1.8 1 1 0 2l-3 3.1L26 24.8"%2F%3E%3C%2Fsvg%3E')`;
  let color = "#FCBA04";

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
      <DivSplit left="0">
        <Banner bottom="7vh" growth="3vw" className="projects-banner">
          <p ref={bannerRef}>SELECT THE TOOL</p>
        </Banner>
      </DivSplit>
      <DivSplit color={color} right="0"></DivSplit>
      {/* prettier-ignore */}
      <DivCenter maxWidth="500px" maxHeight="500px" backgroundColor="#080808" background={background} width="70vw" height="70vw" borderRadius="10%">
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
