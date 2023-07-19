import React, { useCallback } from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';

const TodoListItem = ({ todo, removeTodo, onToggle, style }) => {
  const { id, title, checked } = todo;

  const onClickRemove = useCallback(
    (e) => {
      removeTodo(id);
    },
    [id],
  );

  const onChangeChecked = useCallback(
    (e) => {
      onToggle(id);
    },
    [id],
  );

  return (
    //버츄어 요소 쓸 때사용해야하는 클래스 명이 있다. 꼭 만들어줘야함~
    <div className="TodoListItem-virtualized" style={style}>
      <div className="TodoListItem">
        <div className={cn('checkbox', { checked })} onClick={onChangeChecked}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{title}</div>
        </div>
        <div className="remove" onClick={onClickRemove}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);
