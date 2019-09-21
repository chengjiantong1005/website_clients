import React, { Component, Fragment } from "react";
import { Link, HashRouter as Router, Route } from "react-router-dom";

import { Word, IconList } from "../components";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leave: false
    };
  }
  interval = null;
  componentDidMount() {}
  openModal = () => () => {
    this.setState({ modalVisible: true });
  };
  closeModal = () => {
    this.setState({ modalVisible: false });
  };
  jump = url => () => {
    this.setState({ leave: true }, () => {
      setTimeout(() => {
        this.props.history.push(url);
      }, 500);
    });
  };
  render() {
    let { modalVisible, leave } = this.state;
    let modalClassName = modalVisible
      ? "push-home"
      : modalVisible === false ? "close" : "";
    return [
      modalVisible ? <div key="modal-mask" className="modal-mask" /> : "",
      <div key="pushfest" className={`push-fest ${modalClassName}`}>
        <div className="top">
          <div className="close-icon" onClick={this.closeModal} />
        </div>
        <div className="push-body">
          <div className="push-fest-img-panel">
            <img
              className="push-fest-img"
              src={require("../images/pushfest.png")}
            />
            <div className="push-fest-img-mask" />
          </div>

          <div className="push-fest-logo">
            <img src={require("../images/pushfestword.png")} />
          </div>
          <div className="push-fest-content">
            <p>2019</p>
            <p style={{ color: "#999" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip. sunt in culpa qui officia deserunt mollit anim id
              est laborum. Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <div className="push-results">
              <div style={{ float: "left", marginRight: "30px" }}>results:</div>
              <div style={{ float: "left" }}>
                - 90M Views <br />- 70k Budget <br />- 900M Impressions
              </div>
            </div>
            <div className="push-link">
              <a>visit website</a>
              <img src={require("../images/pushfestword2.png")} />
            </div>
          </div>
        </div>
      </div>,
      <div key="content" className={`content ${modalClassName}`}>
        <div className="logo-panel">
          <img
            src={require("../images/logo.png")}
            className="App-logo2"
            alt="logo"
          />
          <div className={`mask ${leave ? "leave" : ""}`} />
        </div>

        <div className="nav-panel">
          <div className="nav-list">
            {[
              { value: "push fest", onClick: this.openModal },
              {
                value: "Directors",
                url: "/Detail/Directors",
                onClick: this.jump
              },
              { value: "work", url: "/Detail/Work", onClick: this.jump },
              { value: "about", url: "/Detail/About", onClick: this.jump },
              {
                value: "SHANGHAI. LOS ANGELES. OSLO. tokyo.",
                url: "/Detail/Offices",
                onClick: this.jump
              }
            ].map((item, index) => {
              let { value, onClick = () => {}, url } = item;
              {
                /* if (index === 0) { */
              }
              return (
                <div className="nav">
                  <a onClick={onClick(url)}>
                    {value.split("").map(word => {
                      if (word === " " || word === ".") {
                        return word;
                      } else {
                        return <Word>{word.toLocaleUpperCase()}</Word>;
                      }
                    })}
                  </a>
                </div>
              );
              {
                /* } */
              }
              {
                /* return (
                <div className="nav">
                  <Link to={url}>
                    {value.split("").map(word => {
                      if (word === " " || word === ".") {
                        return word;
                      } else {
                        return <Word>{word.toLocaleUpperCase()}</Word>;
                      }
                    })}
                  </Link>
                </div>
              ); */
              }
            })}
          </div>
        </div>

        <IconList />
        <div className="copy-right">all rights reserved - 2019</div>
      </div>
    ];
  }
}
