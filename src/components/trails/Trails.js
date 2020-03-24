import React, { Component } from "react";
import TrailItem from "./TrailItem";

export class Trails extends Component {
  state = {
    trails: [
      {
        id: "7000130",
        name: "Bear Peak Out and Back",
        imgSmall:
          "https://cdn-files.apstatic.com/hike/7005382_small_1554312030.jpg",
        location: "Boulder, Colorado"
      },
      {
        id: "7011192",
        name: "Boulder Skyline Traverse",
        imgSmall:
          "https://cdn-files.apstatic.com/hike/7048859_small_1555540136.jpg",
        location: "Superior, Colorado"
      },
      {
        id: "7004226",
        name: "Sunshine Lion's Lair Loop",
        imgSmall:
          "https://cdn-files.apstatic.com/hike/7039883_small_1555092747.jpg",
        location: "Boulder, Colorado"
      }
    ]
  };

  render() {
    return (
      <div style={trailStyle}>
        {this.state.trails.map(trail => (
          <TrailItem key={trail.id} trail={trail} />
        ))}
      </div>
    );
  }
}

const trailStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

export default Trails;
