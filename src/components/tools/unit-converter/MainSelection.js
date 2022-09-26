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
        <option value="length">length</option>
        <option value="area">area</option>
        <option value="volume">volume</option>
        <option value="weight">weight</option>
        <option value="time">time</option>
      </select>
    </>
  );
}

export default MainSelection;
