import React, { Component, Fragment } from "react";
import { Link, HashRouter as Router, Route } from "react-router-dom";
import "../App.less";
import Word from "../components/Word";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  interval = null;
  componentDidMount() {}
  openModal = () => {
    this.setState({ modalVisible: true });
  };
  closeModal = () => {
    this.setState({ modalVisible: false });
  };

  render() {
    let { modalVisible } = this.state;
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
          <img
            className="push-fest-img"
            src={require("../images/pushfest.png")}
          />
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
          <div className="mask" />
        </div>

        <div className="nav-panel">
          <div className="nav-list">
            {[
              { value: "push fest", onClick: this.openModal },
              { value: "Directors" },
              { value: "work" },
              { value: "about" },
              { value: "SHANGHAI. LOS ANGELES. OSLO. tokyo." }
            ].map(item => {
              let { value, onClick = () => {} } = item;
              return (
                <div className="nav">
                  <a onClick={onClick}>
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
            })}
          </div>
        </div>

        <div className="icon-panel">
          <div className="icon-list">
            <div className="icon icon-1" />
            <div className="icon icon-2" />
            <div className="icon icon-3" />
          </div>
        </div>
        <div className="copy-right">all rights reserved - 2019</div>
      </div>
    ];
  }
}
