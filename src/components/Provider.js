import React, { useState } from "react";

const Context = React.createContext();

const Provider = props => {
  const [theme, setTheme] = useState("dark");
  const [value, setValue] = useState("0");
  const [currentVal, setCurrentValue] = useState("0");
  const [evaluated, setEvaluated] = useState(false);
  const [isDecimal, setIsDecimal] = useState(false);
  const [error, setError] = useState(false);

  const endsWithOperator = /[+/x-]$/,
    endsWithNegSign = /[+/x]-$/;

  const handleTheme = () => setTheme(theme === "dark" ? "light" : "dark");
  const handleOperator = e => {
    const operator = e.target.textContent;
    setIsDecimal(false);

    if (!error) setEvaluated(false);

    if (!endsWithNegSign.test(value) && !error) {
      setCurrentValue("");
      if (endsWithOperator.test(value)) {
        if (operator === "-") {
          setValue(
            /[-]$/.test(value)
              ? value.slice(0, -1) + operator
              : value + operator
          );
        } else {
          setValue(value.slice(0, -1) + operator);
        }
      } else {
        setValue(
          /[.]$/.test(value) ? value.slice(0, -1) + operator : value + operator
        );
      }
    }
  };
  const handleNumber = e => {
    const number = e.target.textContent;
    if (!evaluated) {
      setCurrentValue(currentVal === "0" ? number : currentVal + number);
      setValue(currentVal === "0" ? value : value + number);
    } else {
      setValue(number);
      setCurrentValue(number);
      setEvaluated(false);
      setError(false);
    }
  };
  const deleteTheLast = () => {
    if (!error) {
      setValue(value.length > 1 ? value.slice(0, -1) : "0");
      setCurrentValue(setCurrentValue.slice(0, -1));
    } else init();
  };
  const handleDecimal = e => {
    setIsDecimal(true);
    setEvaluated(false);
    if (!isDecimal) {
      setValue(endsWithOperator.test(value) ? value + "0." : value + ".");
      setCurrentValue(endsWithOperator.test(value) ? "0." : currentVal + ".");
    }
    if (evaluated) setValue("0.");
  };
  const handleResult = () => {
    let formula = "";
    if (endsWithOperator.test(value)) {
      formula = value.slice(0, -1).replace(/[x]/g, "*");
    } else {
      formula = value.replace(/[x]/g, "*");
    }
    console.log(eval(formula));
    let result = eval(formula);
    if (result === Infinity || isNaN(result)) {
      setError(true);
      result = "Error !";
    }
    setEvaluated(true);
    setIsDecimal(false);

    setValue(result + "");
    setCurrentValue(result + "");
  };
  const init = () => {
    setValue("0");
    setIsDecimal(false);
    setError(false);
    setCurrentValue("0");
  };

  return (
    <Context.Provider
      value={{
        theme,
        handleTheme,
        value,
        handleOperator,
        handleNumber,
        handleDecimal,
        handleResult,
        deleteTheLast,
        init
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Provider, Context };
