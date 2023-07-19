import React, { useCallback } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, removeTodo, changeChecked }) => {
  const { title, checked } = todo;

  const onClickRemove = useCallback(
    (e) => {
      removeTodo(todo.id);
    },
    [todo],
  );

  const onChangeChecked = useCallback(
    (e) => {
      changeChecked(todo.id);
    },
    [todo],
  );

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={onChangeChecked}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">
          {title} {todo.id}
        </div>
      </div>
      <div className="remove" onClick={onClickRemove}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
