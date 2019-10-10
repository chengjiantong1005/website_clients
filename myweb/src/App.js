import React from "react";
// import logo from "../images/logo.png";

import "./App.less";
import Word from "./components/Word";

function App() {
  return [
    <div className="content">
      <div className="logo-panel">
        <img
          src={require("./images/logo.png")}
          className="App-logo2"
          alt="logo"
        />
        <div className="mask" />
      </div>

      <div className="nav-panel">
        <div className="nav-list">
          {["push fest", "Directors", "work", "about"].map(value => {
            return (
              <div className="nav">
                {value.split("").map(word => {
                  if (word === " ") {
                    return " ";
                  } else {
                    return <Word>{word.toLocaleUpperCase()}</Word>;
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="icon-panel">
        <div className="icon-list">
          <div className="icon icon-1" />
          <div className="icon icon-2" />
          <div className="icon icon-3" />
        </div>
      </div>
    </div>,
    <div className="copy-right">ALL RIGHTS RESERVED - 2019</div>
  ];
}

export default App;
