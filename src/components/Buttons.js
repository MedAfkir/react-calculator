import React from "react";

const Buttons = props => {
  return (
    <>
      <button id="clear">C</button>
      <button id="percent" className="operator">
        %
      </button>
      <button id="divide" className="operator">
        /
      </button>
      <button id="seven" className="number">
        7
      </button>
      <button id="eight" className="number">
        8
      </button>
      <button id="nine" className="number">
        9
      </button>
      <button className="operator">x</button>
      <button id="four" className="number">
        4
      </button>
      <button id="five" className="number">
        5
      </button>
      <button id="six" className="number">
        6
      </button>
      <button className="operator">-</button>
      <button id="one" className="number">
        1
      </button>
      <button id="two" className="number">
        2
      </button>
      <button id="three" className="number">
        3
      </button>
      <button className="operator" id="plus">
        +
      </button>
      <button className="number" id="zero">
        0
      </button>
      <button className="number" id="decimal">
        .
      </button>
      <button className="equals">=</button>
    </>
  );
};

export default Buttons;
