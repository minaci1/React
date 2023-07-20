import React from "react";
import { Link, useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>게시글{id}</h2>
      <h3>게시글 내용~~~~~~~~~</h3>
    </div>
  );
};

export default Article;
