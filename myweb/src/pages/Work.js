import React, { Component, Fragment } from "react";

import { ImageList, IconList } from "../components";

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [
        {
          url: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          url: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          url: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          url: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          url: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          url: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          url: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          url: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          url: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          url: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          url: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          url: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        }
      ]
    };
  }
  interval = null;
  componentDidMount() {}

  render() {
    let { imgList } = this.state;
    return [
      <div className="work">
        <div className="info-panel">
          <div className="info-img-panel">
            <img src={require("../images/work-pic01.png")} />
            <div className="img-mask" />
          </div>
          <div className="text-panel">
            <div className="text-panel-title">SHOWREEL</div>

            <div className="text-panel-desc">
              We love every project we do. Here a summary of our favourite
              imagery captured over the past year.
            </div>
            {/* <div className="text-panel-desc">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div> */}

            <div
              className="address-text"
              style={{ position: "absolute", bottom: "0px" }}
            >
              january - 2019
            </div>
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
        <div style={{ height: "40px" }} />
        <ImageList imgList={imgList} />
      </div>
    ];
  }
}
