import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export default class Client extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  interval = null;
  componentDidMount() {}

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      visible: nextProps.visible
    };
  }

  render() {
    let { visible } = this.state;
    let { className } = this.props;
    return (
      <div
        className={`client-panel ${className} ${visible ? "show-client" : ""}`}
      >
        <div className="client-content">
          <div className="logo-list">
            {new Array(16).fill(1).map((item, index) => {
              return <div className={`logo-icon logo-icon${index}`} />;
            })}
          </div>
          <div className="text-panel">
            <div className="close-icon" onClick={this.props.onClose} />
            <div className="text-panel-title">
              Shanghai <div className="text-panel-tips">since 2006</div>
            </div>
            <div className="text-panel-line">Ze headquarters</div>
            <div className="text-panel-desc">
              Opened since XX lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </div>
            <div className="text-panel-line">Ze headquarters</div>
            <div className="text-panel-desc">
              Opened since XX lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            </div>
            <div className="project-results">
              <div style={{ float: "left", marginRight: "30px" }}>results:</div>
              <div style={{ float: "left" }}>
                - 90M Views <br />- 70k Budget <br />- 900M Impressions
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
