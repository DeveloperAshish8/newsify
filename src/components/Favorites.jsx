import React from "react";
import Article from "./Article";
import { Link } from "react-router-dom";

const Favorites = ({ favorites, articles }) => {
  console.log(favorites, articles);
  return (
    <div>
      {/* Rendering Favorite News Cards */}
      {favorites.length > 0 ? (
        <div className="flex mx-auto max-w-[1000px] flex-wrap md:mt-8 mt-5">
          {articles
            .filter((article, i) => favorites.includes(article.url))
            .map((article) => (
              <div className="flex flex-col my-5 bg-white overflow-hidden border-b-4  md:w-[400px] mx-8  p-3 rounded-lg border-[1px] border-[#1A21ED]">
                <Link key={article.id} to={`/article/${article.id}`}>
                  <Article article={article} />
                </Link>
              </div>
            ))}{" "}
        </div>
      ) : (
        //For no favorite news
        <>
          <span className="relative flex justify-center mt-8">
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

            <span className="relative z-10 text-3xl font-bold bg-white px-6 text-[#1A21ED]">
              No Favorite News
            </span>
          </span>
        </>
      )}
    </div>
  );
};

export default Favorites;
