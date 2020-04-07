import React, { Component } from "react";
import Stars from "./Stars";

class TrailItem extends Component {
  render() {
    const { name, imgSmallMed, length, stars } = this.props.trail;
    return (
      <div className='card text-center'>
        <img src={imgSmallMed} style={{ width: "25%" }} />
        <h4>{name}</h4>
        <div>
          <p style={{ fontSize: ".8rem" }}>Length: {length}mi.</p>
          <Stars stars={stars} />
        </div>
      </div>
    );
  }
}

export default TrailItem;
