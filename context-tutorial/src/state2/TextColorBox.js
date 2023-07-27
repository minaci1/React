import React from "react";

const TextColorBox = ({ state }) => {
  //주고 받는걸 잘해야 한다. -> 우리는 좀 더 쉽게 context api 를 사용한다.
  return (
    <>
      <h1 style={{ color: state.color, background: state.subject }}>
        안녕하세요
      </h1>
    </>
  );
};

export default TextColorBox;
