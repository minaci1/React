import React from 'react';

const ListComponent = (props) => {
  const names = props.names.map((item) => (
    <li key={item.id} onDoubleClick={() => props.handlerRemove(item.id)}>
      {item.id}:{item.text}
      <button onClick={() => props.handlerRemove(item.id)}>삭제(x)</button>
    </li>
  ));

  return <ul>{names}</ul>;
};

export default ListComponent;
