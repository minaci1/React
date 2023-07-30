import React from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';
import { TodoProvider } from '../../context/TodoContext';

const TodoPage = () => {
  return (
    <div>
      <TodoProvider>
        <TodoTemplate>
          <TodoInsert />
          <TodoList />
        </TodoTemplate>
      </TodoProvider>
    </div>
  );
};

export default TodoPage;
