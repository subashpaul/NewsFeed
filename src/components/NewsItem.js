import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div className="card my-3" style={{ borderRadius: "10px" }}>
        <img
          src={
            imgUrl
              ? imgUrl
              : "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
          }
          className="card-img-top"
          alt="image"
          style={{
            height: "10rem",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p style={{ height: "4rem" }} className="card-text">
            {description}
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark rounded"
          >
            Read More
          </a>
        </div>
      </div>
    );
  }
}
