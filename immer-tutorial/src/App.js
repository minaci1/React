import React, { useRef, useCallback, useState } from 'react';
import { produce } from 'immer';

const originalState = [
  {
    id: 1,
    todo: '1111',
    checked: false,
  },
  {
    id: 2,
    todo: '22222',
    checked: false,
  },
];
// console.log('🚀 ~ file: App.js:16 ~ originalState:', originalState);
// //id 가 2 인 항목의 checked 값을 true로 변경

const newState = produce(originalState, draft => {
  console.log('🚀 ~ file: App.js:20 ~ newState ~ draft:', draft);

  const todo = draft.find(info => info.id === 2);
  todo.checked = true;

  draft.push({
    // 이건 참조변수가 변하지 않아서 데이터가 렌더링하지 않는다.
    id: 3,
    todo: '33333',
    checked: false,
  });
  // 위치 얻어와서 1건 지우기
  draft.splice(
    draft.findIndex(info => info.id === 1),
    1,
  );
});
console.log('🚀 ~ file: App.js:35 ~ newState ~ newState:', newState);

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    //setForm(produce(form, draft => (draft[name] = value)));
    setForm(
      produce(draft => {
        draft[name] = value;
      }),
    ); // 리액트가 기존꺼 form 알고 있다.
  }, []);

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    e => {
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
  const onRemove = useCallback(id => {
    setData({ ...data, array: data.array.filter(info => info.id !== id) });
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
          {data.array.map(info => (
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
