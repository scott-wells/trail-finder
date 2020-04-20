import React, { Component } from "react";
import "./App.scss";
import axios from "axios";

import Trails from "./components/trails/Trails";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";

class App extends Component {
  state = {
    trails: {},
  };

  // Searches trails near Albuquerque
  searchTrails = async (text) => {
    const res = await axios.get(
      `https://www.hikingproject.com/data/get-trails?lat=35.0844&lon=-106.6504&maxDistance=30&maxResults=30&key=${process.env.REACT_APP_HIKING_PROJECT_KEY}`
    );
    this.setState({ trails: res.data.trails });
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
            <Search searchTrails={this.searchTrails} />
            <div className='cardWrap'>
              <div className='card'>
                <div className='cardImg'>
                  <img
                    src='https://images.unsplash.com/photo-1561999270-c1ae85826fc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=582&q=80'
                    alt='trail 1'
                  />
                </div>
                <div className='cardContent'>
                  <h4>Trail Name</h4>
                  <div>
                    <span>Length: 7 mi.</span>
                    <span>
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                      <i className='fas fa-star' />
                    </span>
                  </div>
                  <div>
                    <span className='tag'>tag</span>
                    <span className='tag'>tag</span>
                    <span className='tag'>tag</span>
                    <span className='tag'>tag</span>
                    <span className='tag'>tag</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <Trails trails={this.state.trails} /> */}
          </div>

          <div className='map'>MAP</div>
        </div>
      </div>
    );
  }
}

export default App;
