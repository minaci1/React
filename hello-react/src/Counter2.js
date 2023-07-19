import React, { Component, useState } from 'react';
import { MyComponent } from './comp/MyComponent';

const Counter2 = () => {
  // 함수 컴포넌트는 이게 있어야 함
  const [number, setNumber] = useState(0);
  const [fixedNumber, setFixedNumber] = useState(0);

  console.log('Counter2 랜더링~');
  return (
    //number 가져와서 재구성된 것이다.
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          console.log('버튼 클릭 값증가 전', number);
          setNumber(number + 1);
        }}
      >
        1증가
      </button>
      <MyComponent name="홍길동" age={number} />
    </div>
  );
};
export default Counter2;
