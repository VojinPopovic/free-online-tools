import {
  UnitSelectionsDiv,
  ResultDiv,
  InputDiv,
} from "../../styles/UnitConverterDiv.style";

function ConvertInterface(props) {
  let keys = Object.keys(props.apiObject);
  function getInputValue(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <InputDiv>
        <input onKeyDown={getInputValue} type="number" placeholder="Value" />
      </InputDiv>
      <UnitSelectionsDiv>
        <select defaultValue={"DEFAULT"} className="unit-selection margin">
          {keys.map((key) => (
            <option value={key} key={Math.random()}>
              {key}
            </option>
          ))}
        </select>
        <select defaultValue={"DEFAULT"} className="unit-selection">
          {keys.map((key) => (
            <option value={key} key={Math.random()}>
              {key}
            </option>
          ))}
        </select>
      </UnitSelectionsDiv>
      <ResultDiv>
        <p>fasfasfas</p>
      </ResultDiv>
    </>
  );
}

export default ConvertInterface;
