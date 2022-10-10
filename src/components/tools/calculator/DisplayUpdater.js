import Buttons from "./Buttons";

function DisplayUpdater(props) {
  return (
    <>
      <Buttons
        value={props.value}
        setValue={props.setValue}
        display={props.display}
        setDisplay={props.setDisplay}
      ></Buttons>
    </>
  );
}

export default DisplayUpdater;
