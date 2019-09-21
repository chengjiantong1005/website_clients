import React, { Component, Fragment } from "react";

import { ImageList, IconList } from "../components";
export default class About extends Component {
  constructor(props) {
    super(props);
  }
  interval = null;
  componentDidMount() {}

  render() {
    return [
      <div className="about">
        <div className="info-panel">
          <div className="info-img-panel">
            <img src={require("../images/aboutpic_1.png")} />
            <div className="img-mask" />
          </div>
          <div className="text-panel">
            <div className="text-panel-title">ABOUT US</div>
            <div className="text-panel-line">
              PUSH IS A Worldwide BASED PRODUCTION COMPANY. We specialised i
            </div>
            <div className="text-panel-desc">
              PUSH IS A Worldwide BASED PRODUCTION COMPANY. We specialised i
              PUSH IS A Worldwide BASED PRODUCTION COMPANY. We specialised i
              PUSH IS A Worldwide BASED PRODUCTION COMPANY. We specialised i
              PUSH IS A Worldwide BASED PRODUCTION COMPANY. We specialised i
              PUSH IS A Worldwide BASED PRODUCTION COMPANY. We specialised i
            </div>

            <IconList />
            <div className="contact-us">
              Contact us:generalinquiries@pushmedia.co
            </div>
            <div className="office-address" />
          </div>
        </div>
        <div style={{ height: "100px" }} />
        <h4>OUR LATEST PROJECTS</h4>
        <ImageList />
      </div>
    ];
  }
}
