import React, { Component } from "react";
import PropTypes from "prop-types";

class TrailItem extends Component {
  render() {
    const { name, imgSmallMed, location } = this.props.trail;
    return (
      <div className='card text-center'>
        <img src={imgSmallMed} style={{ width: "25%" }} />
        <h3>{name}</h3>
        <p>{location}</p>
      </div>
    );
  }
}

export default TrailItem;
