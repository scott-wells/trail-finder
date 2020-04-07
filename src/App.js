import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Trails from "./components/trails/Trails";
import axios from "axios";

class App extends Component {
  state = {
    trails: {},
  };

  async componentDidMount() {
    const res = await axios.get(
      `https://www.hikingproject.com/data/get-trails?lat=35.0844&lon=-106.6504&maxDistance=10&key=${process.env.REACT_APP_HIKING_PROJECT_KEY}`
    );

    this.setState({ trails: res.data.trails });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div>
          <Trails trails={this.state.trails} />
        </div>
      </div>
    );
  }
}

export default App;
