import React, { Component, Fragment } from "react";

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
