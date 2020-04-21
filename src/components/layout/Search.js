import React, { Component } from "react";

export default class Search extends Component {
  state = {
    text: "",
  };

  // method captures the text input
  onChange = (e) => this.setState({ text: e.target.value });

  render() {
    return (
      <div>
        <form>
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
