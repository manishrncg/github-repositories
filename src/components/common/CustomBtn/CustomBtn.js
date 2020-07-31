import React from "react";

import "./customBtn.scss";

const CustomBtn = (props) => {
  const { children, className, onClickEventHandler } = props;
  return (
    
    <button
      type="button"
      className={"custom-btn " + (className || "")}
      onClick={onClickEventHandler}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
