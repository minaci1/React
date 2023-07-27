import React, { createContext } from 'react';
import useModel from '../useModel';

const TodoContext = createContext({
  state: { todos: [] },
  actions: {
    insertTodo: () => {},
    removeTodo: () => {},
    onToggle: () => {},
  },
});

const TodoProvider = ({ children }) => {
  // 값을 집어 넣는 provider
  const { todos, actions } = useModel();

  const value = {
    // wrapping 했다.
    todos: todos,
    actions: actions,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const { Consumer: TodoConsumer } = TodoContext;
export { TodoProvider, TodoConsumer };
export default TodoContext;
