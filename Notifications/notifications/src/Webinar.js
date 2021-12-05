import React from "react";
import "./Webinar.css";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function Webinar() {
  return (
    <div class="webinar">
      <CheckCircleOutlineIcon />
      <div class="webinar__total">
        <div class="webinar__info">
          <h2>Webinar</h2>
          <p>Webinar on Innovation by Mr. Chaudhary on 20.05.20</p>
        </div>
        <div class="webinar__detail">
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

export default Webinar;
