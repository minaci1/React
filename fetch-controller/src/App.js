import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    status: -1,
    result: 0,
    message: '',
    uuid: '',
  });

  const onSum = async () => {
    const response = await axios.get('http://localhost:8081/api/createId');
    console.log(response.data);
    //console.log(response.headers['SessionId']); // 이클립스에서 넣은 headers 값 불러와짐

    setState({ status: -1, result: 0, message: '', uuid: '' });
    if (response.data.status === 1) {
      setState({ ...state, uuid: response.data.uuid });
      console.log('만든 uuid 가져옴 ' + state.uuid);
      const response2 = await axios.get(
        'http://localhost:8081/api/sum?uuid=' + response.data.uuid,
      );
      setState(response2.data);
    }
  };

  const onSumCancle = async () => {
    const response = await axios.get(
      'http://localhost:8081/api/sumCancel?uuid=' + state.uuid,
    );
    console.log('response' + response.data);
    setState(response.data);
    console.log('state.result:' + state.result);
    console.log('state.status:' + state.status);
  };

  return (
    <div>
      <div>axios</div>
      <p>
        결과 : {state.status === 1 || state.status === -2 ? state.result : ''}
      </p>
      <p>메세지 : {state.message}</p>
      <button onClick={onSum}>onSum</button>
      <button onClick={onSumCancle}>onSumCancle</button>
    </div>
  );
}

export default App;
