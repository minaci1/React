import React, { Component } from 'react';
import './EventPractice.css';
class EventPratice extends Component {
  state = {
    message: '',
    username: '',
    id: '',
    passwd: '',
  };
  //멤버 변수 선언
  id = null; //ref 사용하여 callback function에서 값을 설정
  username = null;
  passwd = null;

  //   handlerCangeMessage = (e) => {
  //     console.log(e.target);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  //   handlerCangeUsername = (e) => {
  //     console.log(e.target);
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  handlerChange = (e) => {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerClick = (e) => {
    this.setState({ message: '', username: '', id: '', passwd: '' });
  };
  // handlerKeydown = (e) => {
  //   //이런식으로 코딩하면 안됨
  //   if (e.keyCode === 13) {
  //     this.handlerClick(e);
  //   }
  // };
  handlerSubmit = (e) => {
    //원래 일케 하면 안됨
    // let passwd = document.getElementById('passwd'); //순수자바스크립트(필수)
    //let passwd = document.querySelector("input[name='passwd']"); //순수자바스크립트(필수)
    this.passwd.className = '';
    if (this.passwd.value === '0000') {
      this.passwd.className = 'success';
    } else {
      this.passwd.className = 'failure';
    }

    //form 속성 action에 설정된 주소로 입력 값 전달을 취소한다
    if (this.state.id === '') {
      alert('아이디 입력해줘~~');
      e.preventDefault();
      //let id = document.querySelector("input[name='id']"); //순수자바스크립트(필수)
      this.id.focus();
      return false;
    }
    if (this.state.username === '') {
      alert('사용자이름 입력해줘~~');
      e.preventDefault();
      // let username = document.querySeector("input[name='username']"); //순수자바스크립트(필수)
      this.username.focus();
      return false;
    }
  };
  render() {
    return (
      <div>
        <form
          name="myForm"
          action="registerMember.do"
          method="get"
          onSubmit={this.handlerSubmit}
        >
          <h1>이벤트 연습</h1>
          <input
            type="text"
            name="message"
            placeholder="아무키나 입력해 보세요"
            onChange={this.handlerChange}
            //onKeyDown={this.handlerKeydown}
            value={this.state.message}
          />
          메시지: <br />
          사용자명 :
          <input
            type="text"
            name="username"
            placeholder="사용자이름 입력 ... "
            onChange={this.handlerChange}
            value={this.state.username}
            ref={(username) => (this.username = username)} //괄호안에 ref는 자신(input)이다,this는 EventPratice이다.
          />
          <br />
          아이디 :
          <input
            type="text"
            name="id"
            placeholder="아이디 입력 ..."
            onChange={this.handlerChange}
            value={this.state.id}
            ref={(id) => (this.id = id)}
          />
          <br />
          비밀번호 :
          <input
            type="password"
            name="passwd"
            id="passwd"
            placeholder="비밀번호 입력 ..."
            onChange={this.handlerChange}
            value={this.state.passwd}
            ref={(passwd) => (this.passwd = passwd)}
          />
          <h2>메시지 : {this.state.message}</h2>
          <h2>사용자명 : {this.state.username}</h2>
          <h2>아이디 : {this.state.id}</h2>
          <button type="submit">확인</button>
          <image src=""></image>
          <button type="submit">초기화</button>
        </form>
      </div>
    );
  }
}

export default EventPratice;
<h1>이벤트 연습</h1>;

<input type="text" name="message" placeholder="아무키나 입력해 보세요"></input>;
