import React from "react";

import "./style.css";

const Button = ({ alphabet, handleClick }) => {
  return (
    <div className="button" onClick={() => handleClick(alphabet)}>
      {alphabet}
    </div>
  );
};

export default Button;
