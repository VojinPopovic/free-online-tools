import { UnitConverterDiv } from "../../styles/UnitConverterDiv.style";
import { CalcBody } from "../../styles/calculator-styles/CalcBody.style";
import Display from "./Display";
import DisplayUpdater from "./DisplayUpdater";
import { useState, useEffect } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    setDisplay((prev) => prev + value);
  }, [value]);

  return (
    <UnitConverterDiv>
      <CalcBody className="border">
        <div className="display-container">
          <Display display={display} value={value} />
        </div>
        <div className="buttons-container">
          <DisplayUpdater
            display={display}
            setDisplay={setDisplay}
            setValue={setValue}
          />
        </div>
      </CalcBody>
    </UnitConverterDiv>
  );
}

export default Calculator;
