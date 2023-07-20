import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지입니다.</p>
      <Link to="/about">소개</Link> | <a href="/about">소개</a>
      <p>
        쿼리스트링 예제 : <Link to="/about?detail=true&mode=1">소개</Link>
      </p>
      <ul>
        <li>
          <Link to="/profile/velopert">velopert 의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong 의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/void">존재하지 않은 프로필</Link>
        </li>
        <li>
          <Link to="/articles">게시글 목록</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
