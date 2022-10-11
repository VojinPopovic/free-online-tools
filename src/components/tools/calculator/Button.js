import { StyledButton } from "../../styles/calculator-styles/Button.style";

function Button(props) {
  let display = props.propsOb.display;
  let setDisplay = props.propsOb.setDisplay;

  function calculate() {
    let symbols = ["%", "/", "*", "-", "+", ".", "="];
    if (display === "" && symbols.includes(props.value)) {
      alert("Can't use operator at the start of the expression");
    } else if (props.value === "c") {
      setDisplay("");
    } else if (props.value === "=") {
      let evaluation = display;
      evaluation.replace(/[^-()\d/*+.]/g, "");
      setDisplay(eval(evaluation));
    } else if (
      symbols.includes(props.value) &&
      symbols.includes(display.toString().slice(-1))
    ) {
      alert("Can't use 2 operators in a row");
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
