import React, { Component } from "react";

class Search extends Component {
  state = {
    filteredTrails: [], // array of trails filtered by input
    userInput: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchTrails(this.state.filteredTrails);
    this.setState({
      userInput: "",
    });
  };

  // Gets trails from props
  // Sets userInput to input field value
  // Filters the trails based on the userInput substring
  // Directly affects the trailsList below
  onChange = (e) => {
    let trails = this.props.trails;
    const userInput = e.currentTarget.value;
    const filteredTrails = trails.filter(
      (obj) => obj.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    console.log(userInput);
    console.log(filteredTrails);
    this.props.searchTrails(this.state.filteredTrails);
    this.setState({
      userInput,
    });
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
            onChange={this.onChange}
            value={this.state.userInput}
          ></input>
          <button>
            <i className='fas fa-search'></i>
          </button>
        </form>
      </div>
    );
  }
}
export default Search;
