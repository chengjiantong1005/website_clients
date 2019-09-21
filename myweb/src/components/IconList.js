import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class IconList extends Component {
  constructor(props) {
    super(props);
  }

  interval = null;
  componentDidMount() {}

  render() {
    return (
      <div className="icon-panel">
        <div className="icon-list">
          <div className="icon icon-1" />
          <div className="icon icon-2" />
          <div className="icon icon-3" />
        </div>
      </div>
    );
  }
}
