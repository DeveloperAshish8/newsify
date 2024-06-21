import React from "react";

const Article = ({ article, favorites }) => {
  return (
    <>
      <h2 className="font-semibold mb-2 text-xl leading-tight sm:leading-normal ">
        {article?.title}
      </h2>
      <img
        src={article?.urlToImage ? article?.urlToImage : "/default.png"}
        alt="image not found"
        className="my-2 object-cover h-48 w-96"
      />
      <p>{article?.description}</p>
    </>
  );
};

export default Article;
