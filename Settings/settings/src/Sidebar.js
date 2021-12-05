import React from "react";
import "./Sidebar.css";
import Privacy from "./Privacy";
import Password from "./Password";
import Delete from "./Delete";
import Friend from "./Friend";
import History from "./History";
import Info from "./Info";

function Sidebar() {
  return (
    <div class="sidebar">
      <Privacy />
      <Password />
      <Delete />
      <Friend />
      <History />
      <Info />
    </div>
  );
}

export default Sidebar;
