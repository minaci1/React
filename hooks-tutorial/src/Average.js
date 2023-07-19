import React, {
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from 'react';

const style = {};

// 변화가 없다면 저장하자
const getAverage = (list) => {
  console.log('평균값 계산 ->');
  if (list === null || list.length === 0) return 0;
  //   let sum = 0;
  //   for (let i = 0; i < list.length; i++) {
  //     sum += list[i];
  //   }
  const sum = list.reduce((a, b) => a + b); //b로 전달하고 누적은 a이다. 전체 결과는 sum으로 return 된다.
  return sum / list.length;
};

const Average = () => {
  const [list, setList] = useState([10, 50, 30, 70, 100]);
  const [number, setNumber] = useState('');
  const inputElement = useRef();
  //   const [avg, setAvg] = useState(0);

  //   useEffect(() => {
  //     //state에 의해서 관리되는 데이터
  //     //최초한번만 할 수 있도록 []
  //     setAvg(getAverage(list));
  //   }, []);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const clickCount = useRef(1);
  //clickCount = 111; //이렇게 하면 안됨
  const onClick = useCallback(
    //내부 함수 생성하는 것에 대해 캐싱
    (e) => {
      e.preventDefault();
      inputElement.current.focus();
      //clickCount.current++;
      console.log('clickCount' + clickCount.current++); // 임시 저장하는 용도로 쓴다
      //등록하는 함수
      setList(list.concat(parseInt(number)));
      // setAvg(getAverage(list)); // 명확하게 한번만 (메모이제이션처럼 구현한 것이다.)
      setNumber('');
    },
    [list, number] //list,number 변화있을때만 안에 내용 실행
  );

  //외부함수에 대해 성능 개선하기 위해 입력값과 결과를 캐싱한 것이다.
  const avg = useMemo(() => {
    // 로컬데이터
    console.log('useMemo() 함수에서 list가 변경될 때만 호출됨');
    return getAverage(list);
  }, [list]);
  console.log('화면 재구성함');
  return (
    <div>
      <form onSubmit={onClick}>
        <input value={number} onChange={onChange} ref={inputElement}></input>
        <button onClick={onClick}>등록</button>
      </form>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
