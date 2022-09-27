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
  let i = 0;

  return (
    <>
      <InputDiv>
        <input type="number" onKeyUp={inputHandler} placeholder="Enter value" />
      </InputDiv>
      <UnitSelectionsDiv>
        {/*prettier-ignore*/}
        <select onChange={getOptionValueOne} defaultValue={"DEFAULT"} className="unit-selection margin" name="unitsone" id="unitsone">
        <option value="DEFAULT" disabled hidden>
          Select the unit 
        </option>
          {keys.map((key) => (
            <option value={key} key={i++}>
              {key}
            </option>
          ))}
        </select>
        {/*prettier-ignore*/}
        <select onChange={getOptionValueTwo} defaultValue={"DEFAULT"}  className="unit-selection" name="unitstwo" id="unitstwo">
        <option value="DEFAULT" disabled hidden>
          Select the unit 
        </option>
          {keys.map((keyd) => (
            <option value={keyd} key={i++}>
              {keyd}
            </option>
          ))}
        </select>
      </UnitSelectionsDiv>
      <ResultDiv>
        <button type="submit">Convert</button>
        <p>{props.result}</p>
      </ResultDiv>
    </>
  );
}

export default ConvertInterface;
