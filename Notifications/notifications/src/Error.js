import React from "react";
import "./Error.css";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Error() {
  return (
    <div class="error">
      <WarningAmberIcon />
      <div class="error__total">
        <div class="error__info">
          <h2>Error</h2>
          <p>E-mail id not confirmed</p>
        </div>
        <div class="error__detail">
          <DeleteOutlineIcon />
          <p>
            14 May
            <br />
            19:35
          </p>
        </div>
      </div>
    </div>
  );
}

export default Error;
