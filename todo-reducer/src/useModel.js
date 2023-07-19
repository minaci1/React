import React, { useCallback, useReducer, useRef } from 'react';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 50000; i++) {
    array.push({
      id: i,
      checked: i % 3 === 0, //3번째에 대해 체크
      title: `리엑트의 기초 알아보기 할일 ${i}`,
    });
  }
  return array;
};

const reducerTodo = (todos, action) => {
  switch (action.type) {
    case 'INSERT_TODO':
      return todos.concat(action.todo);
    case 'REMOVE_TODO':
      return todos.filter((item) => item.id !== action.id);
    case 'ON_TOGGLE':
      return todos.map((item) =>
        item.id === action.id ? { ...item, checked: !item.checked } : item,
      );

    default:
      return todos;
  }
};

const useModel = () => {
  const [todos, dispatch] = useReducer(reducerTodo, createBulkTodos());
  const nextId = useRef(todos.length);

  const insertTodo = useCallback(
    (value) =>
      dispatch({
        type: 'INSERT_TODO',
        todo: {
          id: nextId.current++,
          title: value + ' ' + nextId.current,
          checked: false,
        },
      }),
    [],
  );

  const removeTodo = useCallback(
    //useCallback 을 써야 함수 재호출 하지 않는다.
    (id) => dispatch({ type: 'REMOVE_TODO', id: id }),
    [],
  );

  const onToggle = useCallback(
    (id) => dispatch({ type: 'ON_TOGGLE', id: id }),
    [],
  );

  //console.log('🚀 ~ file: useModel.js:27 ~ reducerTodo ~ todos:', todos);

  return { todos, insertTodo, removeTodo, onToggle }; // 앞쪽에 데이터가 오고 뒤에 함수
};

export default useModel;
