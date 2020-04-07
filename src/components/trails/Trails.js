import React from "react";
import TrailItem from "./TrailItem";

const Trails = ({ trails }) => {
  console.log(trails);
  return (
    <div style={trailStyle}>
      {Object.keys(trails).map((key) => (
        <TrailItem key={key} trail={trails[key]} />
      ))}
    </div>
  );
};

TrailItem.defaultValue = {
  trail: {},
};

const trailStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(1, 1fr)",
  gridGap: "1rem",
};

export default Trails;
