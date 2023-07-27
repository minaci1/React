import React, { useReducer } from "react";

const colorReducer = (state, action) => {
  return state[action.type] ? { ...state, [action.type]: action.value } : null;
};

const ColorModel = () => {
  const [state, dispatch] = useReducer(colorReducer, {
    color: "yellow",
    subject: "orange",
  });
  return {
    state: state,
    actions: {
      setColor: (color) => {
        dispatch({ type: "color", value: color });
      },
      setSubject: (subject) => {
        dispatch({ type: "subject", value: subject });
      },
    },
  };
};
export default ColorModel;
