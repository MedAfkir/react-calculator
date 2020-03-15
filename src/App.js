import React, { useState } from "react";
import "./css/style.css";
import SwitchBtn from "./components/SwitchBtn";
import Calculator from "./components/Calculator";

const endsWithOperator = /[+/x-]$/,
  isOperator = /[+-/x]/;

const App = props => {
  const [theme, setTheme] = useState("dark");
  const [currentValue, setCurrentValue] = useState(0);
  const [evaluated, setEvaluated] = useState(false);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleOperator = e => {
    const value = e.target.textContent;
    console.log("operator", value);
  };

  const handleNumber = e => {
    const value = e.target.textContent;
    console.log("number", value);
  };

  const handleDecimal = e => {
    const value = e.target.textContent;
    console.log("decimal", value);
  };

  const handleResult = () => {};

  const init = () => {
    console.log("initialize the state");
  };

  document.body.setAttribute("data-theme", theme);
  return (
    <>
      <SwitchBtn theme={theme} handleTheme={handleTheme} />
      <Calculator
        currentValue={currentValue}
        handleDecimal={handleDecimal}
        handleNumber={handleNumber}
        handleOperator={handleOperator}
        handleResult={handleResult}
        init={init}
      />
    </>
  );
};

export default App;
