import React, { Component, Fragment } from "react";

import { Menu, ImageList, DirecotorList } from "../components";
export default class Directors extends Component {
  constructor(props) {
    super(props);
  }
  interval = null;
  componentDidMount() {}

  render() {
    return [
      //   <Menu key="menu" checked={2} />,
      <DirecotorList key="DirecotorList" />
    ];
  }
}
