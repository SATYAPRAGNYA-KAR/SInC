import React from "react";
import "./Body.css";
import Sidebar from "./Sidebar";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

function Body() {
  return (
    <div class="body">
      <div class="body__head">
        <SettingsOutlinedIcon />
        <h2>Settings</h2>
      </div>
      <div class="body__content">
        <Sidebar />
        <div class="mainbox"></div>
      </div>
    </div>
  );
}

export default Body;
