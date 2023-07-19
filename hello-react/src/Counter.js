import React, { Component } from 'react';

class Counter extends Component {
  //number = this.props.number; //일케 쓰면 안된다. 언제 만들어졌는지 몰라서
  //props는 부모 데이터고 변경 x , 이걸 내 소속으로 만들어서 값을 수정할 수 있다.(실제로는 안된다)
  constructor(props) {
    super(props);

    this.state = {
      //state를 통해서 변수를 선언해야 한다.
      number: props.number,
    };
    this.number = props.number;
  } //일케 초기화 해줘야 함

  number = 0;

  render() {
    const { number } = this.state;
    console.log('랜더링~');
    return (
      //number 가져와서 재구성된 것이다.
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            console.log('버튼 클릭 값증가 전', number);
            //this.number++;
            this.setState({ number: number + 1 }); //내부적으로 비동기로 render() 호출 됨
            //console.log('버튼 클릭 값증가 후...', number);
            //변경할 요소, 변경할 값
            //render() 가 다시 호출된다.
            //비동기라서 연달아 호출해도 값은 같다.(오버라이드)
            //->연달아 호출이면 콜백함수 사용해야 함
          }}
        >
          1증가
        </button>
      </div>
    );
  }
}

export default Counter;
