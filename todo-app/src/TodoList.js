import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

//리스트를 보여지기 위함
const TodoList = ({ todos, removeTodo, onToggle }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
