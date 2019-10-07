import React, { Component, Fragment } from "react";
import axios from "axios";
import { ImageList, SmallImageList } from "../components";
export default class Work extends Component {
  constructor(props) {
    super(props);
  }
  interval = null;
  async componentDidMount() {
    // debugger;
    let { id } = this.props.match.params;
    await axios
      .get(`webajax/project/${id}`)
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
    return [
      <div className="project about">
        <div className="info-panel">
          <div className="info-img-panel">
            <img src={require("../images/aboutpic_1.png")} />
            <div className="img-mask" />
          </div>
          <div className="text-panel">
            <div className="close-icon" />
            <div className="text-panel-title">
              Shanghai<div className="text-panel-tips">since 2006</div>
            </div>
            <div className="text-panel-line">Ze headquarters</div>
            <div className="text-panel-desc">
              Opened since XX lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </div>
            <div className="text-panel-line">Ze headquarters</div>
            <div className="text-panel-desc">
              Opened since XX lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </div>
            <div className="project-results">
              <div style={{ float: "left", marginRight: "30px" }}>results:</div>
              <div style={{ float: "left" }}>
                - 90M Views <br />- 70k Budget <br />- 900M Impressions
              </div>
            </div>
            <div className="position-list">
              {[
                {
                  label: "Director:",
                  value: "Jonathon Lim"
                },
                {},
                {
                  label: "Director:",
                  value: "Jonathon Lim"
                },
                {
                  label: "Director:",
                  value: "Jonathon Lim"
                },
                {
                  label: "Director:",
                  value: "Jonathon Lim"
                },
                {
                  label: "Director:",
                  value: "Jonathon Lim"
                },
                {
                  label: "Director:",
                  value: "Jonathon Lim"
                },
                {
                  label: "Director:",
                  value: "Jonathon Lim"
                }
              ].map(item => {
                let { label, value } = item;
                return (
                  <Fragment>
                    <div className="item">
                      <span className="label">{label}</span>
                      {value}
                    </div>
                  </Fragment>
                );
              })}
            </div>
            {/* <div className="office-address-text">
              <div className="label">ADDRESS</div>
              SHANGHAI 23000, 77 Wulumuqi road, Room18B 中山西路800弄, 紫云57号，18B
            </div> */}
          </div>
        </div>
        <h4>Still frames</h4>
        <SmallImageList />
        <h4>more like this</h4>
        <ImageList />
      </div>
    ];
  }
}
