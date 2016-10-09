/// <reference path="../typings/index.d.ts" />
import * as React from 'react';

interface LikeButtonState {
  hovered?: boolean;
  count?: number;
  liked?: boolean;
}

export default class LikeButton extends React.Component<any, LikeButtonState> {
  constructor(props: any) {
    super(props);
    this.state = {hovered: false, count: 999, liked: false};
  }

  render() {
    console.log("render");
    const styles = this.styles();
    console.log(this.state);

    // 状態に応じてスタイルを変更する
    let likeStyle: any;
    if (this.state.hovered) {
      likeStyle = this.merge(styles.like, styles.likeHover);
    } else {
      likeStyle = styles.like;
    }

    return (
      <span style={styles.container}>
        <span
          style={likeStyle}
          onMouseEnter={() => this.setState({hovered: true})}
          onMouseLeave={() => this.setState({hovered: false})}
          onClick={() => this.setState({
            count: this.state.count + (this.state.liked ? -1 : 1),
            liked: !this.state.liked})}
          >{this.state.liked ? "✔ " : ""}
          いいね！
        </span>
        <span style={styles.counter}>
          <span style={styles.counterBefore}>{" "}</span> {this.state.count}
        </span>
      </span>
    );
  }

  merge(obj1: any, obj2: any) {
    let result: any = obj1;
      if (!obj2) {
          obj2 = {};
      }
      for (var attrname in obj2) {
          if (obj2.hasOwnProperty(attrname)) {
              result[attrname] = obj2[attrname];
          }
      }
      return result;
  };

  styles() {
    return {
      container: {
        fontFamily: "helvetica, arial, 'hiragino kaku gothic pro', meiryo, 'ms pgothic', sans-serif",
        fontSize: 11
      },
      like: {
        display: "inline-block",
        background: "#3b5998",
        padding: "0px 5px",
        borderRadius: 2,
        color: "#ffffff",
        cursor: "pointer",
        float: "left",
        height: 20,
        lineHeight: "20px"
      },
      likeHover: {
        background: "#444"
      },
      counterBefore: {
        display: "block",
        float: "left",
        width: 6,
        height: 6,
        background: "#fafafa",
        marginLeft: "-12px",
        borderRight: 10,
        transform: "rotate(45deg)",
        WebkitTransform: "rotate(45deg)",
        marginTop: 6,
        borderLeft: "1px solid #aaa",
        borderBottom: "1px solid #aaa"
      },
      counter: {
        display: "block",
        background: "#fafafa",
        boxSizing: "border-box",
        border: "1px solid #aaa",
        float: "left",
        padding: "0px 8px",
        borderRadius: 2,
        marginLeft: 8,
        height: 20,
        lineHeight: "20px"
      }
    };
  }
}
