import React, { memo, useContext } from 'react';
import TodoListItem from './TodoListItem';
import '../css/TodoList.scss';
import { List } from 'react-virtualized';

import TodoContext from '../../context/TodoContext';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

const TodoList = () => {
  const { todos, actions } = useContext(TodoContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    navigate('/');
  };
  const rowRenderer = ({ index, key, style }) => {
    const todo = todos[index];
    return (
      <TodoListItem
        todo={todo}
        key={key}
        removeTodo={actions.removeTodo}
        onToggle={actions.onToggle}
        style={style}
      />
    );
  };

  console.log('todoList 렌더링~');
  return (
    <div style={{ position: 'relative' }}>
      <List
        className="TodoList"
        width={512}
        height={513}
        rowCount={todos.length}
        rowHeight={56}
        rowRenderer={rowRenderer}
        style={{ outline: 'none' }}
      />
      {/* Position the logout button at the bottom right corner */}
      <button
        onClick={handleLogout}
        className="logout-button"
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          background: '#22b8cf',
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default memo(TodoList);
