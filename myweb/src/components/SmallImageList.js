import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class SmallImageList extends Component {
  constructor(props) {
    super(props);
  }

  interval = null;
  componentDidMount() {}

  onClick = index => e => {
    this.props.onChange(index);
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    return false;
  };
  render() {
    let {
      imgList = [
        // { url: "../images/project1.png", date: "brand 08_2019" },
        // { url: "../images/project2.png", date: "brand 08_2019" },
        // { url: "../images/project3.png", date: "brand 08_2019" },
        // { url: "../images/project4.png", date: "brand 08_2019" }
      ]
    } = this.props;
    return (
      <div className="small-img-list img-list">
        {imgList.map((item, index) => {
          let { src, brand } = item;
          return (
            <div key={index} className={`img-panel show imgpanel${index}`}>
              <img onClick={this.onClick(index)} src={src} />
            </div>
          );
        })}
      </div>
    );
  }
}
