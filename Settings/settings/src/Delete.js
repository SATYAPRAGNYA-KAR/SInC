import React from "react";
import "./Delete.css";
import NoAccountsOutlinedIcon from "@mui/icons-material/NoAccountsOutlined";

function Delete() {
  return (
    <div class="delete">
      <NoAccountsOutlinedIcon />
      <div class="delete__content">
        <h2>Delete Account</h2>
        <h3>Delete your Info</h3>
      </div>
    </div>
  );
}

export default Delete;
