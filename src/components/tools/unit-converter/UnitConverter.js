import { UnitConverterDiv, FormDiv } from "../../styles/UnitConverterDiv.style";
import MainSelection from "./MainSelection";
import ConvertInterface from "./ConvertInterface";
import { useState, useEffect } from "react";

function UnitConverter() {
  const [api, setApi] = useState("length");
  const [apiObject, setApiObject] = useState({});
  const [input, setInput] = useState();
  const [optionOne, setOptionOne] = useState();
  const [optionTwo, setOptionTwo] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    fetch(`https://unit-converter-api.herokuapp.com/${api}`)
      .then((response) => response.json())
      .then((data) => setApiObject(data));
  }, [api]);

  function submitHandler(e) {
    e.preventDefault();
    let ratio;
    if (
      optionTwo !== undefined &&
      optionOne !== undefined &&
      apiObject !== undefined 
    ) {
      ratio = apiObject[optionOne][optionTwo];
      let results = ratio * input 
      console.log(ratio, input)
      setResult(results);
    }
  }

  console.log(optionOne, optionTwo, result);
  return (
    <>
      <UnitConverterDiv className="unit-converter-container">
        <FormDiv onSubmit={submitHandler}>
          <MainSelection setApi={setApi} />
          <ConvertInterface
            apiObject={apiObject}
            api={api}
            optionOne={optionOne}
            optionTwo={optionTwo}
            setOptionOne={setOptionOne}
            setOptionTwo={setOptionTwo}
            setInput={setInput}
            result={result}
          />
        </FormDiv>
      </UnitConverterDiv>
    </>
  );
}

export default UnitConverter;
