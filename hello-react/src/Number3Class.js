import React, { Component } from 'react';

class Number3Class extends Component {
  state = { a: 1, b: 2, c: 3 };

  static defaultProps = {
    map: { a: 1, b: 2, c: 3 },
  };

  handleIncrement = (prevValue) => {
    this.setState({ [prevValue]: this.state[prevValue] + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.a}</h1>
        <h1>{this.state.b}</h1>
        <h1>{this.state.c}</h1>
        <button onClick={() => this.handleIncrement('a')}>1증가</button>
        <button onClick={() => this.handleIncrement('b')}>2증가</button>
        <button onClick={() => this.handleIncrement('c')}>3증가</button>
      </div>
    );
  }
}

export default Number3Class;
