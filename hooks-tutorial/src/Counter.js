import React, { useReducer } from 'react'; // 가볍다. 더존에서 좋아하는 함수

//비즈니스 로직만
function model(state, action) {
  // action : type: 'incValue'
  //처리 루틴 여러개 될 수 있다.
  //state는 관리하는 상태 변수
  //action : 명령(처리 루틴 여러개를 구분하는 키)
  switch (
    action.type //책임을 완전히 나눔 // 디스패처 호출하게 된다.
  ) {
    case 'incValue':
      return { value: state.value + 1 };
    case 'decValue':
      return { value: state.value - 1 };
    default:
      return state;
  }
} //변경된 데이터는 state이다.

//여기서는 출력과 이벤트핸들링만 한다.
const Counter = () => {
  // 읽고 이벤트 핸들러만 있다.
  //상태 변수 선언
  //const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(model, { value: 0 }); //첫번째는 model 함수, 두번째 파라매터는 기본값
  //model : 처리 함수
  //{value:0} : 초기값 => state 초기값을 받는 변수
  //dispatch : action을 수행할 함수를 나타남

  //아래에 선언된 것은 데이터 관리 함수
  const incValue = () => {
    //    setValue(value + 1);
    dispatch({ type: 'incValue' }); //비동기로 전달 // model 함수 호출
  };
  const decValue = () => {
    // setValue(value - 1);
    dispatch({ type: 'decValue' }); //비동기로 전달 // atction으로 전달
  };
  //아래는 출력에 대한 코드
  return (
    <div>
      <p>
        {/*아래 코드는 상태 코드 값을 읽고 출력*/}
        현재 카운터 값은 <b>{state.value}</b>
      </p>
      {/*아래 코드는 상태 코드 값을 변경*/}
      <button onClick={incValue}>1 증가</button>
      <button onClick={decValue}>1 감소</button>
    </div>
  );
};

export default Counter;
