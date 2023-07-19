import logo from './logo.svg';
import './App.css';
//import { Component, Fragment } from 'react';
import Sayyaa from './Sayyaa';
import Number3 from './Number3';
import EventPratice from './EventPratice';
import Number3Class from './Number3Class';
import EventPracticeFC from './EventPracticeFC';
import EventPratice2 from './EventPratice2';
import ScrollBox from './ScrollBox';
import ScrollBoxCreatRef from './ScrollBoxCreatRef';
import React, { Component } from 'react';
//import { MyComponent, MyComponent2, MyComponent3 } from './comp';
//import { MyComponent } from './comp/MyComponent';

// function App() {
//   const name = 'undefined';

//   return (
//     <div className="react">
//       {name || <h1>undefined 입니다</h1>}
//       아이디: <input name="uid"></input>;{}
//       {
//         //자바스크립트 주석 종류
//         // 라인주석
//       }
//     </div>
//   );
// }

class App extends Component {
  scrollBox1 = React.createRef();
  scrollBox2 = React.createRef();
  render() {
    return (
      <div className="react">
        <ScrollBoxCreatRef ref={this.scrollBox1} />
        <ScrollBoxCreatRef ref={this.scrollBox2} />

        <div>
          <button onClick={(e) => this.scrollBox1.current.scrollToBottom()}>
            맨 밑으로
          </button>

          <button onClick={(e) => this.scrollBox2.current.scrollToBottom()}>
            맨 밑으로
          </button>
          {/* 
          <button onClick={(e) => this.scrollBox2.scrollToCustom()}>
            테스트
          </button> */}
        </div>
      </div>
    );
  }
}

/*
function App() {
  const name = '홍길동';
  return <div className="react">{name}</div>;
}
*/
export default App;
