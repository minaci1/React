import React, { useRef, useReducer, useCallback } from 'react';
import './App.css';
import TodoInsert from './TodoInsert';
import TodoTemplate from './TodoTemplate';
import TodoList from './TodoList';
import useModel from './useModel';

function App() {
  //const [todos, insertTodo, removeTodo, onToggle] = useModel(); // 나는 32byte를 넘겨줌
  const model = useModel(); // 그릇에 담아서 받자
  console.log('🚀 ~ file: App.js:11 ~ App ~ model:', model.onToggle);

  return (
    <div>
      <TodoTemplate>
        <TodoInsert insertTodo={model.insertTodo} />
        <TodoList model={model} />
      </TodoTemplate>
    </div>
  );
}

export default App;
