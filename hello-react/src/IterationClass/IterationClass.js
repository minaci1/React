import React, { Component } from 'react';

class IterationClass extends Component {
  state = {
    inputText: this.props.inputText,
    names: this.props.names,
  };

  static defaultProps = {
    names: [
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
    ],
  };

  handlerRemove = (id) => {
    alert('삭제');
    this.setState({
      names: this.state.names.filter((item) => item.id !== id),
    });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    const names = this.state.names;
    this.setState({
      names: this.state.names.concat({
        id: this.state.names.length + 1,
        text: this.state.inputText,
      }),
      inputText: '', //초기화
    });
  };

  handlerChange = (e) => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    const { inputText, names } = this.state;
    const nameList = names.map((item) => (
      <li key={item.id} onDoubleClick={() => this.handlerRemove(item.id)}>
        {item.id}:{item.text}
        <button onClick={() => this.handlerRemove(item.id)}>삭제</button>
      </li>
    ));
    return (
      <div>
        <div>
          <form name="myForm" onSubmit={this.handlerSubmit}>
            <input
              type="text"
              value={inputText}
              onChange={this.handlerChange}
            ></input>
            <button type="submit">추가</button>
          </form>
        </div>
        <ul>{nameList}</ul>
      </div>
    );
  }
}

export default IterationClass;
