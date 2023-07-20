import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = (e) => {
    navigate(-1);
  };
  const goArticles = (e) => {
    navigate("/articles", { replace: true });
  };
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header, 메뉴
        <button onClick={goBack}>뒤로 가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main style={{ minHeight: "600px" }}>
        <Outlet />
      </main>
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
          width: "100%",
        }}
      >
        <h1
          style={{
            flex: 1,
            textAlign: "center",
          }}
        >
          copy right 더존5기
        </h1>
      </footer>
    </div>
  );
};

export default Layout;
