import React from "react";
import "./App.css";
import Profile from "./Profile";
import Follower from "./Follower";
import Messages from "./Messages";
import Notifications from "./Notifications";
import Settings from "./Settings";
import Info from "./Info";
import Contact from "./Contact";
import Logout from "./Logout";

function App() {
  return (
    <div className="app">
      <div className="side">
        <Profile />
        <Follower />
        <Messages />
        <Notifications />
        <Settings />
        <Info />
        <Contact />
        <Logout />
      </div>
    </div>
  );
}

export default App;
//  display: flex;
//  align-items: center;
//  justify-content: center;
//used to center an item completely inside its div
