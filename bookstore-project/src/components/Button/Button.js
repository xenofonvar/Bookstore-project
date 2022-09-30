import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className="button-container">
      <button type="submit" className="button">
        {props.btnName}
      </button>
    </div>
  );
};

export default Button;
