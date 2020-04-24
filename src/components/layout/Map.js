import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Stars from "../trails/Stars";

const Map = ({ trails }) => {
  const [viewport, setViewport] = useState({
    longitude: -106.7,
    latitude: 35.1,
    width: "100%",
    height: "100%",
    zoom: 10,
  });

  const [selectedTrail, setSelectedTrail] = useState(null);

  return (
    <div className='map'>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle='mapbox://styles/efwells101/ck9ab473j00r21jmov9d6g2gt'
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {Object.keys(trails).map((key) => (
          <Marker
            key={key}
            trail={trails[key]}
            latitude={trails[key].latitude}
            longitude={trails[key].longitude}
          >
            <i
              className='fas fa-map-marker'
              onClick={(e) => {
                e.preventDefault();
                setSelectedTrail(trails[key]);
              }}
            />
          </Marker>
        ))}
        {selectedTrail ? (
          <Popup
            latitude={selectedTrail.latitude}
            longitude={selectedTrail.longitude}
            onClose={() => {
              setSelectedTrail(null);
            }}
          >
            <div className='cardWrap'>
              <div className='card'>
                <div className='cardImg'>
                  {!selectedTrail.imgMedium ? (
                    <i className='fas fa-hiking' />
                  ) : (
                    <img
                      src={selectedTrail.imgMedium}
                      alt={selectedTrail.name}
                    />
                  )}
                </div>
                <div className='cardContent'>
                  <h4>{selectedTrail.name}</h4>
                  <div>
                    <span>Length: {selectedTrail.length} mi.</span>
                    <span>
                      <Stars stars={selectedTrail.stars} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default Map;
