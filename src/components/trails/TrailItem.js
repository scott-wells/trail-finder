import React, { Component } from "react";

class TrailItem extends Component {
  state = {
    id: "id",
    name: "Bear Peak Out and Back",
    imgSmall:
      "https://cdn-files.apstatic.com/hike/7005382_small_1554312030.jpg",
    location: "Boulder, Colorado"
  };

  render() {
    const { imgSmall, name, location } = this.state;

    return (
      <div className='card text-center'>
        <img src={imgSmall} alt='trail picture' style={{ width: "25%" }} />
        <h3>{name}</h3>
        <p>{location}</p>
      </div>
    );
  }
}

export default TrailItem;
