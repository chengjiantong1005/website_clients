import React, { Component, Fragment } from "react";
import axios from "axios";
import { ImageList, SmallImageList } from "../components";
import { getNumber, formatDateString } from "../utils";

export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUrl: ""
    };
  }
  interval = null;
  async componentDidMount() {
    // debugger;
    document.addEventListener("click", () => {
      this.setState({ currentUrl: "" });
    });
    this.getAjax();
  }

  getAjax = async jumpId => {
    let { id } = this.props.match.params;
    await axios
      .get(`webajax/project/${jumpId || id}`)
      .then(response => {
        let { data } = response;
        // debugger;
        if (data.result) {
          let { detail = {}, morelikethis = [] } = data.data;
          let { frames = [] } = detail;
          let imgList = morelikethis.map(item => {
            let { name, brand, cover = [], _id, frames = [] } = item;
            return {
              src: `/${(cover[0] || {}).path}`,
              frames: cover.concat(frames),
              date: brand,
              title: name,
              id: _id
            };
          });

          this.setState({
            imgList,
            detail,
            frames: frames.map(item => {
              let { path, brand } = item;

              return {
                src: `/${path}`,
                date: brand
              };
            })
          });
        }
      })
      .catch(function(error) {
        // 处理请求出错的情况
      });
  };

  onChange = id => {
    this.getAjax(id);
  };
  onSmallImageChange = index => {
    let { frames = [] } = this.state;
    this.setState({ currentUrl: `${frames[index].src}` });
  };
  render() {
    let { detail = {}, imgList = [], frames = [], currentUrl } = this.state;
    let {
      name,
      DP,
      office = "",
      video = [],
      director,
      client,
      description,
      producer,
      brief,
      brand,
      budget,
      views,
      impression,
      location,
      accountManager,
      productionCompany
    } = detail;
    // debugger;
    return [
      <div className="project about">
        <div className="info-panel">
          <div className="info-img-panel">
            {video.length > 0 && !currentUrl ? (
              <video
                disablePictureInPicture
                controls
                name={"media"}
                controlsList="nodownload disablepictureinpicture"
              >
                <source src={`/${(video[0] || {}).path}`} type="video/mp4" />
              </video>
            ) : (
              undefined
            )}
            {currentUrl ? (
              <img key={currentUrl} className=" img-opacity" src={currentUrl} />
            ) : (
              ""
            )}
            <div className="img-mask" />
          </div>
          <div className="text-panel">
            <div
              className="close-icon"
              onClick={() => this.props.history.push("/Detail/Work")}
            />
            <div className="text-panel-title" title={name}>
              {name}
            </div>
            <div className="text-panel-tips">{formatDateString(brand)}</div>
            <div className="text-panel-line">BRIEF</div>
            <div className="text-panel-desc">{brief}</div>
            <div className="text-panel-line">DESCRIPTION</div>
            <div className="text-panel-desc">{description}</div>
            <div className="project-results">
              <div style={{ float: "left", marginRight: "30px" }}>RESULTS:</div>
              <div style={{ float: "left" }}>
                - {getNumber(views)} Views <br />- {getNumber(budget)} Budget{" "}
                <br />- {getNumber(impression)}
                Impressions
              </div>
              <div className="office">{office}</div>
            </div>
            <div className="position-list">
              {[
                {
                  label: "DIRECTOR:",
                  value: director
                },
                {},
                {
                  label: "DP:",
                  value: DP
                },
                {
                  label: "CLIENT:",
                  value: client
                },
                {
                  label: "PRODUCER:",
                  value: producer
                },
                {
                  label: "PRODUCTION　COMPANY:",
                  value: productionCompany
                },
                {
                  label: "ACCOUNT MANAGER:",
                  value: accountManager
                },
                {
                  label: "LOCATIONS:",
                  value: location
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
        <h4>STILL FRAMES</h4>
        <SmallImageList onChange={this.onSmallImageChange} imgList={frames} />
        <h4>MORE LIKE THIS</h4>
        {imgList.length > 0 ? (
          <ImageList onChange={this.onChange} imgList={imgList} />
        ) : (
          undefined
        )}
      </div>
    ];
  }
}
