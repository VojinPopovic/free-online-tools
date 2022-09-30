import {
  UnitSelectionsDiv,
  ResultDiv,
  InputDiv,
} from "../../styles/UnitConverterDiv.style";

function ConvertInterface(props) {
  let keys = Object.keys(props.apiObject);

  function inputHandler(e) {
    props.setInput(e.target.value);
  }

  function getOptionValueOne(e) {
    props.setOptionOne(e.target.value);
  }
  function getOptionValueTwo(e) {
    props.setOptionTwo(
      "ratio" + e.target.value.toLowerCase().replace(/ /g, "")
    );
  }

  return (
    <>
      <InputDiv>
        <input type="number" onKeyUp={inputHandler} placeholder="Enter value" className="border" />
      </InputDiv>
      <UnitSelectionsDiv>
        {/*prettier-ignore*/}
        <select onChange={getOptionValueOne} defaultValue={"DEFAULT"} className="unit-selection margin border" name="unitsone" id="unitsone">
        <option value="DEFAULT" hidden>
          Select the unit 
        </option>
          {keys.map((key) => (
            <option value={key} key={key}>
              {key}
            </option>
          ))}
        </select>
        {/*prettier-ignore*/}
        <select onChange={getOptionValueTwo} defaultValue={"DEFAULT"}  className="unit-selection border" name="unitstwo" id="unitstwo">
        <option value="DEFAULT" hidden>
          Select the unit 
        </option>
          {keys.map((key) => (
            <option value={key} key={key}>
              {key}
            </option>
          ))}
        </select>
      </UnitSelectionsDiv>
      <ResultDiv>
        <button type="submit" className="border">Convert</button>
        <p>{props.result}</p>
      </ResultDiv>
    </>
  );
}

export default ConvertInterface;
