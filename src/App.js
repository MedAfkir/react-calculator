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

  document.body.setAttribute("data-theme", theme);
  return (
    <>
      <SwitchBtn theme={theme} handleTheme={handleTheme} />
      <Calculator currentValue={currentValue} />
    </>
  );
};

export default App;
