import React from "react";
import Stars from "./Stars";

const TrailItem = ({ trail: { name, imgMedium, length, stars } }) => {
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
};

export default TrailItem;
