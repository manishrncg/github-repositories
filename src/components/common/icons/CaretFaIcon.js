import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

const CaretFaIcon = (props) => {
  const { down, className } = props;

  return (
    <FontAwesomeIcon
      icon={down ? faCaretDown : faCaretUp}
      className={className || ""}
    />
  );
};

export default CaretFaIcon;
