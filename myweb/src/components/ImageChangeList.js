import React, { Component, Fragment } from "react";

export default class ImageChangeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  interval = null;
  componentDidMount() {
    this.setTimeOutChange();
  }

  setTimeOutChange = () => {
    let { index } = this.state;
    let { frames = [] } = this.props;
    setTimeout(() => {
      console.log(index, "-------------------");
      if (index < frames.length - 1) {
        this.setState({ index: index + 1 }, () => {
          this.setTimeOutChange();
        });
      }
    }, 1000);
  };

  onClick = index => e => {
    this.props.onChange(index);
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();

    return false;
  };
  //   componentWillMount() {
  //     this.setState = (state, callback) => {
  //       return;
  //     };
  //   }

  render() {
    let { index } = this.state;
    let { frames = [] } = this.props;
    let imgItem = frames[index] || {};

    return (
      <img
        index={index}
        key={`/${imgItem.path}`}
        src={`/${imgItem.path}`}
        className="change-img"
      />
    );
  }
}
