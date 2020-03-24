import React from "react";

const TrailItem = ({ trail: { name, imgSmall, location } }) => {
  return (
    <div className='card text-center'>
      <img src={imgSmall} alt='trail' style={{ width: "25%" }} />
      <h3>{name}</h3>
      <p>{location}</p>
    </div>
  );
};

export default TrailItem;
