import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../Navbar";
import CustomInput from "../common/CustomInput";
import ProfileDetails from "./ProfileDetails";
import Repository from "./Repository";
import Dropdown from "../common/DropDown";
import { apiCall } from "../common/common";
import { profileDetailsApi, userBasedReposApi } from "../common/constants";
import { mobileCheck } from "../../utils/mobileCheck";

import "./profilePage.scss";

let orignalRepoData = [];

const ProfilePage = () => {
  const [search, setSearch] = useState("");
  const [profileDetails, setProfileDetails] = useState({});
  const [reposList, setReposList] = useState([]);
  const [showMiniProfile, setShowMiniProfile] = useState(false);
  let searchResultCount = reposList.length;
  const fetchProfileDetails = () => {
    apiCall(
      "GET",
      profileDetailsApi.replace("USER_ID", "supreetsingh247"),
      {},
      {}
    ).then((response) => {
      setProfileDetails(response.data);
    });
  };

  const fetchAllRepos = () => {
    apiCall(
      "GET",
      userBasedReposApi.replace("USER_ID", "supreetsingh247"),
      {},
      {}
    ).then((response) => {
      orignalRepoData = response.data.sort((a, b) => {
        const date1 = new Date(a.pushed_at);
        const date2 = new Date(b.pushed_at);
        return date2.getTime() - date1.getTime();
      });
      setReposList(orignalRepoData);
    });
  };

  const filterRepoData = useCallback((searchInput) => {
    const searchValue = searchInput.toLowerCase();
    const filteredData = orignalRepoData.filter((ele) => {
      let name = ele.name;
      if (name !== null) {
        return name.includes(searchValue);
      }
      return false;
    });
    setReposList(filteredData);
  }, []);

  const filterDropDownData = (input, name) => {
    const accessor = input.accessor;
    let filteredData;
    if (accessor === "all") {
      filteredData = orignalRepoData;
    } else {
      filteredData = orignalRepoData.filter((ele) => {
        if (name && name !== null) {
          return ele[name] === accessor;
        } else if (input.name === "Sources") {
          return !ele[input.filterBy];
        } else {
          return ele[accessor];
        }
      });
    }
    setReposList(filteredData);
  };

  useEffect(() => {
    filterRepoData(search);
  }, [search, filterRepoData]);

  useEffect(() => {
    fetchProfileDetails();
    fetchAllRepos();
  }, []);

  useEffect(() => {
    const checkIfInPage = (el) => {
      const pic = document.querySelector(".pic-container");
      var elDistanceToTop = pic.offsetHeight + pic.getBoundingClientRect().top;
      if (elDistanceToTop <= 0) {
        setShowMiniProfile(true);
      } else {
        setShowMiniProfile(false);
      }
    };
    document.addEventListener("scroll", checkIfInPage);

    return () => {
      document.removeEventListener("scroll", checkIfInPage);
    };
  }, []);

  return (
    <div className="profile-page-container">
      {!mobileCheck() && (
        <Navbar showMiniProfile={showMiniProfile} {...profileDetails} />
      )}
      <div className="default-page-width d-flex flex-column-mobile">
        <ProfileDetails {...profileDetails} />
        {mobileCheck() && (
          <Navbar showMiniProfile={showMiniProfile} {...profileDetails} />
        )}
        <div className="repositories-section pad-section-default">
          <div className="filter-section pad-top-section pad-bottom-section d-flex border-bottom-primary flex-column-mobile">
            <CustomInput
              type="text"
              value={search}
              placeholder="Find a repository"
              className="margin-right-divider"
              onChangeEventHandler={setSearch}
            />
            <div className="d-flex filter-dropdown">
              <Dropdown
                placeholder="Type: "
                dropdownHead="Select type"
                defaultValue={{ name: "All", accessor: "all" }}
                list={[
                  { name: "All", accessor: "all" },
                  { name: "Sources", accessor: "sources", filterBy: "fork" },
                  { name: "Forks", accessor: "fork" },
                  { name: "Archived", accessor: "archived" },
                  { name: "Mirrors", accessor: "mirrors" },
                ]}
                onClickEventHandler={filterDropDownData}
              />
              <Dropdown
                name="language"
                placeholder="Language: "
                defaultValue={{ name: "All", accessor: "all" }}
                dropdownHead="Select language"
                list={[
                  { name: "All", accessor: "all" },
                  { name: "HTML", accessor: "HTML" },
                  { name: "JavaScript", accessor: "JavaScript" },
                  { name: "CSS", accessor: "CSS" },
                ]}
                onClickEventHandler={filterDropDownData}
              />
            </div>
          </div>
          <ul className="repositories-list">
            {orignalRepoData.length - searchResultCount !== 0 && (
              <li className="repository border-bottom-primary search-message">
                <strong>{searchResultCount}</strong> result for repositories
                matching <strong>action</strong>
              </li>
            )}
            {Array.isArray(reposList) &&
              reposList.length > 0 &&
              reposList.map((ele) => <Repository key={ele.id} {...ele} />)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
