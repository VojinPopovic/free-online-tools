import React from "react";
import { DivCenter } from "../styles/DivCenter.style";
import { DivSplit } from "../styles/DivSplit.style";

function UnitConverter() {
  return (
    <>
      <DivSplit></DivSplit>
      <DivSplit right="0" color="white"></DivSplit>
      <DivCenter width="60vw" height="60vw" backgroundColor="white"></DivCenter>
    </>
  );
}

export default UnitConverter;
