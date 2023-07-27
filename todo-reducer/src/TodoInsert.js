import React, { useCallback, useContext, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import TodoContext from './context/TodoContext';
const TodoInsert = () => {
  
  const { actions } = useContext(TodoContext);
  const [value, setValue] = useState('');
  const inputBox = useRef(); //커서를 놓기위해

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    inputBox.current.focus();

    if (value === '' && value.length === 0) {
      alert('할일을 입력해주세요');
      return false;
    }

    //할일 추가한다.
    actions.insertTodo(value);
    setValue('');
    return false;
  });

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        value={value}
        ref={inputBox}
        onChange={onChange}
        placeholder="할일을 입력하세요"
        required // 필수 입력 (반드시 입력하라는 뜻)
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
