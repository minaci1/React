import React, { useState } from 'react';

const IterationSample = () => {
  const [inputText, setInputText] = useState(''); // input값을 인지해야 함
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]); // 이데이터는 db에서 가져와서 사용할 것이다.
  /*
  function handlerRemove(id) {
    setNames(names.filter((item) => item.id !== id));
  }
*/
  const handlerRemove = (id) => {
    alert('삭제');
    setNames(names.filter((item) => item.id !== id));
  };

  const nameList = names.map((item) => (
    <li key={item.id} onDoubleClick={() => handlerRemove(item.id)}>
      {item.id}:{item.text}
      <button onClick={() => handlerRemove(item.id)}>삭제(x)</button>
    </li>
  ));

  const handlerSumbit = (e) => {
    e.preventDefault();
    console.log('입력된 값' + inputText);
    setNames(names.concat({ id: names.length + 1, text: inputText }));
    setInputText('');
    return false;
  };

  const handlerChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <div>
        <form name="myForm" onSubmit={handlerSumbit}>
          <input type="text" value={inputText} onChange={handlerChange}></input>
          <button type="submit">추가</button>
        </form>
      </div>
      <ul>
        <li>{nameList}</li>
      </ul>
    </div>
  );
};

export default IterationSample;
