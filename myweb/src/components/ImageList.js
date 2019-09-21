import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class ImageList extends Component {
  constructor(props) {
    super(props);
  }

  interval = null;
  componentDidMount() {}

  render() {
    let {
      imgList = [
        { url: "../images/aboutpic_2.png", date: "brand 08_2019" },
        { url: "../images/aboutpic_2.png", date: "brand 08_2019" },
        { url: "../images/aboutpic_2.png", date: "brand 08_2019" }
      ]
    } = this.props;
    return (
      <div className="img-list">
        {imgList.map((item, index) => {
          let { url, date } = item;
          return (
            <div key={index} className={`img-panel imgpanel${index}`}>
              <div className="tips" />
              <img src={require(`../images/aboutpic_2.png`)} />
              <div className="date">{date}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
