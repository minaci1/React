import React, { useRef, useState, useCallback } from 'react';
import './App.css';
import TodoInsert from './TodoInsert';
import TodoTemplate from './TodoTemplate';
import TodoList from './TodoList';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i < 2500; i++) {
    array.push({
      id: i,
      checked: i % 3 === 0,
      title: 'react기초',
    });
  }
  return array;
};

function App() {
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(todos.length + 1); // 상태변수 말고 useRef로 value관리하기

  const insertTodo = useCallback((value) => {
    setTodos((aaa) =>
      aaa.concat({
        id: nextId.current++,
        checked: false,
        title: value,
      }),
    );
  }, []);

  const removeTodo = useCallback((id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }, []);

  const changeChecked = useCallback(
    (id) => {
      setTodos(
        todos.map((v) => (v.id === id ? { ...v, checked: !v.checked } : v)),
      );
    },
    [todos],
  );
  return (
    <div>
      <TodoTemplate>
        <TodoInsert insertTodo={insertTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          changeChecked={changeChecked}
        />
      </TodoTemplate>
    </div>
  );
}

export default App;
