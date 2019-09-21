import React, { Component, Fragment } from "react";
import "../styles/About.less";

import { ImageList, IconList } from "../components";
export default class Work extends Component {
  constructor(props) {
    super(props);
  }
  interval = null;
  componentDidMount() {}

  render() {
    return [
      <div className="work">
        <div className="info-panel">
          <div className="info-img-panel">
            <img src={require("../images/work-pic01.png")} />
            <div className="img-mask" />
          </div>
          <div className="text-panel">
            <div className="text-panel-title">showreel</div>

            <div className="text-panel-desc">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="text-panel-desc">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>

            <div className="address-text">january - 2019</div>
          </div>

          <div className="filter-option">
            <div className="mask" />
            <div className="label">FILTER</div>
            <div>Production</div>
            <div>CONSULTING</div>
            <div>Offices</div>
            <div>EDITING</div>
            <div className="arrow" />
          </div>
        </div>
        <div style={{ height: "50px" }} />
        <ImageList />
      </div>
    ];
  }
}
