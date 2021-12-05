import React from "react";
import "./Privacy.css";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";

function Privacy() {
  return (
    <div class="privacy">
      <PrivacyTipOutlinedIcon />
      <div class="privacy__content">
        <h2>Privacy</h2>
        <h3>Change your confidentiality</h3>
      </div>
    </div>
  );
}

export default Privacy;
