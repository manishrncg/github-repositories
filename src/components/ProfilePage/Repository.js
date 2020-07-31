import React, { useState } from "react";
import CustomBtn from "../common/CustomBtn";
import StarFaIcon from "../common/icons/StarFaIcon";
import { formatDate } from "../../utils/formatDate";

const renderLangCircleClass = (language) => {
  switch (language) {
    case "HTML":
      return "orange";
    case "CSS":
      return "purple";
    case "JavaScript":
      return "yellow";
    default:
      return "";
  }
};

const Repository = (props) => {
  // console.log(props);
  const {
    className,
    name,
    language,
    html_url,
    stargazers_count,
    pushed_at,
    description,
    fork,
    forks_url,
  } = props;
  const formatDatedDate = formatDate(pushed_at);
  const [fillStar, setFillStar] = useState(false);
  const joinName = typeof(name) === "string" ? name.split("-").join("") : "";
  const onClickHandler = () => {
    setFillStar(!fillStar);
  };

  return (
    <li className={"repository border-bottom-primary" + (className || "")}>
      <div>
        <div className="repo-name d-flex justify-bw">
          <a href={html_url}>{name}</a>
          <CustomBtn
            className="star-repo d-flex align-center"
            onClickEventHandler={onClickHandler}
          >
            <StarFaIcon filled={fillStar} />
            {fillStar ? "Unstar" : "Star"}
          </CustomBtn>
        </div>
        {fork && (
          <div className="forked">
            Forked from <a href={forks_url}>{joinName+"/"+name}</a>
          </div>
        )}
        <div className="description">{description}</div>
        <div className="repo-details d-flex">
          {language && (
            <>
              <div
                className={"circle " + renderLangCircleClass(language)}
              ></div>
              <span className="margin-right-divider">{language}</span>
            </>
          )}
          {stargazers_count > 0 && (
            <span className="margin-right-divider">
              <StarFaIcon />
              &nbsp;
              {stargazers_count}
            </span>
          )}
          {pushed_at && (
            <span>
              Updated on{" "}
              {formatDatedDate.day +
                " " +
                formatDatedDate.month +
                " " +
                formatDatedDate.year}
            </span>
          )}
        </div>
      </div>
    </li>
  );
};

export default Repository;
