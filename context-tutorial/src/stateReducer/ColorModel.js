import { useReducer } from "react";

const colorReducer = (state, action) => {
  return action["type"] && action["value"]
    ? { ...state, [action.type]: action.value }
    : state; // 문자열 // 일반화 하였다. 약간 위험 부담이 있다. value에 값이 있어야 한다.
};

const ColorModel = () => {
  const [state, dispatch] = useReducer(colorReducer, {
    // 첫번째 함수, 두번째 데이터
    color: "black",
    subject: "red",
  });

  const setColor = (color) => {
    dispatch({ type: "color", value: color });
  };

  const setSubject = (subject) => {
    dispatch({ type: "subject", value: subject });
  };
  return { state, setColor, setSubject };
};

export default ColorModel;
