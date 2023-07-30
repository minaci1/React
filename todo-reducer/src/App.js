import React, { useRef, useReducer, useCallback } from 'react';
import './App.css';
import TodoSignIn from './pages/signPages/TodoSignIn';
import TodoSignUp from './pages/signPages/TodoSignUp';
import TodoPage from './pages/todoPages/TodoPage';
import useModel from './useModel';
import { Route, Routes } from '../node_modules/react-router-dom/dist/index';

function App() {
  //const [todos, insertTodo, removeTodo, onToggle] = useModel(); // 나는 32byte를 넘겨줌
  const model = useModel(); // 그릇에 담아서 받자
  console.log('🚀 ~ file: App.js:11 ~ App ~ model:', model.onToggle);

  return (
    <Routes>
      <Route path="/" element={<TodoSignIn />} />
      <Route path="/signUp" element={<TodoSignUp />} />
      <Route path="/todoPages" element={<TodoPage />} />
    </Routes>
  );
}

export default App;
