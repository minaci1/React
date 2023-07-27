import React from "react";
import SelectColors from "./SelectColor";
import ColorBox from "./ColorBox";

const ColorComponent = ({ state, actions }) => {
  //action에 동작 관련 2개 있다.
  return (
    <div>
      <SelectColors actions={actions} />
      <ColorBox state={state} />
    </div>
  );
};

export default ColorComponent;
