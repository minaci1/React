import React, { Component } from 'react';

class ScrollBoxCreatRef extends Component {
  outerBox = React.createRef();

  scrollToBottom = () => {
    this.outerBox.current.scrollTop =
      this.outerBox.current.scrollHeight - this.outerBox.current.clientHeight;
  };
  scrollToCustom = () => {
    this.outerBox.current.scrollTop =
      this.outerBox.current.scrollHeight - this.outerBox.current.clientHeight;
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
        <div style={style} ref={this.outerBox}>
          <div style={innerStyle}></div>
        </div>
        <button onClick={(e) => this.scrollToCustom()}>임시 맨 밑으로</button>
      </>
    );
  }
}

export default ScrollBoxCreatRef;
