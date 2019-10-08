import React, { Component, Fragment } from "react";

import { ImageList, IconList } from "../components";
export default class Offices extends Component {
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
            <div className="text-panel-title">Shanghai, China</div>
            <div className="text-panel-line">Ze headquarters</div>
            <div className="text-panel-desc">
              Opened since XX lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo
              viverra maecenas accumsan lacus vel facilisis.
            </div>

            <div className="web-chart-img" />
            <div className="contact-us">
              <span className="contact-label">Office rep: </span>Miranda
              Tsetzhklade
              <br />
              <span className="contact-label">T.</span>
              {/* +86 13818930440  */}
              <br />
              <span className="contact-label">contact us:</span>{" "}
              kristian@pushmedia.co
            </div>
            <div className="office-address-text">
              <div className="label">ADDRESS</div>
              <div className="en-address">
                Wulumuqi Middle Road Lane 27 Building 5
              </div>
              {/* 中山西路800弄,紫云57号，18B */}
            </div>
          </div>
        </div>
        <div style={{ height: "60px" }} />
        <h4>OUR LATEST PROJECTS</h4>
        <ImageList
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
        />
      </div>
    ];
  }
}
