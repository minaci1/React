import React, { useRef, useState } from 'react';

const InputForm = ({ model }) => {
  const [number, setNumber] = useState('');
  const inputElement = useRef();

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const clickCount = useRef(1);
  const onSubmit = (e) => {
    e.preventDefault();
    inputElement.current.focus();
    console.log('clickCount' + clickCount.current++); // 등록할때마다 +1
    model.addNumber(number);
    setNumber('');
    return false;
  };

  return (
    <form onSubmit={onSubmit}>
      <input value={number} onChange={onChange} ref={inputElement}></input>
      <button type="submit">등록</button>
    </form>
  );
};

export default InputForm;
