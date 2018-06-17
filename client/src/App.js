import React, { Component } from "react";
import Home from "./components/Home";
import Saved from "./components/Saved";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Saved />
      </div>
    );
  }
}

export default App;
