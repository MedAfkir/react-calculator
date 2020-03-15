import React from "react";
import Display from "./Display";
import Buttons from "./Buttons";

const Calculator = props => {
  return (
    <div id="calculator">
      <Display />
      <Buttons />
      <p>
        created by&nbsp;
        <a
          href="https://www.instagram.com/afkirmeed/"
          rel="noopener noreferrer"
          target="_blank"
        >
          @afkirmeed
        </a>
      </p>
    </div>
  );
};

export default Calculator;
