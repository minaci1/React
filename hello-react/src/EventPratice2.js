import React, { Component } from 'react';
import './EventPractice.css';
class EventPratice2 extends Component {
  state = {
    message: '',
    username: '',
    id: '',
    passwd: '',
  };

  //createRef() 함수를 사용하여 멤버 변수 선언 및 초기화
  id = React.createRef(); // ref속성을 이용하여 값을 설정//current 값이 설정됨
  username = React.createRef();
  passwd = React.createRef();

  //id 사용시 id.current가 실제 DOM 객체

  handlerChange = (e) => {
    console.log(e.target);
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerClick = (e) => {
    this.setState({ message: '', username: '', id: '', passwd: '' });
  };

  handlerSubmit = (e) => {
    this.passwd.current.className = '';
    if (this.passwd.current.value === '0000') {
      this.passwd.current.className = 'success';
    } else {
      this.passwd.current.className = 'failure';
    }

    //form 속성 action에 설정된 주소로 입력 값 전달을 취소한다
    if (this.id.current.value === '') {
      alert('아이디 입력해줘~~');
      e.preventDefault();
      //let id = document.querySelector("input[name='id']"); //순수자바스크립트(필수)
      this.id.current.focus();
      return false;
    }
    if (this.username.current.value === '') {
      alert('사용자이름 입력해줘~~');
      e.preventDefault();
      // let username = document.querySeector("input[name='username']"); //순수자바스크립트(필수)
      this.username.current.focus(); // current input 전체
      console.log('입력받은 이름:' + this.username.current.value);
      return false;
    }
  };

  add(a, b) {
    return a + b; //a,b는 this에 관련되지 않았다.
  }

  render() {
    return (
      <div>
        <form
          name="myForm"
          action="registerMember.do"
          method="get"
          onSubmit={this.handlerSubmit}
        >
          <h1>이벤트 연습2</h1>
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
            ref={this.username} //input 객체 부분을 this.username으로 설정한다.(진짜는 current이다.)
          />
          <br />
          아이디 :
          <input
            type="text"
            name="id"
            placeholder="아이디 입력 ..."
            onChange={this.handlerChange}
            value={this.state.id}
            ref={this.id}
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
            ref={this.passwd}
          />
          <h2>메시지 : {this.state.message}</h2>
          <h2>사용자명 : {this.state.username}</h2>
          <h2>아이디 : {this.state.id}</h2>
          <button type="submit">확인</button>
          {/* <image src=""></image> */}
          <button type="submit">초기화</button>
        </form>
      </div>
    );
  }
}

export default EventPratice2;
<h1>이벤트 연습</h1>;

<input type="text" name="message" placeholder="아무키나 입력해 보세요"></input>;
