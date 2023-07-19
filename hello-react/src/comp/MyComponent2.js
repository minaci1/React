import React from 'react';
import PropTypes from 'prop-types';

// 인자의 타입은 map 구조이다.
/*
props={
  name : "홍길동"
  age : "20"
}
props의 값은 변경 할 수 없음, 상수라고 봐주기
여기서는 props는 읽기 전용 데이터이다.
*/

//옛날 함수 표기법
export default function MyComponent2(props) {
  //const name = props.name;
  //const age = props.age;
  //const children = props.children;
  //children 안된다. 명시하지 않았기 때문에 사용이 안된다.
  const { name, age } = props; //2개 한번에 map 구조이다! 둘 중 하나가 없으면 undifined 나옴 -> 비구조화 할당 문법
  //name,age는 로컬 변수이다.
  //무조건 const 로 정해준다.

  return (
    <div>
      <h1>나의 두번째 컴포넌트</h1>
      <h2>이름 :{props.name}</h2>
      <h2>나이: {props.age}</h2>
      <h2>이름 :{name}</h2>
      <h2>나이: {age}</h2>
      <h2>자식: {props.children}</h2>
    </div>
  );
}
//내가 전달해주지 않아도 기본적으로 설정해줄 수 있다.
MyComponent2.defaultProps = {
  name: '기본이름',
};

MyComponent2.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired, //타입은 숫자 , 값이 들어와도 되고 안들어와도 됨 isRequired는 반드시 숫자 들어와야 함
};
//export default MyComponent2;
