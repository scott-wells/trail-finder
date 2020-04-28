import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navBar'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        {/* <li>Map</li>
        <li>Trails</li> */}
        <li>
          <button className='buttonPill'>Sign In</button>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "trail finder",
  icon: "fas fa-hiking",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
