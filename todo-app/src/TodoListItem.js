import React, { useCallback } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

//토글 행위
const TodoListItem = ({ todo, removeTodo, onToggle }) => {
  const { id, title, checked } = todo;

  //콜백함수 만드는게 좋다.useCallback
  const onClickRemove = useCallback(
    (e) => {
      removeTodo(id);
    },
    [todo],
  );

  return (
    <div>
      <div className="TodoListItem">
        <div
          className={cn('checkbox', { checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="title">{title}</div>
        </div>
        <div className="remove" onClick={onClickRemove}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
