import React from "react";
import "./App.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <div class="app__header">
        <Header />
      </div>
      <div class="app__body">
        <Body />
      </div>
      <div class="app__footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
//npm install @material-ui/icons or npm install @mui/icons-material used to solve error showing up in the terminal
