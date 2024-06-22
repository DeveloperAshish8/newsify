import React from "react";
import { Link } from "react-router-dom";
import Article from "./Article";

const ArticleList = ({ articles, search, setSearch, addToFavorites }) => {
  return (
    <>
      <span className="relative flex justify-center mt-28">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

        <span className="relative z-10 text-3xl font-bold bg-white px-6 text-[#1A21ED]">
          TODAY'S NEWS
        </span>
      </span>

      {/* search bar */}
      <div class="flex justify-end items-center relative mt-5 mx-auto w-[220px]">
        <input
          placeholder="Search topic"
          onChange={(e) => setSearch(e.target.value)}
          class="h-8   md:p-4 p-3 rounded-xl border-[1px] border-[#878787]"
        />
        <img src="/search.svg" class="absolute mr-2 w-5" alt="Search Icon" />
      </div>

      {/* Actual cards area starts*/}
      <div className="flex mx-auto max-w-[1000px] flex-wrap md:mt-8 mt-5">
        {articles
          .filter((article) => {
            if (article === "") {
              // When search bar is empty
              return article;
            } else if (
              article.title.toLowerCase().includes(search.toLowerCase())
            ) {
              console.log(article);
              return article;
            }
          })
          .map((article, index) => {
            return (
              <div className="flex flex-col my-5 bg-white overflow-hidden border-b-4  md:w-[400px] mx-8  p-3 rounded-lg border-[1px] border-[#1A21ED] justify-between">
                <Link key={index} to={`/article/${index}`}>
                  <Article article={article} />
                </Link>
                {/* Add to favorite button */}
                <button
                  onClick={() => {
                    addToFavorites(article.url);
                  }}
                  className=" mx-10 rounded-xl bg-[#1A21ED]  md:px-4 px-2 md:py-3 py-2 text-base font-semibold  transition  flex  text-center text-white  shadow items-center mt-2 justify-center gap-2 hover:bg-[#e7decc]"
                >
                  {/* star icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-star"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  Add to Favorite
                </button>
              </div>
            );
          })}
      </div>
      {/* Cards area ends */}
    </>
  );
};

export default ArticleList;
