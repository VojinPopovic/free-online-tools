import { UnitConverterDiv, FormDiv } from "../../styles/UnitConverterDiv.style";
import MainSelection from "./MainSelection";
import ConvertInterface from "./ConvertInterface";
import { useState, useEffect } from "react";

function UnitConverter() {
  const [api, setApi] = useState("length");
  const [apiObject, setApiObject] = useState({});
  useEffect(() => {
    fetch(`https://unit-converter-api.herokuapp.com/${api}`)
      .then((response) => response.json())
      .then((data) => setApiObject(data));
  }, [api]);

  return (
    <>
      <UnitConverterDiv className="unit-converter-container">
        <FormDiv>
          <ConvertInterface apiObject={apiObject} />
          <MainSelection setApi={setApi} />
        </FormDiv>
      </UnitConverterDiv>
    </>
  );
}

export default UnitConverter;
