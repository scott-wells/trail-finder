import React, { Component, Fragment } from "react";

class Stars extends Component {
  render() {
    const stars = this.props.stars;
    const icon = this.props.icon;

    if (stars >= 4.5) {
      return (
        <Fragment>
          <i className={icon} style={starsStyle} />
          <i className={icon} style={starsStyle} />
          <i className={icon} style={starsStyle} />
          <i className={icon} style={starsStyle} />
          <i className={icon} style={starsStyle} />
        </Fragment>
      );
    } else if (stars < 4.5 && stars >= 3.5) {
      return (
        <Fragment>
          <i className={icon} style={starsStyle} />
          <i className={icon} style={starsStyle} />
          <i className={icon} style={starsStyle} />
          <i className={icon} style={starsStyle} />
        </Fragment>
      );
    } else if (stars < 3.5 && stars >= 2.5) {
      return (
        <Fragment>
          <i className={icon} style={starsStyle} />
          <i className={icon} style={starsStyle} />
          <i className={icon} style={starsStyle} />
        </Fragment>
      );
    } else if (stars < 2.5 && stars >= 1.5) {
      return (
        <Fragment>
          <i className={icon} style={starsStyle} />
          <i className={icon} style={starsStyle} />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <i className={icon} style={starsStyle} />
        </Fragment>
      );
    }
  }
}

Stars.defaultProps = {
  icon: "fas fa-star",
};

const starsStyle = {
  fontSize: ".6rem",
};

export default Stars;
