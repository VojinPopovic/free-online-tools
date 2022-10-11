import { UnitConverterDiv } from "../../styles/UnitConverterDiv.style";
import { CalcBody } from "../../styles/calculator-styles/CalcBody.style";
import Display from "./Display";
import DisplayUpdater from "./DisplayUpdater";
import { useState, useEffect, useCallback } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [value, setValue] = useState("");

  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+-"];

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
            value={value}
          />
        </div>
      </CalcBody>
    </UnitConverterDiv>
  );
}

export default Calculator;
