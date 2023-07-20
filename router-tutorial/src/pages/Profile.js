import React from "react";
import { useParams } from "react-router-dom";

//현재 라우트의 매개변수를 가져와서 userInfos 객체에서 해당 사용자 정보를 찾고, 그에 따라 프로필 정보를 화면에 렌더링
const userInfos = {
  velopert: {
    name: "김민준",
    desc: "리액트를 좋아하는 개발자...",
    age: 20,
  },
  gildong: {
    name: "홍길동",
    desc: "의적 개발자...",
    age: 66,
  },
};

const Profile = () => {
  const params = useParams();
  const userInfo = userInfos[params.userid];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {userInfo ? (
        <div>
          <h2>{userInfo.name}</h2>
          <h2>{userInfo.desc}</h2>
        </div>
      ) : (
        <p>존재하지 않는 프로필 입니다</p>
      )}
    </div>
  );
};

export default Profile;
