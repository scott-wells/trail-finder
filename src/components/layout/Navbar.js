import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-light'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Trail Finder",
  icon: "fas fa-hiking",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
