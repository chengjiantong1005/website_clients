import React, { Component, Fragment } from "react";
import axios from "axios";

import { ImageList, IconList } from "../components";

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: []
    };
  }
  interval = null;
  async componentDidMount() {
    await axios
      .get("/webajax/project/list")
      .then(response => {
        let { data } = response;
        if (data.result) {
          let imgList = data.data.map(item => {
            let { name, brand, attachments = [], _id } = item;
            return {
              src: `/${(attachments[0] || {}).path}`,
              date: brand,
              title: name,
              id: _id
            };
          });
          this.setState({ imgList });
        }
      })
      .catch(function(error) {
        // 处理请求出错的情况
      });
  }

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
        {imgList.length > 0 ? <ImageList imgList={imgList} /> : undefined}
      </div>
    ];
  }
}
