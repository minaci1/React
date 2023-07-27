import React, { memo, useContext } from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';
import { List } from 'react-virtualized';

import TodoContext from './context/TodoContext';

//app의 model : return [todos, insertTodo, removeTodo, onToggle]; // 앞쪽에 데이터가 오고 뒤에 함수
const TodoList = () => {
  const { todos, actions } = useContext(TodoContext);
  // //console.log('🚀 ~ file: TodoList.js:7 ~ TodoList ~ model:', model.todos);
  const rowRenderer = ({ index, key, style }) => {
    //key : tag id이다.
    // index는 앞뒤로 10개씩 출력한다. 나는 화면에 10개 보이는데 20개로 보인다.

    // console.log('🚀 ~ file: TodoList.js:10 ~ rowRenderer ~ style:', style);
    //console.log('🚀 ~ file: TodoList.js:10 ~ rowRenderer ~ key:', key);
    // console.log('🚀 ~ file: TodoList.js:10 ~ rowRenderer ~ index:', index);

    const todo = todos[index];
    return (
      <TodoListItem
        todo={todo}
        key={key} //id
        removeTodo={actions.removeTodo}
        onToggle={actions.onToggle}
        style={style}
      />
    );
  };
  console.log('todoList 렌더링~');
  return (
    //기존 데이터로 크기 알아보기
    // <div className="TodoList">
    //   {model.todos.map((todo) => (
    //     <TodoListItem
    //       todo={todo}
    //       key={todo.id}
    //       removeTodo={model.removeTodo}
    //       onToggle={model.onToggle}
    //     />
    //   ))}
    // </div>
    <List //버츄어 크기로 정해주고 , 인덱스 만들어서 rowRenderer 전달해
      className="TodoList"
      width={512}
      height={513}
      rowCount={todos.length}
      rowHeight={56}
      rowRenderer={rowRenderer}
      style={{ outline: 'none' }}
    />
  );
};

export default memo(TodoList);
