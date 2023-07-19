import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, removeTodo, changeChecked }) => {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          changeChecked={changeChecked}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
