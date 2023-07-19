import React from 'react';
import useModel from '../과제/useModel';
import InputForm from './InputForm';
import NumberList from './NumberList';

//뷰
const Average = () => {
  const model = useModel({ avg: 0, list: [10, 20, 30, 40, 50] });

  console.log('화면 재구성');
  return (
    <div>
      <InputForm model={model} />
      <NumberList list={model.state.list} avg={model.state.avg} />
    </div>
  );
};

export default Average;
