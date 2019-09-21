import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  interval = null;
  componentDidMount() {}

  render() {
    let {
      imgList = [
        {
          url: "Directors2.png",
          tips: "charles lanceplaine",
          title: "manage",
          desc: {
            title: "description and motto about work ethic.",
            text: (
              <Fragment>
                We specialised in cultural consulting from our 4 locations
                around the world. <br />We specialised in cultural consulting
                from our 4 locations around the world.
              </Fragment>
            ),
            project: "project #1    project #2    project #3    project #4 "
          }
        },
        {
          url: "Directors1.png",
          tips: "Kristian Kvam Hansen",
          title: "manage",
          desc: {
            title: "description and motto about work ethic.",
            text: (
              <Fragment>
                We specialised in cultural consulting from our 4 locations
                around the world. <br />We specialised in cultural consulting
                from our 4 locations around the world.
              </Fragment>
            ),
            project: "project #1    project #2    project #3    project #4 "
          }
        },
        {
          url: "Directors3.png",
          tips: "luu anh",
          title: "manage",
          desc: {
            title: "description and motto about work ethic.",
            text: (
              <Fragment>
                We specialised in cultural consulting from our 4 locations
                around the world. <br />We specialised in cultural consulting
                from our 4 locations around the world.
              </Fragment>
            ),
            project: "project #1    project #2    project #3    project #4 "
          }
        },
        {
          url: "Directors4.png",
          tips: "johnathan lim",
          title: "manage",
          desc: {
            title: "description and motto about work ethic.",
            text: (
              <Fragment>
                We specialised in cultural consulting from our 4 locations
                around the world. <br />We specialised in cultural consulting
                from our 4 locations around the world.
              </Fragment>
            ),
            project: "project #1    project #2    project #3    project #4 "
          }
        }
      ]
    } = this.props;
    return (
      <div className="dir-list">
        {imgList.map((item, index) => {
          let { url, date, tips = "", title = "", desc = {} } = item;
          let { title: subTitle = "", text = "", project = "" } = desc;
          return (
            <div className={`dir-panel dir-panel${index}`} key={`${index}`}>
              <div className="tips">{tips.toUpperCase()}</div>
              <img src={require(`../images/${url}`)} />
              <div className="show-title">{title.toUpperCase()}</div>
              <div className="desc">
                <div className="line-title">{subTitle.toUpperCase()}</div>
                <div className="line-desc">{text}</div>
                <div className="line-title">{project.toUpperCase()}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
