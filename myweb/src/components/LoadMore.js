import React, { PureComponent } from "react";
import "../styles/loadmore.less";
class LoadMore extends PureComponent {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    let { isLoadEnd, isLoadingMore } = this.props;
    if (isLoadEnd) {
      return "";
    }
    return (
      <div className="load-more" ref="wrapper">
        {//如果正在加载中就显示加载中。不是就显示加载更多的按钮
        isLoadingMore ? (
          <span>loading...</span>
        ) : (
          <span onClick={this.loadMoreHandle.bind(this)}>load more</span>
        )}
      </div>
    );
  }
  loadMoreHandle() {
    // 执行传输过来的
    this.props.loadMoreFn();
  }

  //下拉加载更多的方法
  componentDidMount() {
    // 使用滚动时自动加载更多
    const loadMoreFn = this.props.loadMoreFn;
    const wrapper = this.refs.wrapper;
    let timeoutId;
    function callback() {
      const top = wrapper.getBoundingClientRect().top;
      const windowHeight = window.screen.height;
      if (top && top < windowHeight) {
        // 证明 wrapper 已经被滚动到暴露在页面可视范围之内了
        loadMoreFn();
      }
    }
    window.addEventListener(
      "scroll",
      function() {
        if (this.props.isLoadingMore) {
          return;
        }
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(callback, 50);
      }.bind(this),
      false
    );
  }
}

export default LoadMore;
