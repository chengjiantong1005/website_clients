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
        { url: "../images/project1.png", date: "brand 08_2019" },
        { url: "../images/project2.png", date: "brand 08_2019" },
        { url: "../images/project3.png", date: "brand 08_2019" },
        { url: "../images/project4.png", date: "brand 08_2019" }
      ]
    } = this.props;
    return (
      <div className="small-img-list img-list">
        {imgList.map((item, index) => {
          let { url, date } = item;
          return (
            <div key={index} className={`img-panel imgpanel${index}`}>
              <img src={require(`../images/aboutpic_2.png`)} />
            </div>
          );
        })}
      </div>
    );
  }
}
