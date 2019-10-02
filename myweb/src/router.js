import React, { Component } from "react";

import {
  Link,
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import pageConfig from "./pageConfig";
// import Home from "./pages/Home";
import loadable from "./utils/loadable";

import "./styles/common.less";

// const url = "pages/Home";
const Home = loadable(() => import("./pages/Home"));
const About = loadable(() => import("./pages/About"));
const Directors = loadable(() => import("./pages/Directors"));
const Offices = loadable(() => import("./pages/Offices"));
const PushFest = loadable(() => import("./pages/PushFest"));
const Menu = loadable(() => import("./components/Menu"));
const Work = loadable(() => import("./pages/Work"));
const Project = loadable(() => import("./pages/Project"));
// const pages = "./pages"
//   .match(/\/\w+/g)
//   .map((v, i, arr) => arr.slice(0, i + 1).join(""));
// console.log(pages, "pages");

const PrimaryLayout = ({ match, history, location }) => {
  let { pathname } = location;
  return (
    <div className="push-content">
      <Menu history={history} pathname={pathname} />
      <Route path={`${match.path}/About`} component={About} />
      <Route path={`${match.path}/Directors`} component={Directors} />
      <Route path={`${match.path}/PushFest`} component={PushFest} />
      <Route path={`${match.path}/Offices`} component={Offices} />

      <Route path={`${match.path}/Work`} component={Work} />
      <Route path={`${match.path}/Project/:id`} component={Project} />
    </div>
  );
};

export default class AppRouter extends Component {
  render() {
    return (
      <Router>
        <Route>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Detail" component={PrimaryLayout} />
            <Route path="*" component={Home} />
          </Switch>
        </Route>

        {/* <Route path="*" component={Menu} /> */}
        {/* </Switch> */}
      </Router>
    );
  }
}
