import React from "react";
import "./InputBox.scss";
const InputBox = ({
  firstChild,
  lastChild,
  value,
  onChange,
  placeHolder,
  type = "text",
}) => {
  return (
    <div className="input_box_container">
      {firstChild && <div className="first_child">{firstChild}</div>}
      <input
        {...{ value, onChange, placeHolder, type }}
        className={`inputbox poppins-medium ${lastChild && "shift_x"}`}
      />
      {lastChild && <div className="last_child">{lastChild}</div>}
    </div>
  );
};

export default InputBox;
