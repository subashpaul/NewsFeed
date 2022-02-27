import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pSize: 9,
  };
  static propTypes = {
    country: PropTypes.string,
    page: PropTypes.number,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      noPages: null,
      totalResults: 0,
    };
    document.title =
      this.props.category.charAt(0).toUpperCase() +
      this.props.category.slice(1) +
      " | NewsFeed";
  }

  async componentDidMount() {
    this.props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pSize}`;
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json();
    this.props.setProgress(60);
    this.setState({
      noPages: Math.ceil(parsedData.totalResults / this.props.pSize),
      articles: parsedData.articles,
      loading: false,
    });
    this.props.setProgress(80);
    this.props.setProgress(100);
  }

  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
      loading: false,
    });
    // console.log(url, this.state.page);
  };
  render() {
    document.body.style.background =
      "linear-gradient(to right, #bdc3c7, #2c3e50)"; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    return (
      <>
        <h2 className="text-center mt-3 display-5">
          News Feed-Top
          {" " +
            this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{" "}
          Headlines
        </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length != this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-2 ">
            <div className="row">
              {this.state.articles.map((element) => {
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

        {/* <div className="d-flex justify-content-between">
          <button
            className="btn btn-sm btn-dark"
            disabled={this.state.page <= 1}
            onClick={this.clickedPrev}
          >
            <b>&larr; Previous</b>{" "}
          </button>
          <button
            className="btn btn-sm btn-dark"
            disabled={this.state.page >= this.state.noPages}
            onClick={this.clickedNext}
          >
            <b>Next &rarr;</b>{" "}
          </button>
        </div> */}
      </>
    );
  }
}
