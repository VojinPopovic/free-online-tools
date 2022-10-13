import { useEffect, useRef } from "react";
import { DisplayStyle } from "../../styles/calculator-styles/CalcBody.style";

function Display(props) {
  let display = props.display;
  const displayRef = useRef();

  useEffect(() => {
    if (display.length >= 25) {
      displayRef.current.style.fontSize = "clamp(0.5rem, 2.3vw, 1.2rem ";
    }
  }, [display]);
  return (
    <DisplayStyle ref={displayRef}>
      <p>{display}</p>
    </DisplayStyle>
  );
}

export default Display;
