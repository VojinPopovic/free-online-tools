import Buttons from "./Buttons";

function DisplayUpdater(props) {

  return (
    <>
      <Buttons value={props.value} setValue={props.setValue}></Buttons>
    </>
  );
}

export default DisplayUpdater;
