import { StyledButton } from "../../styles/calculator-styles/Button.style";

function Button(props) {
  function calculate() {
    props.setValue(props.value)

    let symbols = ["%", "/", "*", "-", "+", "="];
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+-"];
  }

  let classes = "button rounded-3 " + props.className;
  return (
    <StyledButton onClick={calculate} className={classes}>
      {props.children}
    </StyledButton>
  );
}

export default Button;
