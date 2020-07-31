import React from "react";

import "./img.scss";

const Img = (props) => {
  const { src, alt, className } = props;
  return (
    <img
      src={src}
      alt={alt || ""}
      className={"custom-img " + (className || "")}
    />
  );
};

export default Img;
