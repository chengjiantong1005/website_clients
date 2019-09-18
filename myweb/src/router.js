import React, { Component } from "react";

import { Link, HashRouter as Router, Route, Switch } from "react-router-dom";
import pageConfig from "./pageConfig";
// import Home from "./pages/Home";
import loadable from "./utils/loadable";
// const url = "pages/Home";
const Home = loadable(() => import("./pages/Home"));
const About = loadable(() => import("./pages/About"));
const PushFest = loadable(() => import("./pages/PushFest"));
const getComponent = (url, path) => async (location, cb) => {
  // console.log(url, "1232-----------");
  // return await import("./" + url);
  debugger;
  return loadable(async () => await import("./" + url).default);
};
// const pages = "./pages"
//   .match(/\/\w+/g)
//   .map((v, i, arr) => arr.slice(0, i + 1).join(""));
// console.log(pages, "pages");
export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/PushFest" component={PushFest} />
        </Switch>
      </Router>
    );
  }
}
