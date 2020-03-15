import React from "react";
import Sun from "../icons/sun.svg";
import Moon from "../icons/moon.svg";

const SwitchBtn = ({ handleTheme, theme }) => {
  return (
    <div id="switch" onClick={handleTheme}>
      <img src={theme === "dark" ? Sun : Moon} alt="" width="20" />
    </div>
  );
};

export default SwitchBtn;
