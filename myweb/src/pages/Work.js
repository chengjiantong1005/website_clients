import React, { Component, Fragment } from "react";
import axios from "axios";

import { ImageList, IconList, LoadMore, ImageListPanel } from "../components";
import Context from "../components/Context";
// const InfiniteScroll = reactScroll(React);
export default class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [],
      category: "",
      index: 1,
      size: 9,
      hasMore: false, //是否存在下一页
      isLoadingMore: false //是否正在加载
    };
  }
  interval = null;
  async componentDidMount() {
    // this.searchList();
  }
  setCategory = category => () => {
    this.setState({ category, reload: true });
  };

  searchList = async (reload = false) => {
    let { category, index, size, imgList } = this.state;
    await this.setState({
      isLoadingMore: true
    });
    await axios
      .get("/webajax/project/list", { params: { category, index, size } })
      .then(response => {
        let { data } = response;
        if (data.result) {
          let newImgList = data.data.map(item => {
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
            imgList: reload === true ? newImgList : imgList.concat(newImgList),
            isLoadingMore: false,
            isLoadEnd: !(newImgList.length === size),
            index: index + 1
          });
        }
      })
      .catch(function(error) {
        // 处理请求出错的情况
      });
  };

  render() {
    let { category, reload } = this.state;
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
              JANUARY - 2019
            </div>
          </div>
          <Context.Consumer>
            {context => {
              let { filterList } = context;
              return (
                <div className="filter-option">
                  <div className="mask" />
                  <div className="label">FILTER</div>
                  {filterList.map((item, index) => {
                    let { name, _id } = item;
                    return (
                      <div
                        style={{ cursor: "pointer" }}
                        onClick={this.setCategory(_id)}
                        key={index}
                      >
                        {name}
                      </div>
                    );
                  })}
                  {/* <div>Production</div>
                <div>CONSULTING</div>
                <div>Offices</div>
                <div>EDITING</div> */}
                  <div className="arrow" />
                </div>
              );
            }}
          </Context.Consumer>
        </div>
        <div style={{ height: "40px" }} />
        <ImageListPanel category={category} reload={reload} />
        {/* {imgList.length > 0 ? (
          <>
            <ImageList imgList={imgList} />
            <LoadMore
              isLoadEnd={this.state.isLoadEnd}
              isLoadingMore={this.state.isLoadingMore}
              loadMoreFn={this.searchList.bind(this)}
            ></LoadMore>
          </>
        ) : (
          undefined
        )} */}
      </div>
    ];
  }
}
