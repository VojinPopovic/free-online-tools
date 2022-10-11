import { StyledButton } from "../../styles/calculator-styles/Button.style";

function Button(props) {
  let display = props.propsOb.display;
  let setDisplay = props.propsOb.setDisplay;

  function calculate() {
    let symbols = ["%", "/", "*", "-", "+", "=", ".", "c"];
    if (display === "" && symbols.includes(props.value)) {
      console.log("cao");
    } else if (
      symbols.includes(display.slice(-1)) &&
      symbols.includes(props.value)
    ) {
      console.log("necao");
    } else if (props.value === "c") {
      setDisplay("");
    } else {
      props.propsOb.setValue(props.value);
      setDisplay(display + props.value);
    }
  }

  let classes = "button rounded-3 " + props.className;
  return (
    <StyledButton onClick={calculate} className={classes}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
