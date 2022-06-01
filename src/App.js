import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default class extends Component {
  //pageSize=15;
  // apiKey = process.env.REACT_APP_NEWS_API
  apiKey = "pub_78653f5053988f420acaac4fd6550cde7fc3";
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News apiKey={this.apiKey}
                  key="top"

                  country="in"
                  category="top"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News apiKey={this.apiKey}
                  key="business"

                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News apiKey={this.apiKey}
                  key="entertainment"

                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/environment"
              element={
                <News apiKey={this.apiKey}
                  key="environment"

                  country="in"
                  category="environment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News apiKey={this.apiKey}
                  key="health"

                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News apiKey={this.apiKey}
                  key="science"

                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News apiKey={this.apiKey}
                  key="sports"

                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News apiKey={this.apiKey}
                  key="technology"

                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
