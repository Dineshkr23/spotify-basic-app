import React from "react";
import "../assets/style/leftPane.css";
import logo from "../assets/pictures/whiteLogo.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ArrowCircleDownOutlinedIcon from "@mui/icons-material/ArrowCircleDownOutlined";

export const LeftPane = () => {
  return (
    <div className="leftMain">
      <div className="logoDiv">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="leftDivs">
        <HomeOutlinedIcon className="leftIcons" />
        <p className="leftTexts">Home</p>
      </div>
      <div className="leftDivs">
        <SearchOutlinedIcon className="leftIcons" />
        <p className="leftTexts">Search</p>
      </div>
      <div className="leftDivs">
        <LibraryBooksOutlinedIcon className="leftIcons" />
        <p className="leftTexts">Your Library</p>
      </div>
      <div className="leftDivs playlist">
        <AddBoxIcon className="leftIcons" />
        <p className="leftTexts">Create Playlist</p>
      </div>
      <div className="leftDivs liked">
        <FavoriteIcon className="leftIcons" />
        <p className="leftTexts">Liked Songs</p>
      </div>
      <div className="leftDivs install">
        <ArrowCircleDownOutlinedIcon className="leftIcons" />
        <p className="leftTexts">Install App</p>
      </div>
    </div>
  );
};
