import React, { useRef, useCallback, useState } from 'react';

// 얕은 복사 3번을 해야 했다...

const originalState = [
  {
    id: 1,
    todo: '1111',
    checked: true,
  },
  {
    id: 2,
    todo: '22222',
    checked: false,
  },
];

console.log('🚀 ~ file: App.js:16 ~ originalState:', originalState);
//id 가 2 인 항목의 checked 값을 true로 변경
let newState = originalState.map((info) =>
  info.id !== 2 ? info : { ...info, checked: true },
);
console.log('🚀 ~ file: App.js:21 ~ newState:', newState);

//새로운 Info 추가 //여기서 잠깐! List 을 반환 받으면 위치가 나온다.
newState.push({
  // 이건 참조변수가 변하지 않아서 데이터가 렌더링하지 않는다.
  id: 3,
  todo: '33333',
  checked: false,
});

newState = [...newState]; // 복제해야 렌더링이 된다.
console.log('🚀 ~ file: App.js:32 ~ newState:', newState);

console.log('🚀 ~ file: App.js:29 ~ newState2:', newState.toString);

newState = newState.filter((info) => info.id !== 1);
console.log('🚀 ~ file: App.js:37 ~ newState:', newState);

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: [value] });
    },
    [form],
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array 에 새 항목 등록
      setData({ ...data, array: data.array.concat(info) });

      // form 초기화
      setForm({
        name: '',
        username: '',
      });
      nextId.current += 1;
    },
    [form.name, form.username],
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback((id) => {
    setData({ ...data, array: data.array.filter((info) => info.id !== id) });
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
