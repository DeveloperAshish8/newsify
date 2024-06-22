import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import ArticleList from "./components/ArticleList";
import Pagination from "./components/Pagination";
import ArticleDetail from "./components/ArticleDetail";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Favorites from "./components/Favorites";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("general");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("f")) || []
  );

  useEffect(() => {
    //fetching data from API
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in",
          {
            params: {
              category,
              page,
              apiKey: process.env.REACT_APP_API_KEY,
            },
          }
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.log("API ERROR");
      }
      setLoading(false);
    };

    fetchArticles();
  }, [category, page]);

  useEffect(() => {
    localStorage.setItem("f", JSON.stringify(favorites));
  }, [favorites]);

  //function for add to favorite button
  const addToFavorites = (url) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.includes(url)) {
        return [...prevFavorites, url];
      }
      return prevFavorites;
    });
  };

  return (
    <>
      <Routes>
        {/* home page route */}
        <Route
          path="/"
          element={
            <>
              <Header
                setCategory={setCategory}
                setPage={setPage}
                search={search}
              />
              {loading ? (
                <Loading />
              ) : (
                <>
                  <ArticleList
                    articles={articles}
                    search={search}
                    setSearch={setSearch}
                    addToFavorites={addToFavorites}
                  />
                  <Pagination page={page} setPage={setPage} />
                </>
              )}
            </>
          }
        />
        {/* dynamic route for each id */}
        <Route
          path="/article/:id"
          element={<ArticleDetail articles={articles} />}
        />
        {/* Routes for favorite news */}
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} articles={articles} />}
        />
      </Routes>
    </>
  );
};

export default App;
