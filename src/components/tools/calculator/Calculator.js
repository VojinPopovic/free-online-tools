import { UnitConverterDiv } from "../../styles/UnitConverterDiv.style";
import { CalcBody } from "../../styles/calculator-styles/CalcBody.style";
import Display from "./Display";
import Buttons from "./Buttons";

function Calculator() {
  return (
    <UnitConverterDiv>
      <CalcBody>
        <div className="display-container">
          <Display></Display>
        </div>
        <div className="buttons-container">
          <Buttons></Buttons>
        </div>
      </CalcBody>
    </UnitConverterDiv>
  );
}

export default Calculator;
