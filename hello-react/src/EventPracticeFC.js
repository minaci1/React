import React, { useState } from 'react';

const EventPracticeFC = () => {
  const [map, setMap] = useState({ message: '', username: '', id: '' });

  const handlerChange = (e) => {
    console.log(e.target);
    setMap({ ...map, [e.target.name]: e.target.value });
  };
  const handlerClick = (e) => {
    setMap({ message: '', username: '', id: '' });
  };
  const handlerKeydown = (e) => {
    if (e.keyCode === 13) {
      handlerClick(e);
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      메시지:{' '}
      <input
        type="text"
        name="message"
        placeholder="아무키나 입력해 보세요"
        onChange={handlerChange}
        onKeyDown={handlerKeydown}
        value={map.message}
      />
      <br />
      사용자명 :
      <input
        type="text"
        name="username"
        placeholder="사용자이름 입력 ... "
        onChange={handlerChange}
        value={map.username}
      />
      아이디 :
      <input
        type="text"
        name="id"
        placeholder="아이디 입력 ..."
        onChange={handlerChange}
        value={map.id}
      />
      <h2>메시지 : {map.message}</h2>
      <h2>사용자명 : {map.username}</h2>
      <h2>아이디 : {map.id}</h2>
      <button
        onClick={(e) => {
          setMap({ message: '', username: '', id: '' });
        }}
      >
        초기화
      </button>
    </div>
  );
};

export default EventPracticeFC;
