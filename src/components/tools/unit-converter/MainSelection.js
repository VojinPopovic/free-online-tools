import React from "react";

function MainSelection(props) {
  function selection(e) {
    props.setApi(e.target.value);
  }

  return (
    <>
      {/*prettier-ignore*/}
      <select onChange={selection} defaultValue={"DEFAULT"} className="main-selection" name="main-selection" id="main-selectionf">
        <option value="DEFAULT" disabled hidden>
          Select what to convert
        </option>
        <option value="Length">Length</option>
        <option value="Area">Area</option>
        <option value="Temperature">Temperature</option>
        <option value="Volume">Volume</option>
        <option value="Weight">Weight</option>
        <option value="Time">Time</option>
      </select>
    </>
  );
}

export default MainSelection;
