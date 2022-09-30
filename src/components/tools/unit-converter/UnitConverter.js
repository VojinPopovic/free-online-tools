import { UnitConverterDiv, FormDiv } from "../../styles/UnitConverterDiv.style";
import MainSelection from "./MainSelection";
import ConvertInterface from "./ConvertInterface";
import { useState, useEffect } from "react";

function UnitConverter() {
  const [api, setApi] = useState();
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
    )
      console.log(optionOne, optionTwo);
    if ("ratio" + optionOne.toLowerCase().replace(/ /g, "") === optionTwo) {
      ratio = 1;
      let results = ratio * input;
      setResult(results);
    } else {
      ratio = apiObject[optionOne][optionTwo];
      let results = ratio * input;
      setResult(results);
    }
  }

  return (
    <>
      <UnitConverterDiv className="unit-converter-container">
        <FormDiv onSubmit={submitHandler}>
          <MainSelection
            setApi={setApi}
          />
          <ConvertInterface
            apiObject={apiObject}
            input={input}
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
