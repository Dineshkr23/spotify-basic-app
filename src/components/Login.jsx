import React from "react";
import "../assets/style/login.css";
import logo from "../assets/pictures/logo.png";
import axios from "axios";

export const Login = () => {
  const handleClick = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:5000/login");
    let value = await response.json();
    window.open(value.data, "_self");
  };
  return (
    <div className="loginBackground">
      <div className="loginContent">
        <h1>Welcome To Your Personal Spotify App</h1>
        <h2 className="loginText">
          Login To &nbsp;{" "}
          <button onClick={handleClick}>
            {" "}
            <img className="loginLogo" src={logo} alt="logo" />
          </button>
        </h2>
      </div>
    </div>
  );
};
