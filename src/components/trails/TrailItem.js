import React, { Component } from "react";
import Stars from "./Stars";

class TrailItem extends Component {
  render() {
    const { name, imgMedium, length, stars } = this.props.trail;

    return (
      <div className='cardWrap'>
        <div className='card'>
          <div className='cardImg'>
            {!imgMedium ? (
              <i className='fas fa-hiking' />
            ) : (
              <img src={imgMedium} alt={name} />
            )}
          </div>
          <div className='cardContent'>
            <h4>{name}</h4>
            <div>
              <span>Length: {length} mi.</span>
              <span>
                <Stars stars={stars} />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrailItem;
