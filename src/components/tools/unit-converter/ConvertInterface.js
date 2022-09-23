function ConvertInterface(props) {
  let keys = Object.keys(props.apiObject);
  function getInputValue(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <div className="input-container">
        <input onKeyDown={getInputValue} type="text" placeholder="Value"  />
      </div>
      <div className="units-selection-container">
        <select defaultValue={"DEFAULT"} className="main-selection">
          {keys.map((key) => (
            <option value={key} key={Math.random()}>
              {key}
            </option>
          ))}
        </select>
        <select defaultValue={"DEFAULT"} className="main-selection">
          {keys.map((key) => (
            <option value={key} key={Math.random()}>
              {key}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default ConvertInterface;
