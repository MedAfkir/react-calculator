import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = ({
  currentValue,
  handleOperator,
  handleNumber,
  handleDecimal,
  handleResult,
  init
}) => {
  return (
    <div id="calculator">
      <Display result={currentValue} />
      <Buttons
        number={handleNumber}
        operator={handleOperator}
        decimal={handleDecimal}
        result={handleResult}
      />
      <p>
        created by&nbsp;
        <a href="https://www.instagram.com/afkirmeed/" target="_blank">
          @afkirmeed
        </a>
      </p>
    </div>
  );
};

export default Calculator;
