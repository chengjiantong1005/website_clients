import React, { Component, Fragment } from "react";
import { HashRouter } from "react-router-dom";

import { Link } from "react-router-dom";
const router = new HashRouter();

export default class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: [
        {
          src: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019",
          id: "123"
        },
        {
          src: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          src: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          src: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          src: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          src: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          src: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          src: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          src: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          src: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          src: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        },
        {
          src: `http://119.3.238.112/aboutpic_2.png?${Math.random()}`,
          date: "brand 08_2019"
        }
      ]
      //props.imgList || []
    };
  }

  interval = null;
  componentDidMount() {
    this.startLoadImage();
  }
  jump = id => () => {
    if (id) {
      router.history.push(`/Detail/Project/${id}`);
    }
  };

  startLoadImage = () => {
    let { imgList = [] } = this.state;
    let arrList = new Array(imgList.length)
      .fill(1)
      .map((value, index) => {
        return index;
      })
      .sort(() => {
        return Math.random() - 0.5;
      });

    this.loadImage(0, arrList);
  };

  loadImage = (num, arrList) => {
    if (num >= arrList.length) {
      return;
    }
    let currentIndex = arrList[num];
    let { imgList = [] } = this.state;
    let img = document.createElement("img");
    img.src = imgList[currentIndex].src;
    img.onload = () => {
      imgList[currentIndex].show = true;
      this.setState({ imgList });
      // this.loadImage(++num, arrList);
    };
    this.loadImage(++num, arrList);
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return {
  //     imgList: nextProps.imgList
  //   };
  // }

  render() {
    let { imgList = [] } = this.state;
    return (
      <div className="img-list">
        {imgList.map((item, index) => {
          let { src, id, date, show } = item;
          return (
            <div
              key={index}
              className={`img-panel ${show ? "show" : ""} imgpanel${index}`}
              onClick={this.jump(id)}
            >
              <div className="tips">TITLE</div>
              <img src={`${show ? src : ""}`} />
              <div className="date">{date}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
