import React, { useState, useEffect } from "react";
import "./App.scss";

import Trails from "./components/trails/Trails";
import Navbar from "./components/layout/Navbar";
import Search from "./components/layout/Search";
import Map from "./components/layout/Map";

function App() {
  const [trails, setTrails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

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

  return (
    <div className='App'>
      <Navbar />
      <div className='mainContent'>
        <div className='sidebar'>
          <Search searchText={(text) => setSearchTerm(text)} />
          <Trails trails={trails} />
        </div>
        <Map trails={trails} />
      </div>
    </div>
  );
}

export default App;
