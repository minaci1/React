import ColorComponent from "./ColorComponent";
import { useState } from "react";

function AppState() {
  const [state, setState] = useState({ color: "black", subject: "red" }); //color 큰상자, subject 작은 상자

  const setColor = (color) => {
    setState({ ...state, color });
  };

  const setSubject = (subject) => {
    setState({ ...state, subject });
  };

  const actions = { setColor, setSubject }; // 데이터를 변경하는 함수를 actions 으로 정의함

  

  //위코드를 아래와 같이 수정하는 것이 좋다
  // const actions = {
  //   setColor : color => {
  //     setState({...state, color});
  //   },
  //   setSubject : subject => {
  //     setState({...state, subject});
  //   }
  // };

  return (
    <div>
      <ColorComponent state={state} actions={actions} />
    </div>
  );
}

export default AppState;
