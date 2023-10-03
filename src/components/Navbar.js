import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const switchActive = (name) => {
    for (const elem of document.getElementsByClassName("nav-link")) {
      elem.className = "nav-link";
    }
    document.getElementById(name).className = "nav-link active";
  };
  return (
    <div className="sticky-top ">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            News Feed
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => {
                    switchActive("hello");
                  }}
                  aria-current="page"
                  id="hello"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => {
                    switchActive("buisness");
                  }}
                  to="/business"
                  id="buisness"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="entertainment"
                  onClick={() => {
                    switchActive("entertainment");
                  }}
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  onClick={() => {
                    switchActive("health");
                  }}
                  id="health"
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="science"
                  onClick={() => {
                    switchActive("science");
                  }}
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  id="technology"
                  onClick={() => {
                    switchActive("technology");
                  }}
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
