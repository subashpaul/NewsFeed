import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const apiKey = process.env.REACT_APP_API;
  const [progress, setProgress] = useState(0)
  return (
    <Router>
      <LoadingBar color="#f11946" height={3} shadow={true} progress={progress} waitingTime={850} loaderSpeed={1000} />
      <Navbar />
      <Routes>
        {/* React won’t render the NewsComponent again while navigating through different categories as it will render the NewsComponent for the first request. But we want to rebound the News component with the Updated Props. To fix this issue we would add a unique key prop to every route */}
        <Route exact path="/" element={
          <News setProgress={setProgress} apiKey={apiKey} key="general" pSize={9} country="in" category="general" />
        }
        />
        <Route
          exact
          path="/business"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="business"
              pSize={9}
              country="in"
              category="business"
            />
          }
        />
        <Route
          exact
          path="/health"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="health"
              pSize={9}
              country="in"
              category="health"
            />
          }
        />
        <Route
          exact
          path="/science"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
              key="science"
              pSize={9}
              country="in"
              category="science"
            />
          }
        />
        <Route
          exact
          path="/entertainment"
          element={
            <News
              setProgress={setProgress}
              apiKey={apiKey}
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
              setProgress={setProgress}
              apiKey={apiKey}
              key="technology"
              pSize={9}
              country="in"
              category="technology"
            />
          }
        />
      </Routes>
    </Router>
  );

}
