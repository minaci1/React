import React from 'react';
import useModel from './useModel';
import InputForm from './InputForm';
import NumberList from './NumberList';

const Average = () => {
  const model = useModel({ avg: 0, list: [10, 20, 30, 40, 50] });

  console.log('화면 재 구성함');
  return (
    <div>
      <InputForm model={model} />{' '}
      {/*위의 모델을 전달받는다. 그래서 useModel의 함수를 쓸 수 있다.*/}
      <NumberList avg={model.state.avg} list={model.state.list} />
    </div>
  );
};

export default Average;
