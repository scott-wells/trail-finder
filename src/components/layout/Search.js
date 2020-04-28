import React, { Component } from "react";

class Search extends Component {
  state = {
    filteredTrails: [], // array of trails filtered by input
    userInput: "",
  };

  // onSubmit = (e) => {
  //   e.preventDefault();
  //   const trails = this.props.trails;
  //   const filteredTrails = this.state.filteredTrails;
  //   // this.props.searchTrails(this.state.filteredTrails, this.state.userInput);
  //   // this.setState({ userInput: "" });
  //   const result = Object.values(trails).filter((value) => {
  //     return value === filteredTrails;
  //   });
  //   console.log(result);
  // };

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
    this.setState({
      filteredTrails,
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
