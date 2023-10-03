import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setPage] = useState(1);
  const [noPages, setNoPages] = useState(null);
  const [totalResults, setTotalResults] = useState(0);

  document.title =
    props.category.charAt(0).toUpperCase() +
    props.category.slice(1) +
    " | NewsFeed";

  useEffect(async () => {
    props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pSize}`;
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(60);

    setarticles(parsedData.articles);
    setloading(false);
    setNoPages(Math.ceil(parsedData.totalResults / props.pSize));

    props.setProgress(80);
    props.setProgress(100);
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(page + 1);
    setloading(false);
  };
  document.body.style.background =
    "linear-gradient(to right, #bdc3c7, #2c3e50)"; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  return (
    <>
      <h2 className="text-center mt-3 display-5">
        News Feed-Top
        {" " +
          props.category.charAt(0).toUpperCase() +
          props.category.slice(1)}{" "}
        Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length != totalResults}
        loader={<Spinner />}
      >
        <div className="container my-2 ">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 125) + "..."
                        : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta totam possimus laboriosam aliqu..."
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    date={element.publishedAt}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}
News.defaultProps = {
  country: "in",
  pSize: 9,
};
News.propTypes = {
  country: PropTypes.string,
  page: PropTypes.number,
};
