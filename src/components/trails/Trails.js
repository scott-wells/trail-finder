import React from "react";
import TrailItem from "./TrailItem";

const Trails = ({ trails }) => {
  return (
    <div>
      {Object.keys(trails).map((key) => (
        <TrailItem key={key} trail={trails[key]} />
      ))}
    </div>
  );
};

TrailItem.defaultValue = {
  trail: {},
};

export default Trails;
