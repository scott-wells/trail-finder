import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  //   static propTypes = {
  //     trails: PropTypes.instanceOf(Array).isRequired,
  //   };

  state = {
    activeTrail: 0, // index of the active trail
    filteredTrails: [], // array of trails filtered by input
    showTrails: false,
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
      activeTrail: 0,
      filteredTrails,
      showTrails: true,
      userInput: e.currentTarget.value,
    });
  };

  // Turns suggestions off and puts the clicked text into the input field
  onClick = (e) => {
    this.setState({
      activeTrail: 0,
      filteredTrails: [],
      showTrails: false,
      userInput: e.currentTarget.innerText,
    });
  };

  render() {
    // destructuring state
    const {
      onChange,
      onClick,
      onKeyDown,
      state: { activeTrail, filteredTrails, showTrails, userInput },
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
            // onKeyDown={onKeyDown}
            value={userInput}
          />
        </div>
        {/* {trailList} */}
      </Fragment>
    );
  }
}
export default Search;

//   // Return key(13) turns off suggestions, selects the items and puts the value in the input field
//   // Down arrow(40) and up arrow(38) select lower or upper trail. Won't go above or below the first or last trail
//   onKeyDown = (e) => {
//     const { activeTrail, filteredTrails } = this.state;

//     if (e.keyCode === 13) {
//       this.setState({
//         activeTrail: 0,
//         showTrails: false,
//         userInput: filteredTrails[activeTrail],
//       });
//     } else if (e.keyCode === 38) {
//       if (activeTrail === 0) {
//         return;
//       }
//       this.setState({ activeTrail: activeTrail - 1 });
//     } else if (e.keyCode === 40) {
//       if (activeTrail === filteredTrails.length - 1) {
//         console.log(activeTrail);
//         return;
//       }
//       this.setState({ activeTrail: activeTrail + 1 });
//     }
//   };

//   render() {
//     // destructuring state
//     const {
//       onChange,
//       onClick,
//       onKeyDown,
//       state: { activeTrail, filteredTrails, showTrails, userInput },
//     } = this;

//     // Trail selection interface for the end-user
//     // if showTrails is true, input field is not blank
//     // Goes through filteredTrails to make a list, active-trail gets a className
//     // If the input field value doesn't match anything, it says 'No trail!'
//     let trailList;
//     if (showTrails && userInput) {
//       if (filteredTrails.length) {
//         trailList = (
//           <ul className='trails'>
//             {filteredTrails.map((trailName, index) => {
//               let className;
//               if (index === activeTrail) {
//                 className = "trail-active";
//               }
//               return (
//                 <li className={className} key={trailName} onClick={onClick}>
//                   {trailName}
//                 </li>
//               );
//             })}
//           </ul>
//         );
//       } else {
//         trailList = (
//           <div className='no-trails'>
//             <em>No Trail!</em>
//           </div>
//         );
//       }
//     }
//
// }
