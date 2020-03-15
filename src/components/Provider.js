import React, { useContext, useState } from "react";

const Context = useContext([]);

const Provider = props => {
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

  return <Context.Provider value={}>{props.children}</Context.Provider>;
};

export { Context };
