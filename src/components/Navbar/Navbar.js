import React from "react";
import CustomBtn from "../common/CustomBtn";
import Img from "../common/Img";
import OpenBookSvgIcon from "../common/icons/OpenBookSvgIcon";
import RepoSvgIcon from "../common/icons/RepoSvgIcon";
import ProjectSvgIcon from "../common/icons/ProjectSvgIcon";

import "./navbar.scss";

const Navbar = (props) => {
  const { showMiniProfile, avatar_url, login } = props;
  return (
    <div className="nav-container border-bottom-primary">
      <nav className="d-flex default-page-width">
        <div className="profile-details-small pad-section-default">
          {showMiniProfile && (
            <>
              <div className="d-flex align-center">
                <Img src={avatar_url} className="profile-pic" />
                <div>
                  <div className="user-id">{login}</div>
                  <CustomBtn className="flex-1 follow-me">Follow</CustomBtn>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="nav-btns d-flex pad-section-default">
          <CustomBtn
            className="profile-page d-flex align-center"
            onClickEventHandler={() => {}}
          >
            <OpenBookSvgIcon />
            Overview
          </CustomBtn>
          <CustomBtn
            className="profile-page d-flex selected"
            onClickEventHandler={() => {}}
          >
            <RepoSvgIcon />
            Repositories <span className="repo-count">12</span>
          </CustomBtn>
          <CustomBtn
            className="profile-page d-flex"
            onClickEventHandler={() => {}}
          >
            <ProjectSvgIcon />
            Projects
          </CustomBtn>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
