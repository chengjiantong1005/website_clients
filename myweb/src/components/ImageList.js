import React, { Component, Fragment } from "react";
import { HashRouter } from "react-router-dom";
import { formatDateString } from "../utils";
import { Link } from "react-router-dom";
import { ImageChangeList } from "../components";
const router = new HashRouter();

export default class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: -1,
      imgList: props.imgList || [
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
    // this.startLoadImage();
  }
  jump = id => () => {
    router.history.push(`/Detail/Project/${id}`);
    this.props.onChange && this.props.onChange();
    return;
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

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      imgList: nextProps.imgList
    };
  }
  componentDidUpdate = () => {
    // this.startLoadImage();
  };
  toggleHover = index => () => {
    this.setState({ hover: index });
  };
  render() {
    let { imgList = [], hover } = this.state;
    return (
      <div className="img-list">
        {imgList.map((item, index) => {
          let { src, id, date, show = true, title, frames = [] } = item;
          return (
            <div
              key={`${id}${index}`}
              onMouseOver={this.toggleHover(index)}
              onMouseLeave={this.toggleHover(-1)}
              className={`img-panel ${show ? "show" : ""} imgpanel${index}`}
              onClick={this.jump(id)}
            >
              <div className="tips">{title}</div>
              <img src={`${show ? src : ""}`} />
              {hover === index ? (
                <ImageChangeList key={hover} frames={frames} />
              ) : (
                undefined
              )}
              <div className="date">{formatDateString(date)}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
