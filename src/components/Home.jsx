import React from "react";
import "../assets/style/home.css";
import { Footer } from "./Footer";
import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";

export const Home = () => {
  return (
    <div className="homeBackground">
      <div className="homeLR_Div">
        <LeftPane />
        <RightPane />
      </div>
      <Footer />
    </div>
  );
};
