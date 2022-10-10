import { StyledButton } from "../../styles/calculator-styles/Button.style";

function Button(props) {
  let display = props.propsOb.display;
  let setDisplay = props.propsOb.setDisplay;

  function calculate() {
    props.propsOb.setValue(props.value);
    setDisplay(display + props.value);
  }

  let classes = "button rounded-3 " + props.className;
  return (
    <StyledButton onClick={calculate} className={classes}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
