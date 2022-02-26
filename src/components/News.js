import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
export default class News extends Component {
  static defaultProps = {
    country: "in",
    pSize: 9,
  };
  static propTypes = {
    country: PropTypes.string,
    page: PropTypes.number,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      noPages: null,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bdb41791f73a432d8de80e012da005bb&page=1&pageSize=${this.props.pSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      noPages: Math.ceil(parsedData.totalResults / this.props.pSize),
      articles: parsedData.articles,
      loading: false,
    });
  }
  clickedNext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=bdb41791f73a432d8de80e012da005bb&page=${
      this.state.page + 1
    }&pageSize=${this.props.pSize}`;
    this.setState({ loading: true });

    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
    // console.log(this.state.page, url);
  };
  clickedPrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=bdb41791f73a432d8de80e012da005bb&page=${
      this.state.page - 1
    }&pageSize=${this.props.pSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  render() {
    document.body.style.background =
      "linear-gradient(to right, #bdc3c7, #2c3e50)"; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    return (
      <div className="container my-3">
        <h2 className="text-center">News Feed-Top Headlines</h2>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 110) + "..."
                        : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta totam possimus laboriosam aliqu..."
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between">
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
        </div>
      </div>
    );
  }
}
