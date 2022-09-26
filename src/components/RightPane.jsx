import React from "react";
import "../assets/style/rightPane.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect } from "react";
import axios from "axios";

export const RightPane = () => {
  const token = localStorage.getItem("access_token")
  console.log(token);
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ access_token: token }),
  };

  useEffect(() => {
    axios
      .post("http://localhost:5000/getMe", {
        access_token:token,
        // config,
        
      },
      // {
      //   "Content-type" : "application/json",
      //   "Access-Control-Allow-Origin" : "*"
      // }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    })
    const logoutHandler = ()=>{
      window.open(window.location.href='/',"_self");
    }
  return (
    <div className="rightMain">
      <div className="header">
        <div className="searchDiv">
          <SearchOutlinedIcon className="searchIcon"/>
          <input
            type="text"
            name=""
            placeholder=" What do you want to listen to?"
          />
        </div>
        <div className="profileDiv">
          <Accordion className="profileCollapse">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="expIcon"/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="typo">User Name</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <button onClick={logoutHandler} className="logoutBtn">Logout</button>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="rightContent">
        <h2>Browse All</h2>
      </div>
    </div>
  );
};
