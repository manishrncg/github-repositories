import React, { useState } from "react";
import CustomBtn from "../CustomBtn";
import CaretFaIcon from "../icons/CaretFaIcon";
import CheckSvgIcon from "../icons/CheckSvgIcon";

import "./dropDown.scss";

const DropDown = (props) => {
  const {
    placeholder,
    defaultValue,
    dropdownHead,
    list,
    name,
    onClickEventHandler,
  } = props;
  const [openList, setOpenList] = useState(false);
  const [selected, setSeleected] = useState(defaultValue);
  const showHideList = () => {
    setOpenList((value) => !value);
  };
  const checkBoxEventHanlder = (value) => {
    return () => {
      setSeleected(value);
      onClickEventHandler(value, name);
      setOpenList(false);
    };
  };
  return (
    <div className="drop-down-container">
      <CustomBtn
        className="drop-down-btn margin-right-divider"
        onClickEventHandler={showHideList}
      >
        {placeholder + selected.name}{" "}
        <CaretFaIcon down={true} className="caret-small" />
      </CustomBtn>
      {openList && (
        <ul className="drop-down-list">
          <p className="head border-bottom-primary">{dropdownHead}</p>
          {list.map((ele) => (
            <li
              key={ele.name}
              className="d-flex align-center border-bottom-primary"
              onClick={checkBoxEventHanlder(ele)}
            >
              <CheckSvgIcon
                className={
                  "check-icon " +
                  (selected.accessor === ele.accessor ? "selected" : "")
                }
              />
              {ele.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
