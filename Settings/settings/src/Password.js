import React from "react";
import "./Password.css";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";

function Password() {
  return (
    <div class="password">
      <VpnKeyOutlinedIcon />
      <div class="password__content">
        <h2>Password Settings</h2>
        <h3>Configure Password, PIN, etc.</h3>
      </div>
    </div>
  );
}

export default Password;
