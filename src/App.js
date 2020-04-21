import React, { Component } from "react";
import "./App.scss";
import axios from "axios";

import Trails from "./components/trails/Trails";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Map from "./components/layout/Map";

class App extends Component {
  state = {
    trails: {},
  };

  // loads all trails near Albuquerque within 30 miles
  async componentDidMount() {
    const res = await axios.get(
      `https://www.hikingproject.com/data/get-trails?lat=35.0844&lon=-106.6504&maxDistance=30&maxResults=30&key=${process.env.REACT_APP_HIKING_PROJECT_KEY}`
    );

    this.setState({ trails: res.data.trails });
  }

  render() {
    return (
      <div className='App'>
        <Navbar />
        <div className='mainContent'>
          <div className='sidebar'>
            <Search />
            <Trails trails={this.state.trails} />
          </div>
          <Map trails={this.state.trails} />
        </div>
      </div>
    );
  }
}

export default App;
