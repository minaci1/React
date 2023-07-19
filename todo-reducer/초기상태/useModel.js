import React, { useCallback, useReducer, useRef } from 'react';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,
      checked: i % 3 === 0,
      title: '리엑트의 기초 알아보기 할일 ' + i,
    });
  }
  return array;
};

const reducerTodo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.todo);
    case 'REMOVE_TODO':
      return state.filter((todo) => todo.id !== action.id);
    case 'TOGGLE_CHECKED':
      //   return state.map((todo) =>
      //     todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      //   );

      const todos = state;
      console.time('check');
      let left = 0;
      let right = todos.length - 1;
      let targetIndex = -1;
      while (left <= right) {
        let index = Math.floor((left + right) / 2);
        if (todos[index].id === action.id) {
          targetIndex = index;
          break;
        } else if (todos[index].id > action.id) {
          right = index - 1;
        } else left = index + 1;
      }
      todos[targetIndex].checked = !todos[targetIndex].checked;
      console.timeEnd('check');
      return [...todos];

    //   return todos.map((item) =>
    //     item.id === action.id ? { ...item, checked: !item.checked } : item,
    //   );
    //      이진탐색
    //   let left = 0;
    //   let right = todos.length - 1;
    //   let targetIndex = -1;
    //   while (left <= right) {
    //     let index = Math.floor((left + right) / 2);
    //     if (todos[index].id === action.id) {
    //       targetIndex = index;
    //       break;
    //     } else if (todos[index].id > action.id) {
    //       right = index - 1;
    //     } else left = index + 1;
    //   }
    //   todos[targetIndex].checked = !todos[targetIndex].checked;
    //   return [...todos];

    default:
      return state;
  }
};

function useModel() {
  const [todos, dispatch] = useReducer(reducerTodo, createBulkTodos());
  const nextId = useRef(todos.length + 1);

  console.log('aaaaaaaaaaaaaaaaaaaa');

  const insertTodo = useCallback((value) => {
    dispatch({
      type: 'ADD_TODO',
      todo: {
        id: nextId.current++,
        checked: false,
        title: value,
      },
    });
  }, []);

  const removeTodo = useCallback((id) => {
    dispatch({
      type: 'REMOVE_TODO',
      id: id,
    });
  }, []);

  const changeChecked = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_CHECKED',
      id: id,
    });
  }, []);

  return { todos, removeTodo, insertTodo, changeChecked };
}

export default useModel;

/*
import { useCallback, useReducer, useRef } from 'react';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i <= 30000; i++) {
    array.push({
      id: i,
      checked: i % 3 === 0,
      title: `리액트의 기초 알아보기 할일 ${i}`,
    });
  }
  return array;
};

const reducer = (todos, action) => {
  switch (action.type) {
    case 'insert':
      return todos.concat(action.todo);
    case 'remove':
      return todos.filter((item) => item.id !== action.id);
    case 'check':
      console.time('check');
      const newTodos = todos.map((item) =>
        item.id === action.id ? { ...item, checked: !item.checked } : item,
      );
      console.timeLog('check');
      return newTodos;

    //   return todos.map((item) =>
    //     item.id === action.id ? { ...item, checked: !item.checked } : item,
    //   );
    //      이진탐색
    //   let left = 0;
    //   let right = todos.length - 1;
    //   let targetIndex = -1;
    //   while (left <= right) {
    //     let index = Math.floor((left + right) / 2);
    //     if (todos[index].id === action.id) {
    //       targetIndex = index;
    //       break;
    //     } else if (todos[index].id > action.id) {
    //       right = index - 1;
    //     } else left = index + 1;
    //   }
    //   todos[targetIndex].checked = !todos[targetIndex].checked;
    //   return [...todos];
    default:
      return todos;
  }
};

const useModel = () => {
  const [todos, dispatch] = useReducer(reducer, createBulkTodos());
  const nextId = useRef(todos.length + 1);

  const onInsert = useCallback((value) => {
    dispatch({
      type: 'insert',
      todo: {
        id: nextId.current++,
        title: value,
        checked: false,
      },
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({ type: 'remove', id: id });
  }, []);

  const checkToggle = useCallback(
    (id) => dispatch({ type: 'check', id: id }),
    [],
  );

  return [todos, onInsert, onRemove, checkToggle];
};

export default useModel;
*/
