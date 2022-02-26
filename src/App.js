import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News key="general" pSize={9} country="in" category="general" />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News key="business" pSize={9} country="in" category="business" />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News key="health" pSize={9} country="in" category="health" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News key="science" pSize={9} country="in" category="science" />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pSize={9}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pSize={9}
                country="in"
                category="technology"
              />
            }
          />

          {/* <Route exact path="/">
            <News key="general" pageSize={9} country="in" category="general" />
          </Route>
          <Route exact path="/business">
            <News
              key="business"
              pageSize={9}
              country="in"
              category="business"
            />
          </Route>
          <Route exact path="/entertainment">
            <News
              key="entertainment"
              pageSize={9}
              country="in"
              category="entertainment"
            />
          </Route>
          <Route exact path="/health">
            <News key="health" pageSize={9} country="in" category="health" />
          </Route>
          <Route exact path="/science">
            <News key="science" pageSize={9} country="in" category="science" />
          </Route>
          <Route exact path="/sports">
            <News key="sports" pageSize={9} country="in" category="sports" />
          </Route>
          <Route exact path="/technology">
            <News
              key="technology"
              pageSize={9}
              country="in"
              category="technology"
            />
          </Route> */}
        </Routes>
      </Router>
    );
  }
}
