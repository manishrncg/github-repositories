import React from "react";
import { Link } from "react-router-dom";
import Img from "../common/Img/Img";
import CustomBtn from "../common/CustomBtn";
import PeopleSvgIcon from "../common/icons/PeopleSvgIcon";
import StarFaIcon from "../common/icons/StarFaIcon";
import BuildingSvgIcon from "../common/icons/BuildingSvgIcon";
import MapPinSvgIcon from "../common/icons/MapPinSvgIcon";
import MailSvgIcon from "../common/icons/MailSvgIcon";

const ProfileDetails = (props) => {
  const {
    avatar_url,
    bio,
    company,
    email,
    location,
    name,
    login,
    followers,
    following,
    stars,
  } = props;
  return (
    <div className="profile-details pad-section-default">
      <div className="profile-pic-container">
        <a className="pic-container" href={avatar_url}>
          <Img src={avatar_url} className="profile-pic" />
        </a>
        <h1 className="name-container pad-top-section pad-bottom-section">
          <span className="user-name">{name}</span>
          <span className="user-id">{login}</span>
        </h1>
      </div>
      <div className="user-bio">{bio || ""}</div>
      <div className="d-flex follow-container">
        <CustomBtn className="flex-1 follow-me">Follow</CustomBtn>
        <span className="report pad-section-top-secondary pad-section-bottom-secondary">
          ···
        </span>
      </div>
      <div className="profile-links d-flex justy-bw margin-top-default margin-bottom-default">
        <Link className="h-link d-flex" to="">
          <PeopleSvgIcon className="people-icon" />
          <span className="dark-grey">&nbsp;{followers}&nbsp;</span> followers
          &nbsp;
        </Link>
        ·
        <Link className="h-link" to="">
          <span className="dark-grey">&nbsp;{following}&nbsp;</span> following
          &nbsp;
        </Link>
        ·
        <Link className="h-link" to="">
          <StarFaIcon />
          <span className="dark-grey">&nbsp;{stars || 0}&nbsp;</span>
        </Link>
      </div>
      <div className="details-card">
        {company && (
          <div className="d-flex detail">
            <BuildingSvgIcon />
            {company}
          </div>
        )}
        {location && (
          <div className="d-flex detail">
            <MapPinSvgIcon />
            {location}
          </div>
        )}
        {email && (
          <div className="d-flex detail">
            <MailSvgIcon />
            {email}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;
