import React, { useCallback, useEffect, useReducer, useRef } from 'react';
import axios from 'axios';

const reducerTodo = (todos, action) => {
  switch (action.type) {
    case 'ALL_LIST_TODO':
      return action.todos;
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
  const [todos, dispatch] = useReducer(reducerTodo, []);
  const nextId = useRef(todos.length);

  console.log('todos.length', nextId.current);

  const todoList = () => {
    const token = JSON.parse(localStorage.getItem('auth'));
    console.log('🚀 ~ file: useModel.js:39 ~ todoList ~ token:', token);
    //user_id 를 가져와서 그에 대한 todolist만 select 해라

    axios
      .get('/todoList', { headers: { Authorization: token } })
      .then((response) => {
        console.log('🚀 ~ file: useModel.js:44 ~ .then ~ response:', response);

        dispatch({
          type: 'ALL_LIST_TODO',
          todos: response.data,
        });
      });
  };
  console.log(todos.checked);

  useEffect(() => {
    todoList();
  }, []);

  const insertTodo = useCallback(
    (value) =>
      axios
        .post(
          '/insert',
          {
            checked_yn: 'N',
            title: value,
          },
          {
            headers: { 'Context-type': 'application/json' },
          },
        )
        .then((response) => {
          console.log('response.data' + response.data);
          dispatch({
            type: 'INSERT_TODO',
            todo: {
              id: response.data,
              title: value + ' ' + nextId.current,
              checked_yn: response.data.checked_yn,
            },
          });
        }),
    [],
  );

  const removeTodo = useCallback(
    //useCallback 을 써야 함수 재호출 하지 않는다.
    (id) => {
      axios.post('/delete', { id: id }).then((response) => {
        if (parseInt(response.data) === 1) {
          dispatch({ type: 'REMOVE_TODO', id: id });
        }
      });
    },
    [],
  );

  const onToggle = useCallback((id, checked) => {
    console.log(id);
    axios
      .post('/update', { id: id, checked_yn: checked ? 'N' : 'Y' })
      .then((response) => {
        if (parseInt(response.data) === 1) {
          console.log('아오' + response.data);
          dispatch({
            type: 'ON_TOGGLE',
            id: id,
          });
        }
      });
  }, []);

  //console.log('🚀 ~ file: useModel.js:27 ~ reducerTodo ~ todos:', todos);

  const actions = { insertTodo, removeTodo, onToggle };
  return { todos, actions }; // 앞쪽에 데이터가 오고 뒤에 함수
};

export default useModel;
