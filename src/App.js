import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";
import TrailItem from "./components/trails/TrailItem";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <TrailItem />
      </div>
    );
  }
}

export default App;
