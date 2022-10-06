function Button(props) {
  function calculate() {
    let value = props.value;

    let symbols = ["%", "/", "*", "-", "+", "="];
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+-"];

    for (let i = 0; i < symbols.length; i++) {
      if (value === symbols[i]) {
        for (let j = 0; j < symbols.length; j++) {
          if (props.propsi.display.includes(symbols[j])) {
            props.setDisplay("");
            props.setCalc(symbols[i]);
            props.setExpression(props.display);
          } else if (props.propsi.display.includes()) {
          }
        }
      }
    }
    for (let i = 0; i < numbers.length; i++) {
      if (value === numbers[i]) {
        props.setDisplay(props.propsi.display + numbers[i]);
      }
    }
  }

  let classes = "button rounded-3 " + props.className;
  return (
    <div onClick={calculate} className={classes}>
      {props.children}
    </div>
  );
}

export default Button;
