import React, { PureComponent, Fragment } from "react";

const wordArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "w",
  "X",
  "Y",
  "Z"
];
export default class Word extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      text: ""
    };
  }
  interval = null;
  componentDidMount() {
    setTimeout(() => {
      this.interval = setInterval(() => {
        let num = Math.ceil(Math.random(0) * 26);
        this.setState({ text: wordArr[num] });
      }, 10);
    }, 500);

    setTimeout(() => {
      let { children } = this.props;
      clearInterval(this.interval);
      this.setState({ text: children });
    }, 1000);
  }

  render() {
    let { text } = this.state;
    return <Fragment>{text}</Fragment>;
  }
}
