import React, { useState, useEffect } from "react";
import "./App.scss";

import Trails from "./components/trails/Trails";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Map from "./components/layout/Map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [trails, setTrails] = useState({});

  // Return 100 trails within 200 miles of Albuquerque, NM
  useEffect(() => {
    fetch(
      `https://www.hikingproject.com/data/get-trails?lat=35.0844&lon=-106.6504&maxDistance=200&maxResults=100&key=${process.env.REACT_APP_HIKING_PROJECT_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.trails);
        setTrails(data.trails);
      })
      .catch((err) => console.log(err));
  }, []);

  // const searchTrails = (filteredTrails, userInput) => {
  //   console.log(filteredTrails, userInput);
  // };

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <div className='mainContent'>
                <div className='sidebar'>
                  <Search trails={trails} />
                  <Trails trails={trails} />
                </div>
                <Map trails={trails} />
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
