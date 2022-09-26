import React, { useEffect } from "react";
import "../assets/style/callback.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

export const Callback = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code: code }),
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/verifyToken", {
        code,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("access_token", res.data.data.body.access_token);
        localStorage.setItem("refresh_token", res.data.data.body.refresh_token);
        window.open(window.location.href='/home', '_self');
      })
      .catch((err) => {
        alert("Cannot authenticate");
        window.open(window.location.origin, "_self");
        console.log(err);
      });
  });

  return (
    <div className="callbackBackground">
      <h1>Please wait while we authenticate your details</h1>
      <Box sx={{ display: "flex" }}>
        <CircularProgress style={{ color: "rgb(122,216,99)" }} />
      </Box>
    </div>
  );
};
