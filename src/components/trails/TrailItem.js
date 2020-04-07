import React, { Component } from "react";
import Stars from "./Stars";

class TrailItem extends Component {
  render() {
    const { name, imgSqSmall, length, stars } = this.props.trail;
    const icon = this.props.icon;

    // if the api does not return an imgSqSmall, show the icon instead
    if (!imgSqSmall) {
      return (
        <div className='card text-center'>
          <i className={icon} style={{ fontSize: "1.5rem" }} />
          <h4>{name}</h4>
          <div>
            <p style={{ fontSize: ".8rem" }}>Length: {length}mi.</p>
            <Stars stars={stars} />
          </div>
        </div>
      );
    }

    return (
      <div className='card text-center'>
        <img src={imgSqSmall} style={{ width: "25%" }} />
        <h4>{name}</h4>
        <div>
          <p style={{ fontSize: ".8rem" }}>Length: {length}mi.</p>
          <Stars stars={stars} />
        </div>
      </div>
    );
  }
}

TrailItem.defaultProps = {
  icon: "fas fa-hiking",
};

export default TrailItem;
