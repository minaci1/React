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

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      // 원본 복제해서 보여줘야 한다.
      todos.map(
        (
          todo, // todos의 모든것 //...하는 이유는 react의 불변성이다. todo이면 렌더가 되지 않는다.
        ) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo),
      ),
    );
  }, []);
  return (
    <div>
      <TodoTemplate>
        <TodoInsert insertTodo={insertTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          changeChecked={onToggle}
        />
      </TodoTemplate>
    </div>
  );
}

export default App;
