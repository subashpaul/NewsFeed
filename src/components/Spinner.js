import React, { Component } from "react";
import Swing from "./Swing.gif";
export default class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img
          src={Swing}
          alt="Loading"
          style={{ background: "linear-gradient(to right, #bdc3c7, #2c3e50)" }}
        />
      </div>
    );
  }
}
