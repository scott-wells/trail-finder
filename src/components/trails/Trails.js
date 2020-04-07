import React from "react";
import PropTypes from "prop-types";
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

TrailItem.propTypes = {
  trail: PropTypes.object.isRequired,
};

TrailItem.defaultValue = {
  trail: {},
};

const trailStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};

export default Trails;
