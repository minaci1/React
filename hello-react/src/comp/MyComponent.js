import React, { Component } from 'react';

class MyComponent extends Component {
  //클래스 컴포넌트
  //기본적으로
  constructor(props1) {
    //외부에서 넘어온 props1이다.
    super(props1);
  }

  //component에서 멤버변수에 들어간다. 결국 위랑 아래랑 다른것이다!!!
  render() {
    //지역변수 선언
    const { name, age } = this.props;

    return (
      <>
        <div>나의 첫번째 컴포넌트: {this.props.name}</div>
        <div>나이 : {this.props.age}</div>
        <div>나이 첫번째 컴포넌트 이름:{name}</div>
        <div>나이 : {age}</div>
      </>
    );
  }
}

//export default MyComponent;
export { MyComponent };
