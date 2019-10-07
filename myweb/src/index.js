import React from "react";
import ReactDOM from "react-dom";
import Context from "./components/Context";
import axios from "axios";
// import "./styles/fontStyle/iconfont.js";
import App from "./App";
// import * as serviceWorker from "./serviceWorker";
import Router from "./router";
axios
  .get("/webajax/project/category/list")
  .then(response => {
    let { data } = response;
    let filterList = [];
    if (data.result) {
      filterList = data.data;
    }
    ReactDOM.render(
      <Context.Provider value={{ filterList }}>
        <Router />
      </Context.Provider>,
      document.getElementById("root")
    );
  })
  .catch(function(error) {
    // 处理请求出错的情况
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
