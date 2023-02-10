import React from "react";
import ArticlesList from "../components/ArticlesList";
import articles from "./article-content";

const ArticlesListsPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticlesList articles={articles} />
    </>
  );
};

export default ArticlesListsPage;
