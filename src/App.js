import React, { useContext } from "react";
import "./css/style.css";
import { Context } from "./components/Provider";
import SwitchBtn from "./components/SwitchBtn";
import Calculator from "./components/Calculator";

const App = props => {
  const { theme, handleTheme } = useContext(Context);
  document.body.setAttribute("data-theme", theme);
  return (
    <>
      <SwitchBtn theme={theme} handleTheme={handleTheme} />
      <Calculator />
    </>
  );
};

export default App;
