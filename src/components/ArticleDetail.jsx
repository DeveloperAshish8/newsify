import React from "react";
import { useParams } from "react-router-dom";

const ArticleDetail = ({ articles }) => {
  const { id } = useParams();
  const article = articles[id];

  if (!article) return <div>Article not found</div>;

  return (
    <div className="flex flex-col mx-auto max-w-[1000px] flex-wrap justify-center mt-10 p-3">
      {/* News Source info*/}
      <p className="font-normal mb-2 text-base leading-tight sm:leading-normal max-w-[700px] mx-auto text-center">
        By <strong className="text-red-600 underline">{article.author} </strong>{" "}
        ● {article.publishedAt.substr(0, 10)}
      </p>
      <h1 className="font-semibold my-2 text-xl leading-tight sm:leading-normal max-w-[700px] mx-auto text-center">
        {article.title}
      </h1>
      <img
        src={article?.urlToImage ? article?.urlToImage : "/default.png"}
        alt="Loading failed"
        className="mt-5"
      />
      <p className="mt-4 max-w-[800px] text-base  leading-7  text-[#71797E] md:text-left text-center mx-auto">
        {article.content}
      </p>
    </div>
  );
};

export default ArticleDetail;
