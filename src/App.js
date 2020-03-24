import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Trails from "./components/trails/Trails";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Trails />
        </div>
      </div>
    );
  }
}

export default App;
