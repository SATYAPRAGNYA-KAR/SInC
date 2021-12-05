import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Message from "./Message";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Footer from "./Footer";

function App() {
  return (
    <div class="app">
      <div class="app__header">
        <Header />
      </div>
      <div class="app__body">
        <div class="aligned">
          <NotificationsNoneIcon />
          <h2>Notifications</h2>
        </div>
        <div class="content">
          <Sidebar />
          <Message />
        </div>
      </div>
      <div class="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
//Module not found: Can't resolve '@emotion/react' in 'D:\VS CODE\SInC\Notifications\notifications\node_modules\@mui\styled-engine'- To resolve this npm install @emotion/react and npm install @emotion/styled installed first
