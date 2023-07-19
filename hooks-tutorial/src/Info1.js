import React from 'react';
import useModel from './useModel';

const Info1 = () => {
  //연관 배열로 사용할 때
  //const { state, onChange } = useModel({ name: '', nickname: '' }); //정상
  const model = useModel({ name: '', nickname: '' }); //정상

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          value={model.state.name}
          onChange={model.onChange}
        />
        <input
          type="text"
          name="nickname"
          value={model.state.nickname}
          onChange={model.onChange}
        />
      </div>
      <div>
        <b>이름:</b>
        {state.name}
      </div>
      <div>
        <b>닉네임:</b>
        {state.nickname}
      </div>
    </div>
  );
};

export default Info1;
