import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as faStarFilled } from "@fortawesome/free-solid-svg-icons";

const StarFaIcon = (props) => {
  const { filled, className } = props;

  return (
    <FontAwesomeIcon
      icon={filled ? faStarFilled : faStar}
      className={className || ""}
    />
  );
};

export default StarFaIcon;
