import React, { Component, Fragment } from "react";
import { Link, HashRouter as Router, Route } from "react-router-dom";

import { Word, IconList } from "../components";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leave: false,
      mouseIndex: -1
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

  setMouseIndex = mouseIndex => () => {
    this.setState({ mouseIndex });
  };

  renderWorkByValue = (value, time1, time2) => {
    return value.split("").map((word, wordIndex) => {
      if (word === " " || word === ".") {
        return word;
      } else {
        return (
          <Word time1={time1} time2={time2} key={wordIndex}>
            {word.toLocaleUpperCase()}
          </Word>
        );
      }
    });
  };
  render() {
    let { modalVisible, leave, mouseIndex } = this.state;
    let modalClassName = modalVisible
      ? "push-home"
      : modalVisible === false
      ? "close"
      : "";
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
            {/* <div>PUSH</div>
            <div>FEST</div> */}
            <img src={require("../images/pushfestword.png")} />
          </div>
          <div className="push-fest-content">
            <p>2019</p>
            <p style={{ color: "#999" }}>
              This Summer we brought PUSHFEST back to Central Studios. Over 1200
              guests came throughout the night to enjoy an evening of film
              screenings, photo exhibitions, interactive installations and local
              food and beverages. We premiered “SHANGHAI 6”, the long awaited
              Sequel of “Shanghai 5”, a video project documenting on Shanghai's
              Skateboarding scene created by Charles Lanceplaine. Together with
              Beats, we hosted a panel talk with special guests Leticia Bufoni
              and Aori Nishimura, who shared their experiences touring the world
              as professional female skateboarders. The Fest ended with a heavy
              skate session with prices from Beats, Herschel, Carhartt and more.
            </p>
            <div className="push-results">
              <div
                style={{
                  float: "left",
                  marginRight: "0.3rem",
                  letterSpacing: "0.016rem"
                }}
              >
                RESULTS:
              </div>
              <div style={{ float: "left" }}>
                - Guests: 1200+ <br />- Social impressions: 100,000+
              </div>
            </div>
            <div className="push-link">SH</div>
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
              { value: "work", url: "/Detail/Work", onClick: this.jump },
              {
                value: "Directors",
                url: "/Detail/Directors",
                onClick: this.jump
              },

              { value: "about", url: "/Detail/About", onClick: this.jump },
              {
                value: "SHANGHAI. LOS ANGELES. OSLO. tokyo.",
                url: "/Detail/Offices",
                onClick: this.jump
              }
            ].map((item, index) => {
              let { value, onClick = () => {}, url } = item;

              return (
                <div
                  className="nav"
                  onMouseOver={this.setMouseIndex(index)}
                  onMouseLeave={this.setMouseIndex(-1)}
                >
                  {mouseIndex === index ? (
                    <a className="hover" onClick={onClick(url)}>
                      {this.renderWorkByValue(value, 30, 300)}
                    </a>
                  ) : (
                    undefined
                  )}
                  <a onClick={onClick(url)}>{this.renderWorkByValue(value)}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="push-name">TAGLINE SIGNATURE TEXT GOES HERE</div>
        <IconList />

        <div className="copy-right">ALL RIGHTS RESERVED - 2019</div>
      </div>
    ];
  }
}
