import React from "react";

import "./customInput.scss";

const CustomInput = (props) => {
  const {
    name,
    type,
    value,
    placeholder,
    className,
    onChangeEventHandler,
  } = props;
  const handleInputChange = (e) => {
    onChangeEventHandler(e.target.value);
  };

  return (
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      className={"custom-input " + (className || "")}
      onChange={handleInputChange}
    />
  );
};

export default CustomInput;
