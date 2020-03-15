import React, { useContext } from "react";
import { Context } from "./Provider";
import { Delete } from "react-feather";

const Buttons = props => {
  const {
    handleNumber: number,
    handleOperator: operator,
    handleDecimal: decimal,
    handleResult: result,
    deleteTheLast,
    init
  } = useContext(Context);

  return (
    <>
      <button id="clear" onClick={init}>
        C
      </button>
      <button id="divide" className="operator" onClick={operator}>
        /
      </button>
      <button id="delete" className="delete" onClick={deleteTheLast}>
        <Delete size={24} />
      </button>
      <button id="seven" className="operator" onClick={number}>
        7
      </button>
      <button id="eight" className="operator" onClick={number}>
        8
      </button>
      <button id="nine" className="operator" onClick={number}>
        9
      </button>
      <button className="operator" onClick={operator}>
        x
      </button>
      <button id="four" className="operator" onClick={number}>
        4
      </button>
      <button id="five" className="operator" onClick={number}>
        5
      </button>
      <button id="six" className="operator" onClick={number}>
        6
      </button>
      <button className="operator" onClick={operator}>
        -
      </button>
      <button id="one" className="operator" onClick={number}>
        1
      </button>
      <button id="two" className="operator" onClick={number}>
        2
      </button>
      <button id="three" className="operator" onClick={number}>
        3
      </button>
      <button className="operator" onClick={operator} id="plus">
        +
      </button>
      <button className="operator" onClick={number} id="zero">
        0
      </button>
      <button className="decimal" id="decimal" onClick={decimal}>
        .
      </button>
      <button className="equals" onClick={result}>
        =
      </button>
    </>
  );
};

export default Buttons;
