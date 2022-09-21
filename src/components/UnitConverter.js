function UnitConverter(props) {
  function changeBackground() {
    props.setDivBackground("none");
  }

  return (
    <>
      <div
        className="unit-converter-container"
        onClick={changeBackground}
      ></div>
    </>
  );
}

export default UnitConverter;
