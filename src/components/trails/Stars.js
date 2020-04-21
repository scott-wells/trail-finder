import React, { Component, Fragment } from "react";

class Stars extends Component {
  render() {
    const stars = this.props.stars;
    const icon = this.props.icon;

    if (stars >= 4.5) {
      return (
        <Fragment>
          <i className={icon} />
          <i className={icon} />
          <i className={icon} />
          <i className={icon} />
          <i className={icon} />
        </Fragment>
      );
    } else if (stars < 4.5 && stars >= 3.5) {
      return (
        <Fragment>
          <i className={icon} />
          <i className={icon} />
          <i className={icon} />
          <i className={icon} />
        </Fragment>
      );
    } else if (stars < 3.5 && stars >= 2.5) {
      return (
        <Fragment>
          <i className={icon} />
          <i className={icon} />
          <i className={icon} />
        </Fragment>
      );
    } else if (stars < 2.5 && stars >= 1.5) {
      return (
        <Fragment>
          <i className={icon} />
          <i className={icon} />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <i className={icon} />
        </Fragment>
      );
    }
  }
}

Stars.defaultProps = {
  icon: "fas fa-star",
};

export default Stars;
