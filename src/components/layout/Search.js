import React, { Component, Fragment } from "react";

class Search extends Component {
  state = {
    filteredTrails: [], // array of trails filtered by input
    userInput: "",
  };

  // Gets trails from props
  // Sets userInput to input field value
  // Filters the trails based on the userInput substring
  // Directly affects the trailsList below
  onChange = (e) => {
    const trails = this.props.trails;
    const trailObjects = Object.values(trails);
    let trailNames = [];
    for (const trail of trailObjects) {
      trailNames.push(trail.name);
    }
    const userInput = e.currentTarget.value;
    const filteredTrails = trailNames.filter(
      (name) => name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    console.log(userInput);
    console.log(filteredTrails);
    this.setState({
      filteredTrails,
      userInput: e.currentTarget.value,
    });
  };

  render() {
    // destructuring state
    const {
      onChange,
      state: { userInput },
    } = this;

    return (
      <Fragment>
        <div>
          <input
            type='text'
            name='search'
            className='formPill'
            placeholder='Search...'
            onChange={onChange}
            value={userInput}
          />
        </div>
      </Fragment>
    );
  }
}
export default Search;

// // Turns suggestions off and puts the clicked text into the input field
// onClick = (e) => {
//   this.setState({
//     filteredTrails: [],
//     userInput: e.currentTarget.innerText,
//   });
// };
