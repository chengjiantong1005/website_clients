import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.less";
import { Client } from "../components";
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showClient: false,
      isClose: false
    };
  }
  interval = null;
  componentDidMount() {}
  onClick = clients => () => {
    this.setState({ showClient: true, isClose: false });
  };
  closeClient = () => {
    this.setState({ isClose: true });
    setTimeout(() => {
      this.setState({ showClient: false });
    }, 500);
  };
  jump = url => () => {
    let { showClient } = this.state;
    this.closeClient();
    setTimeout(() => {
      this.props.history.push(url);
    }, showClient ? 1000 : 0);
  };
  render() {
    let { showClient, isClose } = this.state;
    let { pathname } = this.props;
    return (
      <header
        className={`menu-header ${isClose ? "close" : ""} ${showClient
          ? "show-client"
          : ""}`}
      >
        {showClient ? (
          <Client
            visible={showClient}
            onClose={this.closeClient}
            className={`${isClose ? "close" : ""}`}
          />
        ) : (
          undefined
        )}
        <div className="menu-panel">
          <div className="nav-list">
            {[
              { url: "/", name: "CLIENTS", onClick: this.onClick },
              {
                url: "/Detail/Directors",
                name: "DIRECTORS",
                onClick: this.jump
              },
              {},
              { url: "/Detail/Offices", name: "OFFICES", onClick: this.jump },
              { url: "/Detail/About", name: "ABOUT", onClick: this.jump }
            ].map(item => {
              let { url, name, onClick } = item;
              if (url) {
                return (
                  <div className={`nav ${pathname === url ? "current" : ""}`}>
                    <a onClick={onClick(url)}>{name}</a>
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
