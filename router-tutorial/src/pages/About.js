import React from "react";
import { useSearchParams } from "react-router-dom";
//useSearchParams 은 key와 value로 자동으로 파싱을 해준다.

const About = () => {
  const [searchParam, setSearchParams] = useSearchParams();
  const detail = searchParam.get("detail");
  const mode = searchParam.get("mode");

  const onToggleDetail = (e) => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncMode = (e) => {
    setSearchParams({
      detail,
      mode: !isNaN(mode) && mode ? parseInt(mode) + 1 : 1,
    });
  };
  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncMode}>mode + 1 증가 </button>
    </div>
  );
};

export default About;
