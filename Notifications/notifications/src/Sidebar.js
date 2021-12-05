import React from "react";
import "./Sidebar.css";
import Follower from "./Follower";
import Chat from "./Chat";
import Error from "./Error";
import Webinar from "./Webinar";

function Sidebar() {
  return (
    <div class="sidebar">
      <Follower />
      <Error />
      <Webinar />
      <Chat />
      <Webinar />
      <Webinar />
      <Webinar />
      <Chat />
      <Error />
      <Chat />
      <Chat />
      <Webinar />
      <Error />
    </div>
  );
}

export default Sidebar;
