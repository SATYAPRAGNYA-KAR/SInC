import React from "react";
import "./History.css";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

function History() {
  return (
    <div class="history">
      <HistoryOutlinedIcon />
      <div class="history__content">
        <h2>Search History</h2>
        <h3>Remember your Previous Actions</h3>
      </div>
    </div>
  );
}

export default History;
