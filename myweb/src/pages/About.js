import React, { Component, Fragment } from "react";

import { ImageList, IconList, ImageListPanel } from "../components";
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
              PUSH IS A SHANGHAI BASED PRODUCTION COMPANY WITH OFFICES IN LOS
              ANGELES AND OSLO
            </div>
            <div className="text-panel-desc">
              WE ARE PROBABLY THE MOST RESPONSIBLE AND HARD WORKING BUNCH OF
              SKATERS AND NINJAS YOU’VE EVER MET.
            </div>
            <div className="text-panel-line">
              WE WRITE. WE DIRECT. WE SHOOT. WE CREATE. WE ONLY DO WORK THAT WE
              LOVE.
            </div>

            <IconList />
            <div className="contact-us">
              Contact us:generalinquiries@pushmedia.co
            </div>
            <div className="office-address">
              SH&nbsp;&nbsp;LA&nbsp;&nbsp;OL&nbsp;&nbsp;TK
            </div>
          </div>
        </div>
        <div style={{ height: "100px" }} />
        <h4>OUR LATEST PROJECTS</h4>
        <ImageListPanel />
        {/* <ImageList
          imgList={[
            {
              title: "TITLE",
              src: `http://119.3.238.112/aboutpic_2.png`,
              date: "2019-10-10"
            },
            {
              title: "TITLE",
              src: `http://119.3.238.112/aboutpic_2.png`,
              date: "2019-10-10"
            },
            {
              title: "TITLE",
              src: `http://119.3.238.112/aboutpic_2.png`,
              date: "2019-10-10"
            },
            {
              title: "TITLE",
              src: `http://119.3.238.112/aboutpic_2.png`,
              date: "2019-10-10"
            },
            {
              title: "TITLE",
              src: `http://119.3.238.112/aboutpic_2.png`,
              date: "2019-10-10"
            },
            {
              title: "TITLE",
              src: `http://119.3.238.112/aboutpic_2.png`,
              date: "2019-10-10"
            }
          ]}
        /> */}
      </div>
    ];
  }
}
