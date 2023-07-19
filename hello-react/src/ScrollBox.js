import React, { Component } from 'react';

class ScrollBox extends Component {
  scrollToBottom = () => {
    this.outerBox.scrollTop = this.outerBox.scrollHeight;
  };

  scrollToCustom = () => {
    this.outerBox.scrollTop =
      this.outerBox.scrollHeight - this.outerBox.clientHeight;
  };

  render() {
    const style = {
      border: '1px solid block',
      height: '300px',
      width: '300px',
      overflow: 'auto', //스크롤하기 위함
      position: 'relative',
      background: 'red',
    };
    const innerStyle = {
      width: '100%',
      height: '1000px',
      background: 'green',
    };

    return (
      <>
        <div style={style} ref={(ref) => (this.outerBox = ref)}>
          <div style={innerStyle}></div>
        </div>
        <button onClick={(e) => this.scrollToBottom()}>임시 맨 밑으로</button>
      </>
    );
  }
}

export default ScrollBox;
