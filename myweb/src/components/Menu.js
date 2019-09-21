import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.less";
import { Client } from "../components";
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showClient: true
    };
  }
  interval = null;
  componentDidMount() {}
  jump = url => () => {
    // debugger;
    // console.log(this.props);
    this.props.history.push(url);
  };
  render() {
    let { showClient } = this.state;
    let { pathname } = this.props;
    return (
      <header className={`menu-header ${showClient ? "show-client" : ""}`}>
        <Client className={`${showClient ? "show-client" : ""}`} />
        <div className="menu-panel">
          <div className="nav-list">
            {[
              { url: "/", name: "CLIENTS" },
              { url: "/Detail/Directors", name: "DIRECTORS" },
              {},
              { url: "/Detail/Offices", name: "OFFICES" },
              { url: "/Detail/About", name: "ABOUT" }
            ].map(item => {
              let { url, name } = item;
              if (url) {
                return (
                  <div className={`nav ${pathname === url ? "current" : ""}`}>
                    <a onClick={this.jump(url)}>{name}</a>
                  </div>
                );
              }
              return (
                <div className="nav">
                  <div className="menu-logo" />
                </div>
              );
            })}
          </div>
        </div>
      </header>
    );
  }
}
