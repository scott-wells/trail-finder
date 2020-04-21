import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    longitude: -106.7,
    latitude: 35.1,
    width: "100%",
    height: "100%",
    zoom: 10,
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      />
    </div>
  );
};

export default Map;
