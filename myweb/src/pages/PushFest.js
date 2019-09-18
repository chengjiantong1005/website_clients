import React, { Component, Fragment } from "react";
import "../App.less";
import Word from "../components/Word";
import Home from "./Home";
export default class PushFest extends Component {
  constructor(props) {
    super(props);
  }
  interval = null;
  componentDidMount() {}

  render() {
    return [<div className="push-fest" />, <Home className="push-home" />];
  }
}
