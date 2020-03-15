import React, { useContext } from "react";
import { Context } from "./Provider";

const Display = props => {
  const { value } = useContext(Context);
  return (
    <div id="display">
      <p>{value}</p>
    </div>
  );
};

export default Display;
