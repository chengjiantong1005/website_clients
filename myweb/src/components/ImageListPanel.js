import React, { PureComponent, Fragment, useState, useEffect } from "react";

import axios from "axios";
// import { ImageList, LoadMore } from "./components";
import ImageList from "./ImageList";
import LoadMore from "./LoadMore";
const ImageListPanel = props => {
  const [imgList, setImgList] = useState([]);
  const [reload, setReload] = useState(props.reload);
  const [category, setCateGory] = useState(props.category);
  const [index, setIndex] = useState(1);
  const [isLoadEnd, setLoadEnd] = useState(false);
  const [size, setSize] = useState(9);
  const [hasMore, setHasMore] = useState(false);
  const [isLoadingMore, setLoadingMore] = useState(false);

  const searchList = async ({ category, index, size, reload }) => {
    await setLoadingMore(true);

    await axios
      .get("/webajax/project/list", { params: { category, index, size } })
      .then(async response => {
        let { data } = response;
        if (data.result) {
          let newImgList = data.data.map(item => {
            let { name, brand, cover = [], _id, frames = [] } = item;
            return {
              src: `/${(cover[0] || {}).path}`,
              frames: cover.concat(frames),
              date: brand,
              title: name,
              id: _id
            };
          });
          let list = reload === true ? newImgList : imgList.concat(newImgList);
          setImgList(list);
          setLoadingMore(false);
          setReload(false);
          setLoadEnd(list.length === data.count);
        }
      })
      .catch(function(error) {
        // 处理请求出错的情况
      });
  };
  //   searchList();
  useEffect(() => {
    setCateGory(props.category);
    setIndex(1);
    setReload(true);
  }, [props.category]);

  useEffect(() => {
    searchList({ category, index, size, reload });
  }, [index, category]);
  return (
    <>
      <ImageList imgList={imgList} />
      <LoadMore
        isLoadEnd={isLoadEnd}
        isLoadingMore={isLoadingMore}
        loadMoreFn={() => {
          setIndex(index + 1);
        }}
      ></LoadMore>
    </>
  );
};

export default ImageListPanel;
// export default class ImageListPanel1 extends PureComponent {
//   constructor(props) {
//     super(props);
//     this.state = {
//       visible: false,
//       category: props.category,
//       index: 1,
//       size: 9,
//       hasMore: false, //是否存在下一页
//       isLoadingMore: false //是否正在加载
//     };
//   }

//   componentDidMount() {
//     this.searchList();
//   }

//   static getDerivedStateFromProps(nextProps, prevState) {
//     if (prevState.category !== nextProps.category) {
//       return { category: nextProps.category };
//     }
//   }

//   searchList = async (reload = false) => {
//     let { category, index, size, imgList } = this.state;
//     await this.setState({
//       isLoadingMore: true
//     });
//     await axios
//       .get("/webajax/project/list", { params: { category, index, size } })
//       .then(response => {
//         let { data } = response;
//         if (data.result) {
//           let newImgList = data.data.map(item => {
//             let { name, brand, cover = [], _id, frames = [] } = item;
//             return {
//               src: `/${(cover[0] || {}).path}`,
//               frames: cover.concat(frames),
//               date: brand,
//               title: name,
//               id: _id
//             };
//           });
//           this.setState({
//             imgList: reload === true ? newImgList : imgList.concat(newImgList),
//             isLoadingMore: false,
//             isLoadEnd: !(newImgList.length === size),
//             index: index + 1
//           });
//         }
//       })
//       .catch(function(error) {
//         // 处理请求出错的情况
//       });
//   };

//   render() {
//     let { imgList } = this.state;
//     let { searchParams } = this.props;
//     return imgList.length > 0 ? (
//       <>
//         <ImageList imgList={imgList} />
//         <LoadMore
//           isLoadEnd={this.state.isLoadEnd}
//           isLoadingMore={this.state.isLoadingMore}
//           loadMoreFn={this.searchList.bind(this)}
//         ></LoadMore>
//       </>
//     ) : (
//       undefined
//     );
//   }
// }
