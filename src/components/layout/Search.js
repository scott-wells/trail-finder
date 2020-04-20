import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchTrails: PropTypes.func.isRequired,
  };

  // method captures the text input
  onChange = (e) => this.setState({ text: e.target.value });

  onSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    this.props.searchTrails(this.state.text); // .searchTrails() is a global method
    this.setState({ text: "" }); // reset search field
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            type='text'
            name='search'
            className='formPill'
            placeholder='Search...'
            value={this.state.text}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}
