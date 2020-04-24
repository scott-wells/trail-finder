import React, { useState } from "react";

const Search = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          name='search'
          className='formPill'
          placeholder='Search...'
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
